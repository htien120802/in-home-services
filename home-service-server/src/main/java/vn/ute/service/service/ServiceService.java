package vn.ute.service.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.CoordinatesDto;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.dto.WorkDto;
import vn.ute.service.dto.request.ApproveRegisterServiceRequest;
import vn.ute.service.dto.request.RegisterServiceRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.entity.*;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.exception.ImageUploadException;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.repository.*;
import vn.ute.service.repository.criteria.ServiceCriteriaRepository;

import java.util.*;

@Service
public class ServiceService {
    private final ServiceRepository serviceRepository;
    private final ServiceCriteriaRepository serviceCriteriaRepository;

    private final CategoryRepository categoryRepository;
    private final CustomerRepository customerRepository;

    private final ProviderRepository providerRepository;

    private final WorkRepository workRepository;

    private final BingMapsService bingMapsService;

    private final ImageService imageService;

    private final JwtService jwtService;

    private final ModelMapper mapper;

    public ServiceService(ServiceRepository serviceRepository, ServiceCriteriaRepository serviceCriteriaRepository, CategoryRepository categoryRepository, CustomerRepository customerRepository, ProviderRepository providerRepository, WorkRepository workRepository, BingMapsService bingMapsService, ImageService imageService, JwtService jwtService, ModelMapper mapper) {
        this.serviceRepository = serviceRepository;
        this.serviceCriteriaRepository = serviceCriteriaRepository;
        this.categoryRepository = categoryRepository;
        this.customerRepository = customerRepository;
        this.providerRepository = providerRepository;
        this.workRepository = workRepository;
        this.bingMapsService = bingMapsService;
        this.imageService = imageService;
        this.jwtService = jwtService;
        this.mapper = mapper;
    }


    @Transactional
    public ResponseEntity<ResponseDto<ServiceDto>> registerService(MultipartFile thumbnail, String service, HttpServletRequest request) throws JsonProcessingException, ImageUploadException {
        RegisterServiceRequest serviceRequest = new ObjectMapper().readValue(service, RegisterServiceRequest.class);

        String username = jwtService.getUsernameFromRequest(request);

        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);

        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }

        if (provider.getAddresses().size() == 0 || provider.getPhone().isEmpty())
            return ResponseEntity.status(HttpStatusCode.valueOf(400)).body(new ResponseDto<>("fail","You have to add address and phone number first!",null));

        CategoryEntity category = categoryRepository.findById(serviceRequest.getCategory()).orElse(null);
        if (category == null)
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Category not found!",null));

        ServiceEntity serviceEntity = mapper.map(serviceRequest, ServiceEntity.class);
        serviceEntity.setProvider(provider);
        serviceEntity.setCategory(category);

        String url = imageService.uploadImage(thumbnail);
        if(url == null)
            return ResponseEntity.status(500).body(new ResponseDto<>("fail","Fail to upload image!",null));

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
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Register service successfully!",serviceDto));
    }

    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(String id) {
        Optional<ServiceEntity> service = serviceRepository.findById(UUID.fromString(id));
        if (service.isPresent() && service.get().getStatus().equals(ServiceStatus.APPROVED)){
            ServiceDto serviceDto = mapper.map(service.get(),ServiceDto.class);
            return ResponseEntity.status(200).body(new ResponseDto<>("success","Get service successfully!",serviceDto));
        }else {
            return ResponseEntity.status(404).body(new ResponseDto<>("failure","Service with this id is not exist!",null));
        }
    }

    public ResponseEntity<ResponseDto<List<ServiceDto>>> getAllServices() {
        List<ServiceDto> serviceDtos = mapper.map(serviceRepository.findAllByStatusIsApproved(),new TypeToken<List<ServiceDto>>() {}.getType());

        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all services successfully!",serviceDtos));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> approveRegisterRequest(ApproveRegisterServiceRequest approveRequest) {
        ServiceEntity service = serviceRepository.findById(approveRequest.getServiceId()).orElse(null);

        if (service == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("success","Can't find service",null));
        }
        if (service.getStatus().equals(ServiceStatus.APPROVING)){
            if (approveRequest.isApprove()){
                service.setStatus(ServiceStatus.APPROVED);
            } else {
                service.setStatus(ServiceStatus.UNAPPROVED);
            }
            serviceRepository.save(service);
            return ResponseEntity.status(200).body(new ResponseDto<>("success",String.format("Service has been %s!",service.getStatus().toString().toLowerCase()),null));
        } else {
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Service was canceled or approved!",null));
        }
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> deleteService(UUID id, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }

        ServiceEntity service = serviceRepository.findByIdAndProvider(id,provider).orElse(null);
        if (service == null){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You're not allowed to delete!",null));
        }
        serviceRepository.deleteById(id);
//        service.setStatus(ServiceStatus.DELETE);
//        serviceRepository.save(service);
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Delete service successfully!",null));
    }

    public ResponseEntity<ResponseDto<?>> getServiceByProvider(HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        List<ServiceDto> services = mapper.map(serviceRepository.findAllByProvider_Account_Username(username),new TypeToken<List<ServiceDto>>() {}.getType());

        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get services by provider successfully!",services));
    }

    public ResponseEntity<ResponseDto<?>> getServiceApproving(String status) {
        status = status.toUpperCase();
        List<ServiceDto> services = mapper.map(serviceRepository.findAllByStatusIs(ServiceStatus.valueOf(status)),new TypeToken<List<ServiceDto>>() {}.getType());
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get services with approving status successfully!",services));
    }

    @Transactional
    public ResponseEntity<?> providerEnableOrDisableService(UUID id, String action, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }

        ServiceEntity service = serviceRepository.findByIdAndProvider(id, provider).orElse(null);
        if (service == null){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","You're not allowed to access this service!",null));
        }

        if (action.equals("enable") && service.getStatus().equals(ServiceStatus.DISABLE))
            service.setStatus(ServiceStatus.APPROVED);
        else if (action.equals("disable") && service.getStatus().equals(ServiceStatus.APPROVED))
            service.setStatus(ServiceStatus.DISABLE);
        else
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Action is wrong!",null));

        return ResponseEntity.status(200).body(new ResponseDto<>("success","This service has been " + action + "d!",null));

    }
    @Transactional
    public ResponseEntity<?> updateServiceOfProvider(ServiceDto serviceDto, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Provider not found!",null));
        }

        ServiceEntity service = serviceRepository.findByIdAndProvider(serviceDto.getId(), provider).orElse(null);
        if (service == null){
            return ResponseEntity.status(400).body(new ResponseDto<>("fail","Not found service with this ID or service isn't owned yours!",null));
        }

        CategoryEntity category = categoryRepository.findById(serviceDto.getCategory().getId()).orElse(null);
        if (category == null)
            return ResponseEntity.status(404).body(new ResponseDto<>("fail","Category of service not found!",null));

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

        return ResponseEntity.status(200).body(new ResponseDto<>("success","Update service successfully",mapper.map(service,ServiceDto.class)));

    }

    public ResponseEntity<?> getAllServices(int pageNumber, int size, String sortBy, Sort.Direction sortDirection, String name, String categorySlug, String rating, HttpServletRequest request) {
        if(jwtService.checkHaveToken(request)){
            String username = jwtService.getUsernameFromRequest(request);
            CustomerEntity customer = customerRepository.findByAccount_Username(username).orElse(null);
            if (customer != null && customer.getAddresses().size() != 0) {
                AddressEntity addressEntity = new ArrayList<>(customer.getAddresses()).get(0);
                List<ServiceDto> serviceDtos = new ArrayList<>();
                for (ServiceEntity service : serviceCriteriaRepository.findAllWithFilters(name, categorySlug, rating)) {
                    ServiceDto map = mapper.map(service, ServiceDto.class);
                    AddressEntity address = new ArrayList<>(service.getProvider().getAddresses()).get(0);
                    map.setDistance(bingMapsService.calculateDistance(mapper.map(addressEntity.getCoordinates(), CoordinatesDto.class),mapper.map(address.getCoordinates(), CoordinatesDto.class)));
                    serviceDtos.add(map);
                }
                if (sortBy.equals("distance")){
                    if (sortDirection.isAscending())
                        serviceDtos.sort(Comparator.comparingDouble(ServiceDto::getDistance).thenComparing(Comparator.comparingDouble(ServiceDto::getAvgRating).reversed()));
                    else {
                        serviceDtos.sort(Comparator.comparingDouble(ServiceDto::getDistance).reversed().thenComparing(Comparator.comparingDouble(ServiceDto::getAvgRating).reversed()));
                    }
                }
                if (sortBy.equals("avgRating")){
                    if (sortDirection.isAscending())
                        serviceDtos.sort(Comparator.comparingDouble(ServiceDto::getAvgRating).thenComparingDouble(ServiceDto::getDistance));
                    else {
                        serviceDtos.sort(Comparator.comparingDouble(ServiceDto::getAvgRating).reversed().thenComparingDouble(ServiceDto::getDistance));
                    }
                }

                Sort sort = Sort.by(sortDirection, sortBy);
                Pageable pageable = PageRequest.of(pageNumber,size, sort);
                Page<ServiceDto> page = new PageImpl<>(serviceDtos,pageable,serviceDtos.size());
                return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all services successfully!",page));
            }
        }
        if (sortBy.equals("distance"))
            sortBy = "avgRating";
        Page<ServiceEntity> serviceEntityPage = serviceCriteriaRepository.findAllWithFilters(pageNumber,size,sortDirection,sortBy,name,categorySlug,rating);
        Page<ServiceDto> serviceDtoPage = serviceEntityPage.map(service -> mapper.map(service,ServiceDto.class));
        return ResponseEntity.status(200).body(new ResponseDto<>("success","Get all services successfully!",serviceDtoPage));
    }
}
