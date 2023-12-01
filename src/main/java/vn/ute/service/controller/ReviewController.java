package vn.ute.service.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.ReviewDto;
import vn.ute.service.service.ReviewService;

import java.util.UUID;

@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;
    @Operation(summary = "Get customer's review of a service")
    @GetMapping("/customer/service/{serviceId}/review")
    public ResponseEntity<?> getReview(@PathVariable UUID serviceId, HttpServletRequest request){
        return reviewService.getReview(serviceId, request);
    }
    @Operation(summary = "Create customer's review for a service")
    @PostMapping("/customer/service/{serviceId}/review")
    public ResponseEntity<?> writeReview(@PathVariable UUID serviceId, @RequestBody ReviewDto review, HttpServletRequest request){
        return reviewService.createReview(serviceId, review, request);
    }
}
