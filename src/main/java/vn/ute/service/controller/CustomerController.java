package vn.ute.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.CustomerProfileRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.CustomerService;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    /*@PreAuthorize("hasRole('CUSTOMER')")*/
    @PutMapping(value = "/customer/profile", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<?>> updateProfile(@RequestBody CustomerProfileRequest customerProfile, @RequestHeader("Authorization") String authorization){
        return customerService.updateProfile(customerProfile,authorization);
    }
}
