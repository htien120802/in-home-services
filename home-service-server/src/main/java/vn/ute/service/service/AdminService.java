package vn.ute.service.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.*;
import vn.ute.service.dto.request.CreateServiceRequest;
import vn.ute.service.dto.request.CreateUserRequest;
import vn.ute.service.dto.request.ProfileRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.*;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.repository.*;
import vn.ute.service.repository.criteria.CustomerCriteriaRepository;
import vn.ute.service.repository.criteria.ProviderCriteriaRepository;
import vn.ute.service.repository.criteria.ServiceCriteriaRepository;
import vn.ute.service.utils.SlugUtil;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
public class AdminService {
    private final CustomerCriteriaRepository customerCriteriaRepository;
    private final ProviderCriteriaRepository providerCriteriaRepository;
    private final ServiceCriteriaRepository serviceCriteriaRepository;
    private final ServiceRepository serviceRepository;
    private final WorkRepository workRepository;
    private final CategoryRepository categoryRepository;
    private final CustomerRepository customerRepository;
    private final ProviderRepository providerRepository;
    private final AccountRepository accountRepository;
    private final AddressRepository addressRepository;
    private final ImageService imageService;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper mapper;

    public AdminService(CustomerCriteriaRepository customerCriteriaRepository, ProviderCriteriaRepository providerCriteriaRepository, ServiceCriteriaRepository serviceCriteriaRepository, ServiceRepository serviceRepository, WorkRepository workRepository, CategoryRepository categoryRepository, CustomerRepository customerRepository, ProviderRepository providerRepository, AccountRepository accountRepository, AddressRepository addressRepository, ImageService imageService, PasswordEncoder passwordEncoder, ModelMapper mapper) {
        this.customerCriteriaRepository = customerCriteriaRepository;
        this.providerCriteriaRepository = providerCriteriaRepository;
        this.serviceCriteriaRepository = serviceCriteriaRepository;
        this.serviceRepository = serviceRepository;
        this.workRepository = workRepository;
        this.categoryRepository = categoryRepository;
        this.customerRepository = customerRepository;
        this.providerRepository = providerRepository;
        this.accountRepository = accountRepository;
        this.addressRepository = addressRepository;
        this.imageService = imageService;
        this.passwordEncoder = passwordEncoder;
        this.mapper = mapper;
    }


    public ResponseEntity<?> getAllCustomers(int pageNumber, int size, Sort.Direction sortDirection, String sortBy, String name, String email, String username) {
        Page<CustomerEntity> customers = customerCriteriaRepository.findAllWithFilters(pageNumber,size,sortDirection,sortBy,name,email,username);
        Page<CustomerDto> customerDtos = customers.map(customer -> mapper.map(customer,CustomerDto.class));
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get all customers successfully",customerDtos));
    }
    @Transactional
    public ResponseEntity<?> createCustomer(CreateUserRequest customerRequest) {
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
    public ResponseEntity<?> updateCustomer(UUID customerId, ProfileRequest profileRequest) {
        CustomerEntity customer = customerRepository.findById(customerId).orElse(null);
        if (customer == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found customer with this id!", null));

        mapper.map(profileRequest,customer);
        customerRepository.save(customer);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Update customer successfully!",mapper.map(customer,CustomerDto.class)));
    }

    @Transactional
    public ResponseEntity<?> deleteCustomer(UUID customerId) {
        if (!customerRepository.existsById(customerId))
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found customer with this id!", null));

        customerRepository.deleteById(customerId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete customer successfully!", null));
    }

    public ResponseEntity<?> deleteAddress(UUID addressId) {
        if (!addressRepository.existsById(addressId))
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found address with this id!", null));

        addressRepository.deleteById(addressId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete address successfully!", null));
    }


    public ResponseEntity<?> getAllProviders(int pageNumber, int size, Sort.Direction sortDirection, String sortBy, String name, String email, String username) {
        Page<ProviderEntity> providers = providerCriteriaRepository.findAllWithFilters(pageNumber,size,sortDirection,sortBy,name,email,username);
        Page<ProviderDto> providerDtos = providers.map(provider -> mapper.map(provider,ProviderDto.class));
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get all providers successfully",providerDtos));
    }

    @Transactional
    public ResponseEntity<?> createProvider(CreateUserRequest providerRequest) {
        if (!providerRequest.getPassword().equals(providerRequest.getPasswordConfirm()))
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","Password and password confirm don't match!",null));

        if (accountRepository.existsByUsername(providerRequest.getUsername()) || customerRepository.existsByEmail(providerRequest.getEmail()))
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","Username or email has been used!",null));

        AccountEntity account = new AccountEntity();
        account.setUsername(providerRequest.getUsername());
        account.setPassword(passwordEncoder.encode(providerRequest.getPassword()));

        ProviderEntity provider = mapper.map(providerRequest, ProviderEntity.class);
        provider.setAccount(account);
        account.setProvider(provider);

        String url = imageService.uploadImage(providerRequest.getAvatar());
        if (url == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body(new ResponseDto<>("fail","Fail to upload avatar!", null));
        provider.setAvatar(url);
        provider = providerRepository.save(provider);

        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new ResponseDto<>("success","Create provider successfully!", mapper.map(provider, ProviderDto.class)));
    }
    @Transactional
    public ResponseEntity<?> updateProvider(UUID providerId, ProfileRequest profileRequest) {
        ProviderEntity provider = providerRepository.findById(providerId).orElse(null);
        if (provider == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found provider with this id!", null));

        mapper.map(profileRequest,provider);
        providerRepository.save(provider);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Update customer successfully!",mapper.map(provider,ProviderDto.class)));
    }

    @Transactional
    public ResponseEntity<?> deleteProvider(UUID providerId) {
        if (!providerRepository.existsById(providerId))
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found provider with this id!", null));

        providerRepository.deleteById(providerId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete provider successfully!", null));
    }

    public ResponseEntity<?> getAllServices(int pageNumber, int size, String sortBy, Sort.Direction sortDirection, ServiceStatus status, String providerName, String name, String categorySlug, String rating) {
        Page<ServiceEntity> serviceEntityPage = serviceCriteriaRepository.findAllWithFilters(pageNumber,size,sortDirection,sortBy,status,providerName,name,categorySlug,rating);
        Page<ServiceDto> serviceDtoPage = serviceEntityPage.map(service -> mapper.map(service,ServiceDto.class));
        return ResponseEntity.ok(new ResponseDto<>("success","Get all services successfully!",serviceDtoPage));
    }
    @Transactional
    public ResponseEntity<?> createService(MultipartFile thumbnail, String createServiceRequest) throws JsonProcessingException {
        CreateServiceRequest serviceRequest = new ObjectMapper().readValue(createServiceRequest, CreateServiceRequest.class);
        ProviderEntity provider = providerRepository.findById(serviceRequest.getProvider()).orElse(null);

        if (provider == null){
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Provider not found!",null));
        }

        CategoryEntity category = categoryRepository.findById(serviceRequest.getCategory()).orElse(null);
        if (category == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Category not found!",null));

        ServiceEntity serviceEntity = mapper.map(serviceRequest, ServiceEntity.class);
        serviceEntity.setProvider(provider);
        serviceEntity.setCategory(category);
        serviceEntity.setStatus(ServiceStatus.APPROVED);

        String url = imageService.uploadImage(thumbnail);
        if(url == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body(new ResponseDto<>("fail","Fail to upload image!",null));

        serviceEntity.setThumbnail(url);

        for (WorkEntity work : serviceEntity.getWorks()){
            work.setService(serviceEntity);
        }

        serviceEntity = serviceRepository.save(serviceEntity);

//        for (WorkDto work : serviceRequest.getWorks()){
//            WorkEntity workEntity = mapper.map(work, WorkEntity.class);
//            workEntity.setService(serviceEntity);
//            workRepository.save(workEntity);
//        }
        ServiceDto serviceDto = mapper.map(serviceRepository.findById(serviceEntity.getId()),ServiceDto.class);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new ResponseDto<>("success","Create a service successfully!",serviceDto));
    }
    @Transactional
    public ResponseEntity<?> updateService(ServiceDto serviceDto) {
        ServiceEntity service = serviceRepository.findById(serviceDto.getId()).orElse(null);
        if (service == null){
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found service with this ID!",null));
        }

        CategoryEntity category = categoryRepository.findById(serviceDto.getCategory().getId()).orElse(null);
        if (category == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Category of service not found!",null));

        Set<WorkEntity> workDelete = new HashSet<>();
        for (WorkEntity workEntity : service.getWorks()){
            if (serviceDto.getWorks().stream().anyMatch(workDto -> workDto.getId() !=null && workDto.getId().equals(workEntity.getId()))){
                WorkDto workDto = serviceDto.getWorks().stream().filter(work -> work.getId() !=null && work.getId().equals(workEntity.getId())).toList().get(0);
                mapper.map(workDto, workEntity);
//                workRepository.save(workEntity);
            } else {
                workDelete.add(workEntity);
//                workRepository.deleteById(workEntity.getId());
            }
        }

        for (WorkEntity work : workDelete){
            service.getWorks().remove(work);
            workRepository.deleteById(work.getId());
        }

        for (WorkDto workDto : serviceDto.getWorks()){
            if (workDto.getId() == null){
                WorkEntity workEntity = mapper.map(workDto, WorkEntity.class);
                workEntity.setService(service);
//                workRepository.save(workEntity);
                service.getWorks().add(workEntity);
            }
        }

        service.setName(serviceDto.getName());
        service.setOpenTime(serviceDto.getOpenTime());
        service.setCloseTime(serviceDto.getCloseTime());
        service.setCategory(category);
        service = serviceRepository.save(service);

        return ResponseEntity.ok(new ResponseDto<>("success","Update service successfully",mapper.map(service,ServiceDto.class)));

    }
    @Transactional
    public ResponseEntity<?> deleteService(UUID serviceId) {
        if (!serviceRepository.existsById(serviceId))
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found service with this id",null));
        
        serviceRepository.deleteById(serviceId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete service successfully!",null));
    }
    @Transactional
    public ResponseEntity<?> createCategory(MultipartFile thumbnail, String categoryName) {
        String url = imageService.uploadImage(thumbnail);
        if (url == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(500)).body(new ResponseDto<>("fail","Fail to upload thumbnail!",null));

        String slug = SlugUtil.covertToSlug(categoryName);
        CategoryEntity category = new CategoryEntity();
        category.setCategoryName(categoryName);
        category.setSlug(slug);
        category.setThumbnail(url);

        category = categoryRepository.save(category);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new ResponseDto<>("success","Create category successfully!", mapper.map(category, CategoryDto.class)));
    }
    @Transactional
    public ResponseEntity<?> updateCategory(UUID categoryId, MultipartFile thumbnail, String categoryName) {
        CategoryEntity category = categoryRepository.findById(categoryId).orElse(null);
        if (category == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Category not found",null));

        String slug = SlugUtil.covertToSlug(categoryName);
        category.setCategoryName(categoryName);
        category.setSlug(slug);

        if (thumbnail != null){
            String url = imageService.uploadImage(thumbnail);
            if (url == null)
                return ResponseEntity.status(HttpStatusCode.valueOf(500)).body(new ResponseDto<>("fail","Fail to upload thumbnail!",null));
            category.setThumbnail(url);
        }

        category = categoryRepository.save(category);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(new ResponseDto<>("success","Update category successfully!", mapper.map(category, CategoryDto.class)));
    }
}
