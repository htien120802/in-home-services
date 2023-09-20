package vn.ute.service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.ute.service.dto.request.NewServiceRequest;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.response.ServiceDto;
import vn.ute.service.service.ServiceService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/service")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;

    @GetMapping("")
    public ResponseEntity<ResponseDto<List<ServiceDto>>> getAllServices(){
        return serviceService.getAllServices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(@PathVariable("id") String id){
        return serviceService.getServiceById(id);
    }

    @PostMapping(value = "",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseDto<ServiceDto>> createService(@RequestBody NewServiceRequest service){
        return serviceService.createService(service);
    }
}
