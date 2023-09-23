package vn.ute.service.service;
import org.modelmapper.TypeToken;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.request.NewServiceRequest;
import vn.ute.service.entity.CategoryEntity;
import vn.ute.service.entity.ServiceEntity;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import vn.ute.service.dto.response.ResponseDto;
import vn.ute.service.dto.ServiceDto;
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
    private ModelMapper mapper;



    public ResponseEntity<ResponseDto<ServiceDto>> createService(NewServiceRequest serviceRequest) {
        ResponseDto<ServiceDto> responseDto = new ResponseDto<>();
        try {
            Optional<CategoryEntity> category = categoryRepository.findById(serviceRequest.getCategory());
            ServiceEntity serviceEntity = mapper.map(serviceRequest, ServiceEntity.class);
            serviceEntity.setCategory(category.get());
            ServiceDto serviceDto = mapper.map(serviceRepository.save(serviceEntity),ServiceDto.class);
            responseDto.setData(serviceDto);
            responseDto.setStatus("success");
            responseDto.setMessage("Create service successfully!");
        } catch (Exception e){
            responseDto.setStatus("fail");
            responseDto.setMessage("Create service is failure!");
        } finally {
            return ResponseEntity.ok(responseDto);
        }
    }

    public ResponseEntity<ResponseDto<ServiceDto>> getServiceById(String id) {
        Optional<ServiceEntity> service = serviceRepository.findById(UUID.fromString(id));
        if (service.isPresent()){
            ServiceDto serviceDto = mapper.map(service.get(),ServiceDto.class);
            return ResponseEntity.ok(new ResponseDto<>("success","Get service successfully!",serviceDto));
        }else {
            return ResponseEntity.ok(new ResponseDto<>("failure","Service with this id is not exist!",null));
        }
    }

    public ResponseEntity<ResponseDto<List<ServiceDto>>> getAllServices() {
        List<ServiceDto> serviceDtos = mapper.map(serviceRepository.findAll(),new TypeToken<List<ServiceDto>>() {}.getType());

        return ResponseEntity.ok(new ResponseDto<>("success","Get all services successfully!",serviceDtos));
    }
}
