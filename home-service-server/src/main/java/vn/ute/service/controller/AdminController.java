package vn.ute.service.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.Min;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.CreateCustomerRequest;
import vn.ute.service.service.AdminService;

import java.util.UUID;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @Operation(summary = "Get all customers")
    @GetMapping("/customer")
    public ResponseEntity getAllCustomers(@RequestParam(defaultValue = "0") @Min(0) int pageNumber, @RequestParam(defaultValue = "10") @Min(1) int size, @RequestParam(defaultValue = "ASC") Sort.Direction sortDirection, @RequestParam(defaultValue = "lastName") String sortBy, @RequestParam(required = false) String name, @RequestParam(required = false) String email, @RequestParam(required = false) String username){
        return adminService.getAllCustomers(pageNumber,size,sortDirection,sortBy,name,email,username);
    }

    @Operation(summary = "Create a customer")
    @PostMapping (value = "/customer", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity createCustomer(@ModelAttribute CreateCustomerRequest customerRequest){
        return adminService.createCustomer(customerRequest);
    }

    @Operation(summary = "Delete a customer")
    @DeleteMapping("/customer/{customerId}")
    public ResponseEntity deleteCustomer(@PathVariable UUID customerId){
        return adminService.deleteCustomer(customerId);
    }
}
