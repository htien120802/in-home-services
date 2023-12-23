package vn.ute.service.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import vn.ute.service.dto.CategoryDto;
import vn.ute.service.entity.CategoryEntity;
import vn.ute.service.repository.CategoryRepository;
import vn.ute.service.repository.ServiceRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final ServiceRepository serviceRepository;
    private final ModelMapper mapper;

    public CategoryService(CategoryRepository categoryRepository, ServiceRepository serviceRepository, ModelMapper mapper) {
        this.categoryRepository = categoryRepository;
        this.serviceRepository = serviceRepository;
        this.mapper = mapper;
    }

    public ResponseEntity getAllCategories() {
        List<CategoryEntity> categoryEntities = categoryRepository.findAll();
        JSONObject resposne = new JSONObject();
        JSONArray jsonArray = new JSONArray();
        for (CategoryEntity category : categoryEntities){
            JSONObject o = new JSONObject();
            //CategoryDto categoryDto = mapper.map(category, CategoryDto.class);

            int numberServiceOfCategory =  serviceRepository.countAllByCategory_Slug(category.getSlug());

            o.put("id",category.getId());
            o.put("categoryName",category.getCategoryName());
            o.put("slug",category.getSlug());
            o.put("thumbnail",category.getThumbnail());
            o.put("numberService",numberServiceOfCategory);

            jsonArray.put(o);
        }
        resposne.put("status","success");
        resposne.put("message","Get all categories successfully");
        resposne.put("data",jsonArray);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(resposne.toString(3));
    }
}
