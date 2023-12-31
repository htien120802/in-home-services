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
import vn.ute.service.dto.response.ReviewResponse;
import vn.ute.service.dto.response.ServiceResponse;
import vn.ute.service.entity.*;
import vn.ute.service.enumerate.BookingStatus;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.exception.ImageUploadException;
import vn.ute.service.repository.*;
import vn.ute.service.repository.criteria.*;
import vn.ute.service.utils.SlugUtil;

import java.util.*;

@Service
public class AdminService {
    private final CustomerCriteriaRepository customerCriteriaRepository;
    private final ProviderCriteriaRepository providerCriteriaRepository;
    private final ServiceCriteriaRepository serviceCriteriaRepository;
    private final BookingCriteriaRepository bookingCriteriaRepository;
    private final ReviewCriteriaRepository reviewCriteriaRepository;
    private final ServiceRepository serviceRepository;
    private final WorkRepository workRepository;
    private final CategoryRepository categoryRepository;
    private final CustomerRepository customerRepository;
    private final ProviderRepository providerRepository;
    private final BookingRepository bookingRepository;
    private final AccountRepository accountRepository;
    private final ReviewRepository reviewRepository;
    private final AddressRepository addressRepository;
    private final ImageService imageService;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper mapper;

    public AdminService(CustomerCriteriaRepository customerCriteriaRepository, ProviderCriteriaRepository providerCriteriaRepository, ServiceCriteriaRepository serviceCriteriaRepository, BookingCriteriaRepository bookingCriteriaRepository, ReviewCriteriaRepository reviewCriteriaRepository, ServiceRepository serviceRepository, WorkRepository workRepository, CategoryRepository categoryRepository, CustomerRepository customerRepository, ProviderRepository providerRepository, BookingRepository bookingRepository, AccountRepository accountRepository, ReviewRepository reviewRepository, AddressRepository addressRepository, ImageService imageService, PasswordEncoder passwordEncoder, ModelMapper mapper) {
        this.customerCriteriaRepository = customerCriteriaRepository;
        this.providerCriteriaRepository = providerCriteriaRepository;
        this.serviceCriteriaRepository = serviceCriteriaRepository;
        this.bookingCriteriaRepository = bookingCriteriaRepository;
        this.reviewCriteriaRepository = reviewCriteriaRepository;
        this.serviceRepository = serviceRepository;
        this.workRepository = workRepository;
        this.categoryRepository = categoryRepository;
        this.customerRepository = customerRepository;
        this.providerRepository = providerRepository;
        this.bookingRepository = bookingRepository;
        this.accountRepository = accountRepository;
        this.reviewRepository = reviewRepository;
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
    public ResponseEntity<?> createCustomer(CreateUserRequest customerRequest) throws ImageUploadException {
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
        addressRepository.save(mapper.map(profileRequest.getAddress(),AddressEntity.class));
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
    public ResponseEntity<?> createProvider(CreateUserRequest providerRequest) throws ImageUploadException {
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
        addressRepository.save(mapper.map(profileRequest.getAddress(),AddressEntity.class));
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
        Page<ServiceResponse> serviceDtoPage = serviceEntityPage.map(service -> mapper.map(service,ServiceResponse.class));
        return ResponseEntity.ok(new ResponseDto<>("success","Get all services successfully!",serviceDtoPage));
    }
    @Transactional
    public ResponseEntity<?> createService(MultipartFile thumbnail, String createServiceRequest) throws JsonProcessingException, ImageUploadException {
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
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        if (service == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found service with this id",null));
        
        serviceRepository.delete(service);

        ProviderEntity provider = providerRepository.findById(service.getProvider().getId()).get();
        List<BookingEntity> bookingEntities = bookingRepository.findAllByProviderAndReviewIsNotNull(provider);
        double avgRating =  bookingEntities.stream().mapToDouble(BookingEntity::getRating).average().orElse(0.0);
        provider.setAvgRating(avgRating);
        providerRepository.save(provider);

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete service successfully!",null));
    }
    @Transactional
    public ResponseEntity<?> createCategory(MultipartFile thumbnail, String categoryName) throws ImageUploadException {
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
    public ResponseEntity<?> updateCategory(UUID categoryId, MultipartFile thumbnail, String categoryName) throws ImageUploadException {
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

    public ResponseEntity<?> getAllBookings(int pageNumber, int size, BookingStatus status, String providerName, String customerName, String serviceCategorySlug) {
        Page<BookingEntity> bookings = bookingCriteriaRepository.findAllWithFilters(pageNumber, size, status, providerName, customerName, serviceCategorySlug);
        Page<BookingDto> bookingDtos = bookings.map(booking -> mapper.map(booking, BookingDto.class));
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get all bookings successfully!",bookingDtos));
    }

    @Transactional
    public ResponseEntity<?> deleteBooking(UUID bookingId) {
        if (!bookingRepository.existsById(bookingId))
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Not found booking with this id",null));

        bookingRepository.deleteById(bookingId);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("fail","Delete booking successfully!",null));
    }

    public ResponseEntity<?> getBooking(UUID bookingId) {
        BookingEntity booking = bookingRepository.findById(bookingId).orElse(null);
        if (booking == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Booking not found", null));

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get booking successfully!",mapper.map(booking, BookingDto.class)));
    }

    public ResponseEntity<?> getAllReviews(int pageNumber, int size, String rating, String customerName, String serviceName) {
        int temp = 0;
        if (rating != null){
            temp =  Integer.parseInt(rating);
        }
        Page<ReviewEntity> reviewEntities = reviewCriteriaRepository.findAllWithFilters(pageNumber,size,temp,customerName,serviceName);
        Page<ReviewResponse> reviews = reviewEntities.map(reviewEntity -> mapper.map(reviewEntity,ReviewResponse.class));
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get all reviews successfully!",reviews));
    }

    public ResponseEntity<?> getReview(UUID reviewId) {
        ReviewEntity reviewEntity = reviewRepository.findById(reviewId).orElse(null);
        if (reviewEntity == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Review not found",null));

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Get review successfully!",mapper.map(reviewEntity, ReviewResponse.class)));
    }
    @Transactional
    public ResponseEntity<?> deleteReview(UUID reviewId) {
        ReviewEntity reviewEntity = reviewRepository.findById(reviewId).orElse(null);
        if (reviewEntity == null)
            return ResponseEntity.status(HttpStatusCode.valueOf(404)).body(new ResponseDto<>("fail","Review not found",null));
//        ServiceEntity service = reviewEntity.getService();
//        service.getReviews().remove(reviewEntity);
        reviewRepository.delete(reviewEntity);


//        service.calcAvgRating();
//        serviceRepository.save(service);
//
//        ProviderEntity provider = service.getProvider();
//        List<ReviewEntity> reviewEntities = reviewRepository.findAllByService_Provider(provider);
//        double avg = reviewEntities.stream().mapToDouble(ReviewEntity::getRating).average().orElse(0.0);
//        provider.setAvgRating(avg);
//        providerRepository.save(provider);


        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success","Delete review successfully!",null));

    }

    public ResponseEntity<?> countEntity() {
        List<CountItem> countItems = new ArrayList<>();

        long customerCount = customerRepository.count();
        countItems.add(new CountItem("customer",customerCount));

        long providerCount = providerRepository.count();
        countItems.add(new CountItem("provider",providerCount));

        long serviceCount = serviceRepository.countAllByStatus(ServiceStatus.APPROVED);
        countItems.add(new CountItem("service", serviceCount));

        long bookingCount = bookingRepository.countAllByStatus(BookingStatus.DONE);
        countItems.add(new CountItem("booking",bookingCount));

        long reviewCount = reviewRepository.count();
        countItems.add(new CountItem("review",reviewCount));

        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,countItems));

    }

    public ResponseEntity<?> quantityStatisticsOfBookingByMonth(String month, int year) {
        List<Object[]> result;
        if (month != null){
            result = bookingRepository.quantityStatistics(Integer.parseInt(month), year);
        } else {
            result = bookingRepository.quantityStatistics(year);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,result));
    }

    public ResponseEntity<?> salesStatisticsOfBookingByMonth(String month, int year) {
        List<Object[]> result;
        if (month != null){
            result = bookingRepository.salesStatistics(Integer.parseInt(month), year);
        } else {
            result = bookingRepository.salesStatistics(year);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,result));
    }

    public ResponseEntity<?> quantityStatisticsOfProvider(UUID providerId, String month, int year) {

        ProviderEntity provider = providerRepository.findById(providerId).orElse(null);

        if (provider == null)
            return ResponseEntity.status(404).body(new ResponseDto<>("fail", "Provider not found", null));

        List<Object[]> result;
        if (month != null){
            result = bookingRepository.quantityStatisticsForProvider(Integer.parseInt(month), year, provider);
        } else {
            result = bookingRepository.quantityStatisticsForProvider(year, provider);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,result));
    }

    public ResponseEntity<?> salesStatisticsOfProvider(UUID providerId, String month, int year) {
        ProviderEntity provider = providerRepository.findById(providerId).orElse(null);

        if (provider == null)
            return ResponseEntity.status(404).body(new ResponseDto<>("fail", "Provider not found", null));

        List<Object[]> result;
        if (month != null){
            result = bookingRepository.salesStatisticsForProvider(Integer.parseInt(month), year, provider);
        } else {
            result = bookingRepository.salesStatisticsForProvider(year, provider);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,result));
    }

    public ResponseEntity<?> topQuantity(String month, int year) {

        List<Object[]> result;
        if (month != null){
            result = bookingRepository.topProviderAboutQuantity(Integer.parseInt(month),year);
        } else {
            result = bookingRepository.topProviderAboutQuantity(year);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,result));
    }

    public ResponseEntity<?> topSales(String month, int year) {
        List<Object[]> result;
        if (month != null){
            result = bookingRepository.topProviderAboutSales(Integer.parseInt(month),year);
        } else {
            result = bookingRepository.topProviderAboutSales(year);
        }
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(new ResponseDto<>("success",null,result));
    }
}
