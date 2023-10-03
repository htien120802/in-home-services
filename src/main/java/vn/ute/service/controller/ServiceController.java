package vn.ute.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.NewServiceRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.ServiceDto;
import vn.ute.service.service.ServiceService;

import java.util.List;

@RestController
@RequestMapping("")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;
    @GetMapping("/public/service")
    public ResponseEntity<ResponseDto<List<ServiceDto>>> getAllServices(){
        return serviceService.getAllServices();
    }

    @GetMapping("/public/service/{id}")
    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(@PathVariable("id") String id){
        return serviceService.getServiceById(id);
    }

    @PostMapping(value = "/provider/service",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<ServiceDto>> createService(@RequestBody NewServiceRequest service){
        return serviceService.createService(service);
    }

}
