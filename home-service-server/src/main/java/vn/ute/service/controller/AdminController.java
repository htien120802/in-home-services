package vn.ute.service.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.dto.request.CreateUserRequest;
import vn.ute.service.dto.request.ProfileRequest;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.service.AdminService;

import java.util.UUID;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @Operation(summary = "Count entity")
    @GetMapping("/count")
    public ResponseEntity<?> countEntity(){
        return adminService.countEntity();
    }
    @Operation(summary = "Get all customers")
    @GetMapping("/customer")
    public ResponseEntity<?> getAllCustomers(@RequestParam(defaultValue = "0") @Min(0) int pageNumber, @RequestParam(defaultValue = "10") @Min(1) int size, @RequestParam(defaultValue = "ASC") Sort.Direction sortDirection, @RequestParam(defaultValue = "lastName") String sortBy, @RequestParam(required = false) String name, @RequestParam(required = false) String email, @RequestParam(required = false) String username){
        return adminService.getAllCustomers(pageNumber,size,sortDirection,sortBy,name,email,username);
    }

    @Operation(summary = "Create a customer")
    @PostMapping (value = "/customer", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createCustomer(@ModelAttribute CreateUserRequest customerRequest){
        return adminService.createCustomer(customerRequest);
    }
    @Operation(summary = "Update profile of a customer")
    @PutMapping("/customer/{customerId}" )
    public ResponseEntity<?> updateCustomer(@PathVariable UUID customerId, @RequestBody ProfileRequest profileRequest){
        return adminService.updateCustomer(customerId, profileRequest);
    }

    @Operation(summary = "Delete a customer")
    @DeleteMapping("/customer/{customerId}")
    public ResponseEntity<?> deleteCustomer(@PathVariable UUID customerId){
        return adminService.deleteCustomer(customerId);
    }

    @Operation(summary = "Get all providers")
    @GetMapping("/provider")
    public ResponseEntity<?> getAllProviders(@RequestParam(defaultValue = "0") @Min(0) int pageNumber,
                                          @RequestParam(defaultValue = "10") @Min(1) int size,
                                          @RequestParam(defaultValue = "ASC") Sort.Direction sortDirection,
                                          @RequestParam(defaultValue = "lastName") String sortBy,
                                          @RequestParam(required = false) String name, @RequestParam(required = false) String email,
                                          @RequestParam(required = false) String username){
        return adminService.getAllProviders(pageNumber,size,sortDirection,sortBy,name,email,username);
    }

    @Operation(summary = "Create a provider")
    @PostMapping (value = "/provider", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createProvider(@ModelAttribute CreateUserRequest providerRequest){
        return adminService.createProvider(providerRequest);
    }
    @Operation(summary = "Update profile of a provider")
    @PutMapping("/provider/{providerId}" )
    public ResponseEntity<?> updateProvider(@PathVariable UUID providerId, @RequestBody ProfileRequest profileRequest){
        return adminService.updateProvider(providerId, profileRequest);
    }

    @Operation(summary = "Delete a provider")
    @DeleteMapping("/provider/{providerId}")
    public ResponseEntity<?> deleteProvider(@PathVariable UUID providerId){
        return adminService.deleteProvider(providerId);
    }

    @Operation(summary = "Delete a address")
    @DeleteMapping("/address/{addressId}")
    public ResponseEntity<?> deleteAddress(@PathVariable UUID addressId){
        return adminService.deleteAddress(addressId);
    }


    @Operation(summary = "Get all services")
    @GetMapping("/service")
    public ResponseEntity<?> getAllServices(@RequestParam(defaultValue = "0") int pageNumber,
                                            @RequestParam(defaultValue = "9") int size,
                                            @RequestParam(defaultValue = "avgRating") String sortBy,
                                            @RequestParam(defaultValue = "DESC") Sort.Direction sortDirection,
                                            @RequestParam(defaultValue = "APPROVED") ServiceStatus status,
                                            @RequestParam(required = false) String providerName,
                                            @RequestParam(required = false) String name,
                                            @RequestParam(required = false) String categorySlug,
                                            @RequestParam(required = false) String rating){
        return adminService.getAllServices(pageNumber,size,sortBy,sortDirection,status,providerName,name,categorySlug,rating);
    }

    @Operation(summary = "Create a service")
    @PostMapping("/service")
    public ResponseEntity<?> createService(@RequestPart MultipartFile thumbnail, @RequestPart String createServiceRequest) throws JsonProcessingException {
        return adminService.createService(thumbnail, createServiceRequest);
    }

    @Operation(summary = "Update a service")
    @PutMapping("/service")
    public ResponseEntity<?> updateService(@RequestBody ServiceDto serviceDto){
        return adminService.updateService(serviceDto);
    }

    @Operation(summary = "Delete a service")
    @DeleteMapping("/service/{serviceId}")
    public ResponseEntity<?> deleteService(@PathVariable UUID serviceId){
        return adminService.deleteService(serviceId);
    }

    @Operation(summary = "Create a category")
    @PostMapping(value = "/category",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createCategory(@RequestPart(required = false) MultipartFile thumbnail, @RequestPart String categoryName){
        return adminService.createCategory(thumbnail, categoryName);
    }

    @Operation(summary = "Update a category")
    @PostMapping(value = "/category/{categoryId}",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> updateCategory(@PathVariable UUID categoryId, @RequestPart(required = false) MultipartFile thumbnail, @RequestPart String categoryName){
        return adminService.updateCategory(categoryId, thumbnail, categoryName);
    }

    @Operation(summary =  "Get all bookings")
    @GetMapping("/booking")
    public ResponseEntity<?> getAllBookings(@RequestParam(defaultValue = "0") int pageNumber,
                                            @RequestParam(defaultValue = "10") int size,
                                            @RequestParam(required = false) BookingStatus status,
                                            @RequestParam(required = false) String providerName,
                                            @RequestParam(required = false) String customerName,
                                            @RequestParam(required = false) String serviceCategorySlug){
        return adminService.getAllBookings(pageNumber, size, status, providerName, customerName, serviceCategorySlug);
    }

    @Operation(summary = "Get a booking")
    @GetMapping("/booking/{bookingId}")
    public ResponseEntity<?> getBooking(@PathVariable UUID bookingId){
        return adminService.getBooking(bookingId);
    }

    @Operation(summary = "Delete a booking")
    @DeleteMapping("/booking/{bookingId}")
    public ResponseEntity<?> deleteBooking(@PathVariable UUID bookingId){
        return adminService.deleteBooking(bookingId);
    }

    @Operation(summary = "Get all reviews")
    @GetMapping("/review")
    public ResponseEntity<?> getAllReviews(@RequestParam(defaultValue = "0") int pageNumber,
                                          @RequestParam(defaultValue = "10") int size,
                                          @RequestParam(required = false) @Min(1) @Max(5) int rating,
                                          @RequestParam(required = false) String customerName,
                                          @RequestParam(required = false) String serviceName){
        return adminService.getAllReviews(pageNumber, size, rating, customerName, serviceName);
    }

    @Operation(summary = "Get a review")
    @GetMapping("/review/{reviewId}")
    public ResponseEntity<?> getReview(@PathVariable UUID reviewId){
        return adminService.getReview(reviewId);
    }

    @Operation(summary = "Delete a review")
    @DeleteMapping("/review/{reviewId}")
    public ResponseEntity<?> deleteReview(@PathVariable UUID reviewId){
        return adminService.deleteReview(reviewId);
    }
}
