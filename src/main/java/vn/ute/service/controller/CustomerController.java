package vn.ute.service.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.AddressDto;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.request.CustomerProfileRequest;
import vn.ute.service.dto.request.UpdatePasswordRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.service.CustomerService;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;
    @Operation(summary = "Get profile of customer")
    @GetMapping("/customer/profile")
    public ResponseEntity<ResponseDto<CustomerDto>> getProfile(HttpServletRequest request){
        return customerService.getProfile(request);
    }
    @Operation(summary = "Update profile of customer")
    @PutMapping(value = "/customer/profile")
    public ResponseEntity<ResponseDto<?>> updateProfile(@RequestBody CustomerProfileRequest customerProfile, HttpServletRequest request){
        return customerService.updateProfile(customerProfile,request);
    }
    @Operation(summary = "Add new address for customer")
    @PostMapping(value = "/customer/address")
    public ResponseEntity<ResponseDto<?>> addAddress(@RequestBody AddressDto addressDto, HttpServletRequest request){
        return customerService.addAddress(addressDto,request);
    }
    @Operation(summary = "Update address of customer")
    @PutMapping(value = "/customer/address")
    public ResponseEntity<ResponseDto<?>> updateAddress(@RequestBody AddressDto addressDto, HttpServletRequest request){
        return customerService.updateAddress(addressDto,request);
    }
    @Operation(summary = "Update password of customer")
    @PutMapping(value ="/customer/password")
    public ResponseEntity<ResponseDto<?>> updatePassword(@RequestBody UpdatePasswordRequest updatePasswordRequest, HttpServletRequest request){
        return customerService.updatePassword(updatePasswordRequest, request);
    }
    @Operation(summary = "Update password of customer")
    @PutMapping(value = "/customer/avatar", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDto<?>> updateAvatar(@RequestPart MultipartFile avatar, HttpServletRequest request){
        return customerService.updateAvatar(avatar, request);
    }
}
