package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.ReviewDto;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.ReviewEntity;
import vn.ute.service.entity.ServiceEntity;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.BookingRepository;
import vn.ute.service.reposioty.CustomerRepository;
import vn.ute.service.reposioty.ReviewRepository;
import vn.ute.service.reposioty.ServiceRepository;

import java.util.UUID;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private ModelMapper mapper;
    public ResponseEntity<?> createReview(UUID serviceId, ReviewDto review, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Customer not found!",null));
        }

        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        if (service == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Service not found!",null));
        }

        BookingEntity booking = bookingRepository.findByCustomerAndServiceAndStatus(customer, service, BookingStatus.DONE).orElse(null);
        if (booking == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","You haven't used this service yet!",null));
        }

        ReviewEntity reviewEntity = reviewRepository.findByCustomerAndService(customer, service).orElse(null);
        if (reviewEntity != null){
            return ResponseEntity.ok(new ResponseDto<>("fail","You have written review for this service!",null));
        }

        reviewEntity = mapper.map(review, ReviewEntity.class);
        service.getReviews().add(reviewEntity);
        service.calcAvgRating();
        reviewEntity.setService(service);
        reviewEntity.setCustomer(customer);
        reviewEntity = reviewRepository.save(reviewEntity);
        return ResponseEntity.ok(new ResponseDto<>("success","Post your review successfully!",mapper.map(reviewEntity, ReviewDto.class)));
    }

    public ResponseEntity<?> getReview(UUID serviceId, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
        if (customer == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Customer not found!",null));
        }

        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        if (service == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Service not found!",null));
        }

        ReviewEntity reviewEntity = reviewRepository.findByCustomerAndService(customer, service).orElse(null);
        if (reviewEntity == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","You haven't written review for this service yet!",null));
        }

        return ResponseEntity.ok(new ResponseDto<>("success","Get your review successfully!",mapper.map(reviewEntity, ReviewDto.class)));
    }
}
