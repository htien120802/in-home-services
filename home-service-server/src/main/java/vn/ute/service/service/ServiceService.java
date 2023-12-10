package vn.ute.service.service;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.request.ApproveRegisterServiceRequest;
import vn.ute.service.dto.request.RegisterServiceRequest;
import vn.ute.service.entity.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private WorkRepository workRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProviderRepository providerRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ImageService imageService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private ModelMapper mapper;


    @Transactional
    public ResponseEntity<ResponseDto<ServiceDto>> registerService(MultipartFile thumbnail, String service, HttpServletRequest request) throws JsonProcessingException {
        RegisterServiceRequest serviceRequest = new ObjectMapper().readValue(service, RegisterServiceRequest.class);

        String username = jwtService.getUsernameFromRequest(request);

        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);

        if (provider == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Provider not found!",null));
        }

        CategoryEntity category = categoryRepository.findById(serviceRequest.getCategory()).orElse(null);
        if (category == null)
            return ResponseEntity.ok(new ResponseDto<>("fail","Category not found!",null));

        ServiceEntity serviceEntity = mapper.map(serviceRequest, ServiceEntity.class);
        serviceEntity.setProvider(provider);
        serviceEntity.setCategory(category);

        String url = imageService.uploadImage(thumbnail);
        if(url == null)
            return ResponseEntity.ok(new ResponseDto<>("fail","Fail to upload image!",null));

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
        return ResponseEntity.ok(new ResponseDto<>("success","Register service successfully!",serviceDto));
    }

    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(String id) {
        Optional<ServiceEntity> service = serviceRepository.findById(UUID.fromString(id));
        if (service.isPresent() && service.get().getStatus().equals(ServiceStatus.APPROVED)){
            ServiceDto serviceDto = mapper.map(service.get(),ServiceDto.class);
            return ResponseEntity.ok(new ResponseDto<>("success","Get service successfully!",serviceDto));
        }else {
            return ResponseEntity.ok(new ResponseDto<>("failure","Service with this id is not exist!",null));
        }
    }

    public ResponseEntity<ResponseDto<List<ServiceDto>>> getAllServices() {
        List<ServiceDto> serviceDtos = mapper.map(serviceRepository.findAllByStatusIsApproved(),new TypeToken<List<ServiceDto>>() {}.getType());

        return ResponseEntity.ok(new ResponseDto<>("success","Get all services successfully!",serviceDtos));
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> approveRegisterRequest(ApproveRegisterServiceRequest approveRequest) {
        ServiceEntity service = serviceRepository.findById(approveRequest.getServiceId()).orElse(null);

        if (service == null){
            return ResponseEntity.ok(new ResponseDto<>("success","Can't find service",null));
        }
        if (service.getStatus().equals(ServiceStatus.APPROVING)){
            if (approveRequest.isApprove()){
                service.setStatus(ServiceStatus.APPROVED);
            } else {
                service.setStatus(ServiceStatus.UNAPPROVED);
            }
            serviceRepository.save(service);
            return ResponseEntity.ok(new ResponseDto<>("success",String.format("Service has been %s!",service.getStatus().toString().toLowerCase()),null));
        } else {
            return ResponseEntity.ok(new ResponseDto<>("fail","Service was canceled or approved!",null));
        }
    }
    @Transactional
    public ResponseEntity<ResponseDto<?>> deleteService(UUID id, HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        ProviderEntity provider = providerRepository.findByAccount_Username(username).orElse(null);
        if (provider == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","Provider not found!",null));
        }

        ServiceEntity service = serviceRepository.findByIdAndProvider(id,provider).orElse(null);
        if (service == null){
            return ResponseEntity.ok(new ResponseDto<>("fail","You're not allowed to delete!",null));
        }
        serviceRepository.deleteById(id);
//        service.setStatus(ServiceStatus.DELETE);
//        serviceRepository.save(service);
        return ResponseEntity.ok(new ResponseDto<>("success","Delete service successfully!",null));
    }

    public ResponseEntity<ResponseDto<?>> getServiceByProvider(HttpServletRequest request) {
        String username = jwtService.getUsernameFromRequest(request);
        List<ServiceDto> services = mapper.map(serviceRepository.findAllByProvider_Account_Username(username),new TypeToken<List<ServiceDto>>() {}.getType());

        return ResponseEntity.ok(new ResponseDto<>("success","Get services by provider successfully!",services));
    }

    public ResponseEntity<ResponseDto<?>> getServiceApproving(String status) {
        status = status.toUpperCase();
        List<ServiceDto> services = mapper.map(serviceRepository.findAllByStatusIs(ServiceStatus.valueOf(status)),new TypeToken<List<ServiceDto>>() {}.getType());
        return ResponseEntity.ok(new ResponseDto<>("success","Get services with approving status successfully!",services));
    }
}
