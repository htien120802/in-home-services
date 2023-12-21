package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.ute.service.dto.ReviewDto;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ReviewEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.repository.BookingRepository;
import vn.ute.service.repository.CustomerRepository;
import vn.ute.service.repository.ReviewRepository;
import vn.ute.service.repository.ServiceRepository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    private final CustomerRepository customerRepository;

    private final ServiceRepository serviceRepository;

    private final BookingRepository bookingRepository;

    private final JwtService jwtService;

    private final ModelMapper mapper;

    public ReviewService(ReviewRepository reviewRepository, CustomerRepository customerRepository, ServiceRepository serviceRepository, BookingRepository bookingRepository, JwtService jwtService, ModelMapper mapper) {
        this.reviewRepository = reviewRepository;
        this.customerRepository = customerRepository;
        this.serviceRepository = serviceRepository;
        this.bookingRepository = bookingRepository;
        this.jwtService = jwtService;
        this.mapper = mapper;
    }

    @Transactional
    public ResponseEntity<?> createReview(UUID serviceId, ReviewDto review, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }

        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        if (service == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Service not found!",null));
        }

        BookingEntity booking = bookingRepository.findByCustomerAndServiceAndStatus(customer, service, BookingStatus.DONE).orElse(null);
        if (booking == null){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You haven't used this service yet!",null));
        }

        ReviewEntity reviewEntity = reviewRepository.findByCustomerAndService(customer, service).orElse(null);
        if (reviewEntity != null){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You have written review for this service!",null));
        }

        reviewEntity = mapper.map(review, ReviewEntity.class);
        service.getReviews().add(reviewEntity);
        service.calcAvgRating();
        reviewEntity.setService(service);
        reviewEntity.setCustomer(customer);
        reviewEntity = reviewRepository.save(reviewEntity);
        return ResponseEntity.status(201).body(new ResponseDto<>("success","Post your review successfully!",mapper.map(reviewEntity, ReviewDto.class)));
    }

    public ResponseEntity<?> getReview(UUID serviceId, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Customer not found!",null));
        }

        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        if (service == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Service not found!",null));
        }

        ReviewEntity reviewEntity = reviewRepository.findByCustomerAndService(customer, service).orElse(null);
        if (reviewEntity == null){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You haven't written review for this service yet!",null));
        }

        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get your review successfully!",mapper.map(reviewEntity, ReviewDto.class)));
    }

    public ResponseEntity<?> getAllReview(UUID serviceId, int pageNumber, int size, String rating) {
        Pageable pageable = PageRequest.of(pageNumber,size, Sort.by("date").descending());
        Page<ReviewEntity> reviews;
        if (rating != null){
            reviews = reviewRepository.findAllByService_IdAndRating(serviceId, Integer.parseInt(rating), pageable);

        }else {
            reviews = reviewRepository.findAllByService_Id(serviceId, pageable);
        }

        List<ReviewDto> reviewDtos = reviews.stream().map(reviewEntity -> mapper.map(reviewEntity, ReviewDto.class)).toList();
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all reviews of this service successfully!",mapper.map(reviewDtos, ReviewDto.class)));
    }
}
