package vn.ute.service.service;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.ute.service.dto.CustomerDto;
import vn.ute.service.dto.request.CreateCustomerRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.AccountEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.repository.AccountRepository;
import vn.ute.service.repository.CustomerCriteriaRepository;
import vn.ute.service.repository.CustomerRepository;

import java.util.UUID;

@Service
public class AdminService {
    private final CustomerCriteriaRepository customerCriteriaRepository;
    private final CustomerRepository customerRepository;
    private final AccountRepository accountRepository;
    private final ImageService imageService;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper mapper;

    public AdminService(CustomerCriteriaRepository customerCriteriaRepository, CustomerRepository customerRepository, AccountRepository accountRepository, ImageService imageService, PasswordEncoder passwordEncoder, ModelMapper mapper) {
        this.customerCriteriaRepository = customerCriteriaRepository;
        this.customerRepository = customerRepository;
        this.accountRepository = accountRepository;
        this.imageService = imageService;
        this.passwordEncoder = passwordEncoder;
        this.mapper = mapper;
    }


    public ResponseEntity getAllCustomers(int pageNumber, int size, Sort.Direction sortDirection, String sortBy, String name, String email, String username) {
        Page<CustomerEntity> customers = customerCriteriaRepository.findAllWithFilters(pageNumber,size,sortDirection,sortBy,name,email,username);
        Page<CustomerDto> customerDtos = customers.map(customer -> mapper.map(customer,CustomerDto.class));
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get all customers successfully",customerDtos));
    }
    @Transactional
    public ResponseEntity createCustomer(CreateCustomerRequest customerRequest) {
        if (!customerRequest.getPassword().equals(customerRequest.getPasswordConfirm()))
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","Password and password confirm don't match!",null));

        if (accountRepository.existsByUsername(customerRequest.getUsername()) || customerRepository.existsByEmail(customerRequest.getEmail()))
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","Username or email has been used!",null));

        AccountEntity account = new AccountEntity();
        account.setUsername(customerRequest.getUsername());
        account.setPassword(passwordEncoder.encode(customerRequest.getPassword()));

        CustomerEntity customer = mapper.map(customerRequest, CustomerEntity.class);
        customer.setAccount(account);
        account.setCustomer(customer);

        String url = imageService.uploadImage(customerRequest.getAvatar());
        if (url == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body(new ResponseDto<>("fail","Fail to upload avatar!", null));
        customer.setAvatar(url);
        customer = customerRepository.save(customer);

        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new ResponseDto<>("success","Create customer successfully!", mapper.map(customer, CustomerDto.class)));
    }
    @Transactional
    public ResponseEntity deleteCustomer(UUID customerId) {
        if (!customerRepository.existsById(customerId))
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found customer with this id!", null));

        customerRepository.deleteById(customerId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete customer successfully!", null));
    }
}
