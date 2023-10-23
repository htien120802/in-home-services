package vn.ute.service.service;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.request.ApproveRegisterServiceRequest;
import vn.ute.service.dto.request.RegisterServiceRequest;
import vn.ute.service.entity.AccountEntity;
import vn.ute.service.entity.CategoryEntity;
import vn.ute.service.entity.ServiceEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.enumerate.ServiceStatus;
import vn.ute.service.jwt.JwtService;
import vn.ute.service.reposioty.AccountRepository;
import vn.ute.service.reposioty.CategoryRepository;
import vn.ute.service.reposioty.ServiceRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ServiceService {
    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ImageService imageService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private ModelMapper mapper;



    public ResponseEntity<ResponseDto<ServiceDto>> registerService(RegisterServiceRequest serviceRequest, MultipartFile thumbnail) {
        ResponseDto<ServiceDto> responseDto = new ResponseDto<>();
        try {
            Optional<CategoryEntity> category = categoryRepository.findById(serviceRequest.getCategory());
            ServiceEntity serviceEntity = mapper.map(serviceRequest, ServiceEntity.class);
            serviceEntity.setCategory(category.get());

            String url = imageService.uploadImage(thumbnail);
            serviceEntity.setThumbnail(url);
            ServiceDto serviceDto = mapper.map(serviceRepository.save(serviceEntity),ServiceDto.class);
            responseDto.setData(serviceDto);
            responseDto.setStatus("success");
            responseDto.setMessage("Register service successfully!");
        } catch (Exception e){
            responseDto.setStatus("fail");
            responseDto.setMessage("Register service is failure!");
        } finally {
            return ResponseEntity.ok(responseDto);
        }
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

    public ResponseEntity<ResponseDto<?>> deleteService(UUID id, String authorization) {
        Optional<ServiceEntity> service = serviceRepository.findById(id);
        if (service.isPresent()){
            String username = jwtService.getUsernameFromAuthorization(authorization);
            AccountEntity account = accountRepository.findByUsername(username).orElse(null);

            if (account != null && account.getProvider() != null){
                if (!serviceRepository.existsByIdAndProvider_Account_Username(id,username)){
                    return ResponseEntity.ok(new ResponseDto<>("fail","You're allowed to delete this!",null));
                }
            }

            ServiceEntity s =service.get();
            if (s.getStatus().equals(ServiceStatus.DELETE)){
                return ResponseEntity.ok(new ResponseDto<>("fail","This service has been delete",null));
            }
            else {
                s.setStatus(ServiceStatus.DELETE);
                serviceRepository.save(s);
                return ResponseEntity.ok(new ResponseDto<>("success","Delete successfully!",null));
            }
        }
        return ResponseEntity.ok(new ResponseDto<>("fail","Service not found!",null));
    }

    public ResponseEntity<ResponseDto<?>> getServiceByProvider(String authorization) {
        String username = jwtService.getUsernameFromAuthorization(authorization);
        List<ServiceDto> services = mapper.map(serviceRepository.findAllByProvider_Account_Username(username),new TypeToken<List<ServiceDto>>() {}.getType());

        return ResponseEntity.ok(new ResponseDto<>("success","Get services by provider successfully!",services));
    }

    public ResponseEntity<ResponseDto<?>> getServiceApproving(String status) {
        status = status.toUpperCase();
        List<ServiceDto> services = mapper.map(serviceRepository.findAllByStatusIs(ServiceStatus.valueOf(status)),new TypeToken<List<ServiceDto>>() {}.getType());
        return ResponseEntity.ok(new ResponseDto<>("success","Get services with approving status successfully!",services));
    }
}
