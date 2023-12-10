package vn.ute.service.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.CreateBookingRequest;
import vn.ute.service.service.BookingService;

import java.io.UnsupportedEncodingException;
import java.util.UUID;

@RestController
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Operation(summary = "Create booking")
    @PostMapping("/customer/booking")
    public ResponseEntity<?> createBooking(@RequestBody CreateBookingRequest bookingRequest, HttpServletRequest request) throws UnsupportedEncodingException {
        return bookingService.createBooking(bookingRequest, request);
    }

    @Operation(summary = "Get all bookings of customer")
    @GetMapping("/customer/booking")
    public ResponseEntity<?> getAllBookingOfCustomer(HttpServletRequest request){
        return bookingService.getAllBookingOfCustomer(request);
    }

    @Operation(summary = "Get all bookings of customer by status")
    @GetMapping("/customer/booking/{status}")
    public ResponseEntity<?> getAllBookingOfCustomerByStatus(@PathVariable String status, HttpServletRequest request){
        return bookingService.getAllBookingOfCustomerByStatus(status, request);
    }

    @Operation(summary = "Customer cancel booking")
    @PutMapping("/customer/booking/{bookingId}/cancel")
    public ResponseEntity<?> cancelBooking(@PathVariable UUID bookingId, HttpServletRequest request){
        return bookingService.cancelBooking(bookingId, request);
    }
}
