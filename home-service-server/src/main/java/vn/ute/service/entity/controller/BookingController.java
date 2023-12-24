package vn.ute.service.entity.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.CreateBookingRequest;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.service.BookingService;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.UUID;

@RestController
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @Operation(summary = "Create booking")
    @PostMapping("/customer/booking/calc")
    public ResponseEntity<?> calcPriceBooking(@RequestBody CreateBookingRequest bookingRequest, HttpServletRequest request) throws IOException {
        return bookingService.calcPriceBooking(bookingRequest, request);
    }

    @Operation(summary = "Create booking")
    @PostMapping("/customer/booking")
    public ResponseEntity<?> createBooking(@RequestBody CreateBookingRequest bookingRequest, HttpServletRequest request) throws IOException {
        return bookingService.createBooking(bookingRequest, request);
    }

    @Operation(summary = "Get all bookings of customer")
    @GetMapping("/customer/booking")
    public ResponseEntity<?> getAllBookingOfCustomer(@RequestParam(defaultValue = "0") int pageNumber,
                                                     @RequestParam(defaultValue = "10") int size,
                                                     @RequestParam(required = false) BookingStatus bookingStatus,
                                                     HttpServletRequest request){
        return bookingService.getAllBookingOfCustomer(pageNumber, size, bookingStatus, request);
    }

    @Operation(summary = "Get a booking")
    @GetMapping("/customer/booking/{bookingId}")
    public ResponseEntity<?> getBookingOfCustomer(@PathVariable UUID bookingId, HttpServletRequest request){
        return bookingService.getBookingOfCustomer(bookingId, request);
    }

//    @Operation(summary = "Get all bookings of customer by status")
//    @GetMapping("/customer/booking/{status}")
//    public ResponseEntity<?> getAllBookingOfCustomerByStatus(@PathVariable String status, HttpServletRequest request){
//        return bookingService.getAllBookingOfCustomerByStatus(status, request);
//    }

    @Operation(summary = "Customer cancel booking")
    @PutMapping("/customer/booking/{bookingId}/cancel")
    public ResponseEntity<?> cancelBookingByCustomer(@PathVariable UUID bookingId, @RequestParam String reason, HttpServletRequest request) throws IOException {
        return bookingService.cancelBookingByCustomer(bookingId, reason, request);
    }

    @Operation(summary = "Provider cancel booking")
    @PutMapping("/provider/booking/{bookingId}/cancel")
    public ResponseEntity<?> cancelBookingByProvider(@PathVariable UUID bookingId, @RequestParam String reason, HttpServletRequest request) {
        return bookingService.cancelBookingByProvider(bookingId, reason, request);
    }

    @Operation(summary = "Auto update status for booking")
    @PutMapping("/provider/booking/{bookingId}/status")
    public ResponseEntity<?> autoUpdateBookingStatus(@PathVariable UUID bookingId, HttpServletRequest request) throws IOException {
        return bookingService.autoUpdateBookingStatus(bookingId, request);
    }

    @Operation(summary = "Get all bookings of provider")
    @GetMapping("/provider/booking")
    public ResponseEntity<?> getAllBookingOfProvider(@RequestParam(defaultValue = "0") int pageNumber,
                                                     @RequestParam(defaultValue = "10") int size,
                                                     @RequestParam(required = false) BookingStatus bookingStatus,
                                                     HttpServletRequest request){
        return bookingService.getAllBookingOfProvider(pageNumber, size, bookingStatus, request);
    }

    @Operation(summary = "Get a booking")
    @GetMapping("/provider/booking/{bookingId}")
    public ResponseEntity<?> getBookingOfProvider(@PathVariable UUID bookingId, HttpServletRequest request){
        return bookingService.getBookingOfProvider(bookingId, request);
    }


}
