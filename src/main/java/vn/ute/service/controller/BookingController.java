package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vn.ute.service.dto.request.CreateBookingRequest;
import vn.ute.service.service.BookingService;

import java.io.UnsupportedEncodingException;

@RestController
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PreAuthorize("hasRole('CUSTOMER')")
    @PostMapping("/customer/booking")
    public ResponseEntity<?> createBooking(@RequestBody CreateBookingRequest bookingRequest, HttpServletRequest request) throws UnsupportedEncodingException {
        return bookingService.createBooking(bookingRequest, request);
    }
}
