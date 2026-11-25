package com.khmerfood.controller;

import com.khmerfood.dto.response.ApiResponse;
import com.khmerfood.dto.response.CategoryDto;
import com.khmerfood.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
@Tag(name = "Categories", description = "Endpoints for discovering recipe categories")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    @Operation(summary = "List all active recipe categories")
    public ResponseEntity<ApiResponse<List<CategoryDto>>> getCategories(
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        List<CategoryDto> categories = categoryService.getActiveCategories(locale);
        return ResponseEntity.ok(ApiResponse.ok(categories));
    }

    @GetMapping("/{slug}")
    @Operation(summary = "Get category details by slug")
    public ResponseEntity<ApiResponse<CategoryDto>> getCategoryBySlug(
            @PathVariable String slug,
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        CategoryDto category = categoryService.getCategoryBySlug(slug, locale);
        return ResponseEntity.ok(ApiResponse.ok(category));
    }
}
