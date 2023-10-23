package vn.ute.service.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.request.CustomerProfileRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.CustomerRepository;

import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private JwtService jwtService;

    @Autowired
    private CustomerRepository customerRepository;

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
}
