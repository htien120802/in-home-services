package vn.ute.service.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.request.ApproveRegisterServiceRequest;
import vn.ute.service.dto.request.RegisterServiceRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.exception.ImageUploadException;
import vn.ute.service.service.ServiceService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("")
public class ServiceController {
    private final ServiceService serviceService;

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @Operation(summary = "Get all services")
    @GetMapping("/public/service")
    public ResponseEntity<?> getAllServices(@RequestParam(defaultValue = "0") int pageNumber,
                                            @RequestParam(defaultValue = "9") int size,
                                            @RequestParam(defaultValue = "avgRating") String sortBy,
                                            @RequestParam(defaultValue = "DESC") Sort.Direction sortDirection,
                                            @RequestParam(required = false) String name,
                                            @RequestParam(required = false) String categorySlug,
                                            @RequestParam(required = false) String rating,
                                            HttpServletRequest request){
        return serviceService.getAllServices(pageNumber,size,sortBy,sortDirection,name,categorySlug,rating,request);
    }
    @Operation(summary = "Get all services of provider")
    @GetMapping("/provider/service")
    public ResponseEntity<ResponseDto<?>> getServiceByProvider(HttpServletRequest request){
        return serviceService.getServiceByProvider(request);
    }
    @Operation(summary = "Get all services of provider by status (approving, approved, unapproved, disable)")
    @GetMapping("/admin/service/{status}")
    public ResponseEntity<ResponseDto<?>> getServiceApproving(@PathVariable("status") String status){
        return serviceService.getServiceApproving(status);
    }

    @Operation(summary = "Get details of a service by Id")
    @GetMapping("/public/service/{id}")
    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(@PathVariable("id") String id){
        return serviceService.getServiceById(id);
    }
    @Operation(summary = "Register to provide service")
    @PostMapping(value = "/provider/service", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ResponseDto<ServiceDto>> registerService(@RequestPart MultipartFile thumbnail, @RequestPart("service") String service, HttpServletRequest request) throws JsonProcessingException, ImageUploadException {
        return serviceService.registerService(thumbnail, service, request);
    }
    @Operation(summary = "Approve or unapprove register service")
    @PutMapping(value = "/admin/service/approve")
    public ResponseEntity<ResponseDto<?>> approveRegisterRequest(@RequestBody ApproveRegisterServiceRequest approveRequest){
        return serviceService.approveRegisterRequest(approveRequest);
    }

    @Operation(summary = "Delete service")
    @DeleteMapping(value = "/provider/service/{id}")
    public ResponseEntity<ResponseDto<?>> deleteService(@PathVariable("id") UUID id, HttpServletRequest request){
        return serviceService.deleteService(id, request);
    }


    @Operation(summary = "Enable or Disable service")
    @PutMapping("/provider/service/{id}/{action}")
    public ResponseEntity<?> providerEnableOrDisableService(@PathVariable UUID id, @PathVariable String action, HttpServletRequest request){
        return serviceService.providerEnableOrDisableService(id, action, request);
    }

    @Operation(summary = "Update service of provider")
    @PutMapping("/provider/service")
    public ResponseEntity<?> updateServiceOfProvider(@RequestBody ServiceDto serviceDto, HttpServletRequest request){
        return serviceService.updateServiceOfProvider(serviceDto,request);
    }
}
