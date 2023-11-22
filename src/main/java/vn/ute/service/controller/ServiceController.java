package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import vn.ute.service.dto.request.ApproveRegisterServiceRequest;
import vn.ute.service.dto.request.RegisterServiceRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.service.ServiceService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;
    @GetMapping("/public/service")
    public ResponseEntity<ResponseDto<List<ServiceDto>>> getAllServices(){
        return serviceService.getAllServices();
    }

    @GetMapping("/provider/service")
    public ResponseEntity<ResponseDto<?>> getServiceByProvider(HttpServletRequest request){
        return serviceService.getServiceByProvider(request);
    }

    @GetMapping("/admin/service/{status}")
    public ResponseEntity<ResponseDto<?>> getServiceApproving(@PathVariable("status") String status){
        return serviceService.getServiceApproving(status);
    }


    @GetMapping("/public/service/{id}")
    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(@PathVariable("id") String id){
        return serviceService.getServiceById(id);
    }

    @PostMapping(value = "/provider/service",consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE} )
    public ResponseEntity<ResponseDto<ServiceDto>> registerService(@RequestBody RegisterServiceRequest service, @RequestPart("thumbnail") MultipartFile thumbnail){
        return serviceService.registerService(service, thumbnail);
    }

    @PutMapping(value = "/admin/service", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<?>> approveRegisterRequest(@RequestBody ApproveRegisterServiceRequest approveRequest){
        return serviceService.approveRegisterRequest(approveRequest);
    }


    @DeleteMapping(value = "/provider/service/{id}")
    public ResponseEntity<ResponseDto<?>> deleteService(@PathVariable("id") UUID id, HttpServletRequest request){
        return serviceService.deleteService(id, request);
    }


}
