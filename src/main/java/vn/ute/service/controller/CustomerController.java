package vn.ute.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.AddressDto;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.request.CustomerProfileRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.CustomerService;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/customer/profile")
    public ResponseEntity<ResponseDto<CustomerDto>> getProfile(@RequestHeader("Authorization") String authorization){
        return customerService.getProfile(authorization);
    }

    @PutMapping(value = "/customer/profile", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<?>> updateProfile(@RequestBody CustomerProfileRequest customerProfile, @RequestHeader("Authorization") String authorization){
        return customerService.updateProfile(customerProfile,authorization);
    }

    @PostMapping(value = "/customer/address", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<?>> addAddress(@RequestBody AddressDto addressDto, @RequestHeader("Authorization") String authorization){
        return customerService.addAddress(addressDto,authorization);
    }

    @PutMapping(value = "/customer/address", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<?>> updateAddress(@RequestBody AddressDto addressDto, @RequestHeader("Authorization") String authorization){
        return customerService.updateAddress(addressDto,authorization);
    }
}
