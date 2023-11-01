package vn.ute.service.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.AddressDto;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.request.CustomerProfileRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.AddressEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.AddressRepository;
import vn.ute.service.reposioty.CustomerRepository;

import java.util.Optional;
import java.util.UUID;

@Service
public class CustomerService {
    @Autowired
    private JwtService jwtService;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ModelMapper mapper;
    public ResponseEntity<ResponseDto<?>> updateProfile(CustomerProfileRequest customerProfile, String authorization) {
        String username = jwtService.getUsernameFromAuthorization(authorization);
        Optional<CustomerEntity> customer = customerRepository.findByAccount_Username(username);
        if (customer.isPresent()){
            CustomerEntity temp = customer.get();
            mapper.map(customerProfile,temp);
            temp = customerRepository.save(temp);
            return ResponseEntity.ok(new ResponseDto<>("success","Update profile successfully!", mapper.map(temp, CustomerDto.class)));
        }
        else {
            return ResponseEntity.ok(new ResponseDto<>("fail","Customer not found!",null));
        }
    }

    public ResponseEntity<ResponseDto<?>> addAddress(AddressDto addressDto, String authorization) {
        String username = jwtService.getUsernameFromAuthorization(authorization);
        AddressEntity addressEntity = mapper.map(addressDto,AddressEntity.class);

        Optional<CustomerEntity> customerEntity = customerRepository.findByAccount_Username(username);
        if (customerEntity.isPresent()){
            addressEntity.setCustomer(customerEntity.get());
            addressEntity = addressRepository.save(addressEntity);

            customerEntity.get().getAddresses().add(addressEntity);
//            customerRepository.save(customerEntity.get());
            CustomerDto customerDto = mapper.map(customerEntity.get(),CustomerDto.class);
            return ResponseEntity.ok(new ResponseDto<>("success","Add address successfully",customerDto));
        }else {
            return ResponseEntity.ok(new ResponseDto<>("fail","Can not find customer",null));
        }
    }

    public ResponseEntity<ResponseDto<CustomerDto>> getProfile(String authorization) {
        String username = jwtService.getUsernameFromAuthorization(authorization);
        Optional<CustomerEntity> customerEntity = customerRepository.findByAccount_Username(username);
        return customerEntity.map(entity -> ResponseEntity.ok(new ResponseDto<>("success", "Get profile successfully", mapper.map(entity, CustomerDto.class)))).orElseGet(() -> ResponseEntity.ok(new ResponseDto<>("fail", "Can not find customer", null)));
    }

    public ResponseEntity<ResponseDto<?>> updateAddress(AddressDto addressDto, String authorization) {
        String username = jwtService.getUsernameFromAuthorization(authorization);
        boolean belongToCustomer = addressRepository.existsByIdAndAndCustomer_Account_Username(addressDto.getId(),username);
        if (belongToCustomer){
            Optional<AddressEntity> addressEntity = addressRepository.findById(addressDto.getId());

            if (addressEntity.isPresent()) {
                mapper.map(addressDto, addressEntity.get());
                return ResponseEntity.ok(new ResponseDto<>("success", "Update address successfully", mapper.map(addressRepository.save(addressEntity.get()),AddressDto.class)));
            }else {
                return ResponseEntity.ok(new ResponseDto<>("fail", "Can not find address",null));
            }
        } else {
            return ResponseEntity.ok(new ResponseDto<>("fail","You are not allowed",null));
        }
    }
}
