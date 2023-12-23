package vn.ute.service.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.ute.service.service.CategoryService;

@RestController
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @Operation(summary = "Get all categories")
    @GetMapping("public/category")
    public ResponseEntity<?> getAllCategories(){
        return categoryService.getAllCategories();
    }
}
