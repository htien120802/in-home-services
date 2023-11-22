package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletRequest;
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
    public ResponseEntity<ResponseDto<CustomerDto>> getProfile(HttpServletRequest request){
        return customerService.getProfile(request);
    }

    @PutMapping(value = "/customer/profile")
    public ResponseEntity<ResponseDto<?>> updateProfile(@RequestBody CustomerProfileRequest customerProfile, HttpServletRequest request){
        return customerService.updateProfile(customerProfile,request);
    }

    @PostMapping(value = "/customer/address")
    public ResponseEntity<ResponseDto<?>> addAddress(@RequestBody AddressDto addressDto, HttpServletRequest request){
        return customerService.addAddress(addressDto,request);
    }

    @PutMapping(value = "/customer/address")
    public ResponseEntity<ResponseDto<?>> updateAddress(@RequestBody AddressDto addressDto, HttpServletRequest request){
        return customerService.updateAddress(addressDto,request);
    }
}
