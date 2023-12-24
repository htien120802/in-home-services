package vn.ute.service.entity.controller;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.AddressDto;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.request.ProfileRequest;
import vn.ute.service.dto.request.UpdatePasswordRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.exception.ImageUploadException;
import vn.ute.service.service.ProviderService;

import java.io.IOException;

@RestController
public class ProviderController {
    private final ProviderService providerService;

    public ProviderController(ProviderService providerService) {
        this.providerService = providerService;
    }

    @Operation(summary = "Get profile of provider")
    @GetMapping("/provider/profile")
    public ResponseEntity<?> getProfile(HttpServletRequest request){
        return providerService.getProfile(request);
    }
    @Operation(summary = "Update profile of provider")
    @PutMapping(value = "/provider/profile")
    public ResponseEntity<ResponseDto<?>> updateProfile(@RequestBody ProfileRequest providerProfile, HttpServletRequest request) throws IOException {
        return providerService.updateProfile(providerProfile,request);
    }
    @Operation(summary = "Add new address for provider")
    @PostMapping(value = "/provider/address")
    public ResponseEntity<ResponseDto<?>> addAddress(@RequestBody AddressDto addressDto, HttpServletRequest request) throws IOException {
        return providerService.addAddress(addressDto,request);
    }
    @Operation(summary = "Update address of provider")
    @PutMapping(value = "/provider/address")
    public ResponseEntity<ResponseDto<?>> updateAddress(@RequestBody AddressDto addressDto, HttpServletRequest request) throws IOException {
        return providerService.updateAddress(addressDto,request);
    }
    @Operation(summary = "Update password of provider")
    @PutMapping(value ="/provider/password")
    public ResponseEntity<ResponseDto<?>> updatePassword(@RequestBody UpdatePasswordRequest updatePasswordRequest, HttpServletRequest request){
        return providerService.updatePassword(updatePasswordRequest, request);
    }
    @Operation(summary = "Update password of provider")
    @PutMapping(value = "/provider/avatar", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDto<?>> updateAvatar(@RequestPart MultipartFile avatar, HttpServletRequest request) throws ImageUploadException {
        return providerService.updateAvatar(avatar, request);
    }

    @Operation(summary = "Quantity statistics of bookings by month, year")
    @GetMapping("/provider/statistics/booking/quantity")
    public ResponseEntity<?> quantityStatisticsOfBooking(@RequestParam(required = false) @Min(1) @Max(12) String month,
                                                         @RequestParam int year,
                                                         HttpServletRequest request){
        return providerService.quantityStatisticsOfBookingByMonth(month,year,request);
    }

    @Operation(summary = "Sales statistics of bookings by month, year")
    @GetMapping("/provider/statistics/booking/sales")
    public ResponseEntity<?> salesStatisticsOfBooking(@RequestParam(required = false) @Min(1) @Max(12) String month,
                                                      @RequestParam int year,
                                                      HttpServletRequest request){
        return providerService.salesStatisticsOfBookingByMonth(month,year,request);
    }
}
