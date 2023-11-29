package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.BookingDto;
import vn.ute.service.dto.PaymentDto;
import vn.ute.service.dto.WorkDto;
import vn.ute.service.dto.request.CreateBookingRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.*;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.enumerate.PaymentMethod;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.*;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookingService {
    @Autowired
    private JwtService jwtService;
    @Autowired
    private ModelMapper mapper;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private WorkRepository workRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private PaymentRepository paymentRepository;

    public ResponseEntity<?> createBooking(CreateBookingRequest bookingRequest, HttpServletRequest request) throws UnsupportedEncodingException {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Customer not found!",null));
        }

        Set<WorkEntity> works = new HashSet<>();
        for (WorkDto w : bookingRequest.getWorks()){
            WorkEntity work = workRepository.findById(w.getId()).orElse(null);
            if (work == null){
                return ResponseEntity.ok(new ResponseDto<>("fail","Service not found!",null));
            }
            works.add(work);
        }

        ServiceEntity objCompare = new ArrayList<>(works).get(0).getService();
        if (!objCompare.getStatus().equals(ServiceStatus.APPROVED)){
            return ResponseEntity.ok(new ResponseDto<>("fail","This service no longer provide!",null));
        }
        boolean validWorks = works.stream().allMatch(work -> work.getService().equals(objCompare));
        if (!validWorks){
            return ResponseEntity.ok(new ResponseDto<>("fail","List of works is invalid!",null));
        }

        ProviderEntity provider = objCompare.getProvider();

        BookingEntity booking = new BookingEntity();
        booking.setCustomer(customer);
        booking.setProvider(provider);
        booking.setWorks(works);
        booking.setTime(bookingRequest.getTime());
        booking.setDate(bookingRequest.getDate());
        booking = bookingRepository.save(booking);

        PaymentEntity payment = new PaymentEntity();
        payment.setBooking(booking);
        payment.setMethod(PaymentMethod.valueOf(bookingRequest.getPaymentMethoad().toUpperCase()));
        payment.setAmount(booking.getTotalPrice());
        payment = paymentRepository.save(payment);

        if (payment.getMethod().equals(PaymentMethod.CASH)){
            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
            bookingDto.setPayment(mapper.map(payment, PaymentDto.class));
            return ResponseEntity.ok(new ResponseDto<>("success","Booking successfully!",bookingDto));
        }else if (payment.getMethod().equals(PaymentMethod.VNPAY)){
            String url = paymentService.createPaymentUrl(payment, request);
            return ResponseEntity.ok(new ResponseDto<>("success","Booking successfully!",url));
        }
        return ResponseEntity.ok(new ResponseDto<>("fail","Payment method is invalid!",null));
    }

    public ResponseEntity<?> getAllBookingOfCustomer(HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Customer not found!",null));
        }
        List<BookingEntity> bookings = bookingRepository.findAllByCustomer(customer);
        List<BookingDto> bookingDtos = new ArrayList<>();
        for (BookingEntity booking : bookings){
            PaymentEntity payment = paymentRepository.findByBooking(booking).orElse(null);
            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
            bookingDto.setPayment(mapper.map(payment, PaymentDto.class));
            bookingDtos.add(bookingDto);
        }
        return ResponseEntity.ok(new ResponseDto<>("success","Get all services successfully!",bookingDtos));
    }

    public ResponseEntity<?> getAllBookingOfCustomerByStatus(String status, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Customer not found!",null));
        }
        List<BookingEntity> bookings = bookingRepository.findAllByCustomerAndStatus(customer, BookingStatus.valueOf(status.toUpperCase()));
        List<BookingDto> bookingDtos = new ArrayList<>();
        for (BookingEntity booking : bookings){
            PaymentEntity payment = paymentRepository.findByBooking(booking).orElse(null);
            BookingDto bookingDto = mapper.map(booking, BookingDto.class);
            bookingDto.setPayment(mapper.map(payment, PaymentDto.class));
            bookingDtos.add(bookingDto);
        }
        return ResponseEntity.ok(new ResponseDto<>("success","Get all services successfully!",bookingDtos));
    }
}
