package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.ute.service.dto.BookingDto;
import vn.ute.service.dto.BookingItemDto;
import vn.ute.service.dto.CoordinatesDto;
import vn.ute.service.dto.PaymentDto;
import vn.ute.service.dto.request.CreateBookingRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.*;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.enumerate.PaymentMethod;
import vn.ute.service.enumerate.PaymentStatus;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.repository.*;
import vn.ute.service.utils.MovingFeeUtil;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.*;

@Service
public class BookingService {
    private final JwtService jwtService;
    private final ModelMapper mapper;
    private final CustomerRepository customerRepository;
    private final ProviderRepository providerRepository;
    private final PaymentService paymentService;
    private final WorkRepository workRepository;
    private final BookingRepository bookingRepository;
    private final PaymentRepository paymentRepository;
    private final BingMapsService bingMapsService;

    public BookingService(JwtService jwtService, ModelMapper mapper, CustomerRepository customerRepository, ProviderRepository providerRepository, PaymentService paymentService, WorkRepository workRepository, BookingRepository bookingRepository, PaymentRepository paymentRepository, BingMapsService bingMapsService) {
        this.jwtService = jwtService;
        this.mapper = mapper;
        this.customerRepository = customerRepository;
        this.providerRepository = providerRepository;
        this.paymentService = paymentService;
        this.workRepository = workRepository;
        this.bookingRepository = bookingRepository;
        this.paymentRepository = paymentRepository;
        this.bingMapsService = bingMapsService;
    }

    @Transactional
    public ResponseEntity<?> createBooking(CreateBookingRequest bookingRequest, HttpServletRequest request) throws IOException {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }

        if (customer.getAddresses().size() == 0 || customer.getPhone().isEmpty())
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","You have to add address and phone number first!",null));

        Set<BookingItemEntity> bookingItems = new HashSet<>();
        for (BookingItemDto w : bookingRequest.getBookingItems()){
            WorkEntity work = workRepository.findById(w.getWork().getId()).orElse(null);
            if (work == null){
                return ResponseEntity.status(404).body(new ResponseDto<>("fail","Service not found!",null));
            }
            BookingItemEntity bookingItem = new BookingItemEntity();
            bookingItem.setWork(work);
            bookingItem.setQuantity(w.getQuantity());
            bookingItems.add(bookingItem);
        }

        ServiceEntity objCompare = new ArrayList<>(bookingItems).get(0).getWork().getService();
        if (!objCompare.getStatus().equals(ServiceStatus.APPROVED)){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","This service no longer provide!",null));
        }
        boolean validWorks = bookingItems.stream().allMatch(bookingItem -> bookingItem.getWork().getService().equals(objCompare));
        if (!validWorks){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","List of works is invalid!",null));
        }

        Time currentTime = new Time(System.currentTimeMillis());

        // Convert Time objects to LocalTime
        LocalTime openTime = objCompare.getOpenTime().toLocalTime();
        LocalTime closeTime = objCompare.getCloseTime().toLocalTime();
        LocalTime currentLocalTime = currentTime.toLocalTime();

        if ( !currentLocalTime.isAfter(openTime) || !currentLocalTime.isBefore(closeTime))
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","This service has been closed or not open to provide",null));

        ProviderEntity provider = objCompare.getProvider();

        BookingEntity booking = new BookingEntity();
        booking.setCustomer(customer);
        booking.setProvider(provider);
        booking.setTime(currentTime);
        booking.setDate(new Date(System.currentTimeMillis()));
        booking.setService(objCompare);

        CoordinatesDto coordinates1 = mapper.map(new ArrayList<>(provider.getAddresses()).get(0).getCoordinates(), CoordinatesDto.class);
        CoordinatesDto coordinates2;
        if (bookingRequest.getAddress() != null){
            booking.setAddress(bookingRequest.getAddress());
            coordinates2 = bingMapsService.getLocation(bookingRequest.getAddress());
        } else {
            AddressEntity temp = new ArrayList<>(customer.getAddresses()).get(0);
            booking.setAddress(temp.toString());
            coordinates2 = mapper.map(temp.getCoordinates(), CoordinatesDto.class);
        }
        double distance = bingMapsService.calculateDistance(coordinates1,coordinates2);
        long movingFee = MovingFeeUtil.calcMovingFee(distance);
        booking.setMovingFee(movingFee);

        for (BookingItemEntity item : bookingItems){
            item.setBooking(booking);
        }

        booking.setBookingItems(bookingItems);
        booking.calcTotalPrice();

        booking.setNote(bookingRequest.getNote());


        PaymentEntity payment = new PaymentEntity();
        payment.setBooking(booking);
        payment.setMethod(PaymentMethod.valueOf(bookingRequest.getPaymentMethod().toUpperCase()));
        payment.setAmount(booking.getTotalPrice());
        booking.setPayment(payment);
        booking = bookingRepository.save(booking);


        if (payment.getMethod().equals(PaymentMethod.CASH)){
            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
            return ResponseEntity.status(200).body(new ResponseDto<>("success","Booking successfully!",bookingDto));
        }else if (payment.getMethod().equals(PaymentMethod.VNPAY)){
            String url = paymentService.createPaymentUrl(payment, request);
            return ResponseEntity.status(200).body(new ResponseDto<>("success","Booking successfully!",url));
        }
        return ResponseEntity.status(400).body(new ResponseDto<>("fail","Payment method is invalid!",null));
    }

    public ResponseEntity<?> getAllBookingOfCustomer(int pageNumber, int size, BookingStatus bookingStatus, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }
        Pageable pageable = PageRequest.of(pageNumber,size, Sort.by("date").descending().and(Sort.by("time").descending()));
        Page<BookingEntity> bookings;
        if (bookingStatus != null){
            bookings = bookingRepository.findAllByCustomerAndStatus(customer, bookingStatus, pageable);
        } else {
            bookings = bookingRepository.findAllByCustomer(customer, pageable);
        }
//        List<BookingDto> bookingDtos = new ArrayList<>();
//        for (BookingEntity booking : bookings){
//            PaymentEntity payment = paymentRepository.findByBooking(booking).orElse(null);
//            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
//            bookingDto.setPayment(mapper.map(payment, PaymentDto.class));
//            bookingDtos.add(bookingDto);
//        }
        Page<BookingDto> bookingDtos = bookings.map(booking -> mapper.map(booking,BookingDto.class));
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all services successfully!",bookingDtos));
    }

    public ResponseEntity<?> getAllBookingOfCustomerByStatus(String status, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }
        List<BookingEntity> bookings = bookingRepository.findAllByCustomerAndStatus(customer, BookingStatus.valueOf(status.toUpperCase()));
        List<BookingDto> bookingDtos = new ArrayList<>();
        for (BookingEntity booking : bookings){
            PaymentEntity payment = paymentRepository.findByBooking(booking).orElse(null);
            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
            bookingDto.setPayment(mapper.map(payment, PaymentDto.class));
            bookingDtos.add(bookingDto);
        }
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all services successfully!",bookingDtos));
    }
    @Transactional
    public ResponseEntity<?> cancelBookingByCustomer(UUID bookingId, String reason, HttpServletRequest request) throws IOException {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }
        BookingEntity booking = bookingRepository.findByIdAndCustomer(bookingId, customer).orElse(null);
        if (booking != null && booking.getStatus().equals(BookingStatus.BOOKED)){
            booking.setStatus(BookingStatus.CANCEL_BY_CUSTOMER);
            booking.setReasonCancel(reason);
            bookingRepository.save(booking);

            String message = null;
            if (booking.getPayment().getMethod().equals(PaymentMethod.VNPAY)){
                message = "Your money will be refunded soon!";
//                paymentService.refund(booking,request);
            }
            return ResponseEntity.status(200).body(new ResponseDto<>("success","Cancel booking successfully!", message));
        } else {
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You can't cancel booking now!",null));
        }

    }

    @Transactional
    public ResponseEntity<?> cancelBookingByProvider(UUID bookingId, String reason, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }
        BookingEntity booking = bookingRepository.findByIdAndProvider(bookingId, provider).orElse(null);
        if (booking != null && booking.getStatus().equals(BookingStatus.BOOKED)){
            booking.setStatus(BookingStatus.CANCEL_BY_PROVIDER);
            booking.setReasonCancel(reason);
            bookingRepository.save(booking);

            return ResponseEntity.status(200).body(new ResponseDto<>("success","Cancel booking successfully!", null));
        } else {
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You can't cancel booking now!",null));
        }
    }
    @Transactional
    public ResponseEntity<?> autoUpdateBookingStatus(UUID bookingId, HttpServletRequest request) throws IOException {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }
        BookingEntity booking = bookingRepository.findByIdAndProvider(bookingId, provider).orElse(null);
        if (booking != null){
            if (booking.getStatus().equals(BookingStatus.BOOKED))
                booking.setStatus(BookingStatus.ACCEPTED);
            else if (booking.getStatus().equals(BookingStatus.ACCEPTED)){
                booking.setStatus(BookingStatus.COMING);
                CoordinatesDto coordinates2 = mapper.map(new ArrayList<>(booking.getCustomer().getAddresses()).get(0).getCoordinates(), CoordinatesDto.class);
                CoordinatesDto coordinates1 = mapper.map(new ArrayList<>(booking.getProvider().getAddresses()).get(0).getCoordinates(), CoordinatesDto.class);
                Double time = bingMapsService.calcMovingTime(coordinates1,coordinates2);
                booking.setArriveTime(new Time((long) (System.currentTimeMillis() + time + 7 *60 * 60)));
            }
            else if (booking.getStatus().equals(BookingStatus.COMING)){
                booking.setStatus(BookingStatus.DOING);
                booking.setArriveTime(new Time(System.currentTimeMillis() + 7 *60 * 60));
            }
            else if (booking.getStatus().equals(BookingStatus.DOING)) {
                booking.setStatus(BookingStatus.DONE);
                if (booking.getPayment().getMethod().equals(PaymentMethod.CASH)){
                    booking.getPayment().setPaymentStatus(PaymentStatus.PAID);
                    booking.getPayment().setPaymentDate(new Timestamp(System.currentTimeMillis() + 7 *60 * 60));
                }

            } else {
                return ResponseEntity.status(400).body(new ResponseDto<>("fail","Fail to update booking status!",null));
            }
            bookingRepository.save(booking);
            return ResponseEntity.status(200).body(new ResponseDto<>("success","Update booking status successfully!",null));
        } else {
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You're not allowed to update booking status!",null));
        }
    }

    public ResponseEntity<?> getAllBookingOfProvider(int pageNumber, int size, BookingStatus bookingStatus, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }
        Pageable pageable = PageRequest.of(pageNumber,size, Sort.by("date").descending().and(Sort.by("time").descending()));
        Page<BookingEntity> bookings;
        if (bookingStatus != null){
            bookings = bookingRepository.findAllByProviderAndStatus(provider, bookingStatus, pageable);
        } else {
            bookings = bookingRepository.findAllByProvider(provider, pageable);
        }
//        List<BookingDto> bookingDtos = new ArrayList<>();
//        for (BookingEntity booking : bookings){
//            PaymentEntity payment = paymentRepository.findByBooking(booking).orElse(null);
//            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
//            bookingDto.setPayment(mapper.map(payment, PaymentDto.class));
//            bookingDtos.add(bookingDto);
//        }
        Page<BookingDto> bookingDtos = bookings.map(booking -> mapper.map(booking,BookingDto.class));
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all services successfully!",bookingDtos));
    }

    public ResponseEntity<?> getBookingOfCustomer(UUID bookingId, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Customer not found!",null));
        }
        BookingEntity booking = bookingRepository.findByIdAndCustomer(bookingId, customer).orElse(null);
        if (booking == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","Booking with this id doesn't exsist or isn't owned by you!",null));

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get booking successfully!",mapper.map(booking, BookingDto.class)));

    }

    public ResponseEntity<?> getBookingOfProvider(UUID bookingId, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Provider not found!",null));
        }
        BookingEntity booking = bookingRepository.findByIdAndProvider(bookingId, provider).orElse(null);
        if (booking == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","Booking with this id doesn't exsist or isn't owned by you!",null));

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get booking successfully!",mapper.map(booking, BookingDto.class)));

    }

    public ResponseEntity<?> calcPriceBooking(CreateBookingRequest bookingRequest, HttpServletRequest request) throws IOException {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }

        if (customer.getAddresses().size() == 0 || customer.getPhone() == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","You have to add address and phone number first!",null));

        Set<BookingItemEntity> bookingItems = new HashSet<>();
        for (BookingItemDto w : bookingRequest.getBookingItems()){
            WorkEntity work = workRepository.findById(w.getWork().getId()).orElse(null);
            if (work == null){
                return ResponseEntity.status(404).body(new ResponseDto<>("fail","Service not found!",null));
            }
            BookingItemEntity bookingItem = new BookingItemEntity();
            bookingItem.setWork(work);
            bookingItem.setQuantity(w.getQuantity());
            bookingItems.add(bookingItem);
        }

        ServiceEntity objCompare = new ArrayList<>(bookingItems).get(0).getWork().getService();
        if (!objCompare.getStatus().equals(ServiceStatus.APPROVED)){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","This service no longer provide!",null));
        }
        boolean validWorks = bookingItems.stream().allMatch(bookingItem -> bookingItem.getWork().getService().equals(objCompare));
        if (!validWorks){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","List of works is invalid!",null));
        }

        Time currentTime = new Time(System.currentTimeMillis());

        // Convert Time objects to LocalTime
        LocalTime openTime = objCompare.getOpenTime().toLocalTime();
        LocalTime closeTime = objCompare.getCloseTime().toLocalTime();
        LocalTime currentLocalTime = currentTime.toLocalTime();

        if ( !currentLocalTime.isAfter(openTime) || !currentLocalTime.isBefore(closeTime))
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","This service has been closed or not open to provide",null));

        ProviderEntity provider = objCompare.getProvider();

        BookingEntity booking = new BookingEntity();
        booking.setCustomer(customer);
        booking.setProvider(provider);
        booking.setTime(currentTime);
        booking.setDate(new Date(System.currentTimeMillis()));
        booking.setService(objCompare);

        CoordinatesDto coordinates1 = mapper.map(new ArrayList<>(provider.getAddresses()).get(0).getCoordinates(), CoordinatesDto.class);
        CoordinatesDto coordinates2;
        if (bookingRequest.getAddress() != null){
            booking.setAddress(bookingRequest.getAddress());
            coordinates2 = bingMapsService.getLocation(bookingRequest.getAddress());
        } else {
            AddressEntity temp = new ArrayList<>(customer.getAddresses()).get(0);
            booking.setAddress(temp.toString());
            coordinates2 = mapper.map(temp.getCoordinates(), CoordinatesDto.class);
        }

        double distance = bingMapsService.calculateDistance(coordinates1,coordinates2);
        long movingFee = MovingFeeUtil.calcMovingFee(distance);
        booking.setMovingFee(movingFee);

        for (BookingItemEntity item : bookingItems){
            item.setBooking(booking);
        }

        booking.setBookingItems(bookingItems);
        booking.calcTotalPrice();

        booking.setNote(bookingRequest.getNote());

        JSONObject price = new JSONObject();
        price.put("movingFee", booking.getMovingFee());
        price.put("subTotal", booking.getSubTotal());
        price.put("totalPrice", booking.getTotalPrice());

        JSONObject object = new JSONObject();
        object.put("success",true);
        object.put("message", "Calculate price booking successfully!");
        object.put("data", price);

        return ResponseEntity.status(200).body(object.toString(3));
    }
}
