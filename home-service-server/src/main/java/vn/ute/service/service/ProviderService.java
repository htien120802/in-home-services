package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.AddressDto;
import vn.ute.service.dto.CoordinatesDto;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.ProviderDto;
import vn.ute.service.dto.request.ProfileRequest;
import vn.ute.service.dto.request.UpdatePasswordRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.*;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.repository.AccountRepository;
import vn.ute.service.repository.AddressRepository;
import vn.ute.service.repository.ProviderRepository;

import java.io.IOException;
import java.util.Optional;

@Service
public class ProviderService {
    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ImageService imageService;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private BingMapsService bingMapsService;
    @Transactional
    public ResponseEntity<ResponseDto<?>> updateProfile(ProfileRequest customerProfile, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        Optional<ProviderEntity> provider = providerRepository.findByAccount_Username(username);
        if (provider.isPresent()){
            ProviderEntity temp = provider.get();
            mapper.map(customerProfile,temp);
            temp = providerRepository.save(temp);
            return ResponseEntity.ok(new ResponseDto<>("success","Update profile successfully!", mapper.map(temp, ProviderDto.class)));
        }
        else {
            return ResponseEntity.ok(new ResponseDto<>("fail","Provider not found!",null));
        }
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> addAddress(AddressDto addressDto, HttpServletRequest request) throws IOException {
        String username = jwtService.getUsernameFromRequest(request);
        AddressEntity addressEntity = mapper.map(addressDto,AddressEntity.class);

        Optional<ProviderEntity> providerEntity = providerRepository.findByAccount_Username(username);
        if (providerEntity.isPresent()){
            addressEntity.setProvider(providerEntity.get());
            CoordinatesDto coordinatesDto = bingMapsService.getLocation(addressEntity.toString());
            CoordinatesEntity coordinates = mapper.map(coordinatesDto,CoordinatesEntity.class);
            coordinates.setAddress(addressEntity);
            addressEntity.setCoordinates(coordinates);
            addressEntity = addressRepository.save(addressEntity);

            providerEntity.get().getAddresses().add(addressEntity);
//            customerRepository.save(customerEntity.get());
            ProviderDto providerDto = mapper.map(providerEntity.get(), ProviderDto.class);
            return ResponseEntity.ok(new ResponseDto<>("success","Add address successfully",providerDto));
        }else {
            return ResponseEntity.ok(new ResponseDto<>("fail","Can not find provider",null));
        }
    }

    public ResponseEntity<ResponseDto<CustomerDto>> getProfile(HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        Optional<ProviderEntity> providerEntity = providerRepository.findByAccount_Username(username);
        return providerEntity.map(entity -> ResponseEntity.ok(new ResponseDto<>("success", "Get profile successfully", mapper.map(entity, CustomerDto.class)))).orElseGet(() -> ResponseEntity.ok(new ResponseDto<>("fail", "Can not find customer", null)));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> updateAddress(AddressDto addressDto, HttpServletRequest request) throws IOException {
        String username = jwtService.getUsernameFromRequest(request);
        Optional<AddressEntity> addressEntity = addressRepository.findByIdAndProvider_Account_Username(addressDto.getId(),username);
        if (addressEntity.isPresent()){
            AddressEntity address = addressEntity.get();
            mapper.map(addressDto, address);
            CoordinatesDto coordinatesDto = bingMapsService.getLocation(address.toString());
            mapper.map(coordinatesDto,address.getCoordinates());
            return ResponseEntity.ok(new ResponseDto<>("success", "Update address successfully", mapper.map(addressRepository.save(address),AddressDto.class)));
        } else {
            return ResponseEntity.ok(new ResponseDto<>("fail","You are not allowed",null));
        }
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> updatePassword(UpdatePasswordRequest updatePasswordRequest, HttpServletRequest request) {
        if (!updatePasswordRequest.getPassword().equals(updatePasswordRequest.getPasswordConfirm())){
            return ResponseEntity.ok(new ResponseDto<>("fail","Password and password confirm don't matching!",null));
        }
        String username = jwtService.getUsernameFromRequest(request);
        AccountEntity account = accountRepository.findByUsername(username).orElse(null);
        if (account != null){
            // String passwordUpdate = passwordEncoder.encode(updatePasswordRequest.getPassword());
            String passwordUpdate = updatePasswordRequest.getPassword();
            if (passwordEncoder.matches(passwordUpdate, account.getPassword())){
                return ResponseEntity.ok(new ResponseDto<>("fail","This password and current password are the same. Please change!", null));
            } else {
                account.setPassword(passwordEncoder.encode(passwordUpdate));
                accountRepository.save(account);
                return ResponseEntity.ok(new ResponseDto<>("success","Update password successfully!",null));
            }
        } else {
            return ResponseEntity.ok(new ResponseDto<>("fail", "Not found customer with user " + username + "!", null));
        }
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> updateAvatar(MultipartFile avatar, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);

        if (provider == null)
            return ResponseEntity.ok(new ResponseDto<>("fail", "Not found provider with user " + username + "!", null));

        String url = imageService.uploadImage(avatar);
        if (url == null)
            return ResponseEntity.ok(new ResponseDto<>("fail", "Fail to upload image!", null));

        provider.setAvatar(url);
        provider = providerRepository.save(provider);

        return ResponseEntity.ok(new ResponseDto<>("success","Update avatar successfully!",mapper.map(provider, ProviderDto.class)));

    }
}
