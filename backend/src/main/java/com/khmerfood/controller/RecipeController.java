package com.khmerfood.controller;

import com.khmerfood.dto.response.ApiResponse;
import com.khmerfood.dto.response.RecipeDetailDto;
import com.khmerfood.dto.response.RecipeSummaryDto;
import com.khmerfood.service.RecipeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recipes")
@Tag(name = "Recipes", description = "Endpoints for discovering Cambodian recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    @Operation(summary = "Get paginated list of published recipes")
    public ResponseEntity<ApiResponse<List<RecipeSummaryDto>>> getRecipes(
            @Parameter(description = "Zero-based page index (default 0)")
            @RequestParam(name = "page", defaultValue = "0") int page,
            @Parameter(description = "Page size (default 12, max 50)")
            @RequestParam(name = "size", defaultValue = "12") int size,
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        return ResponseEntity.ok(recipeService.getRecipes(page, size, locale));
    }

    @GetMapping("/featured")
    @Operation(summary = "Get featured published recipes")
    public ResponseEntity<ApiResponse<List<RecipeSummaryDto>>> getFeaturedRecipes(
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        List<RecipeSummaryDto> featured = recipeService.getFeaturedRecipes(locale);
        return ResponseEntity.ok(ApiResponse.ok(featured));
    }

    @GetMapping("/search")
    @Operation(summary = "Search published recipes across Khmer and English names")
    public ResponseEntity<ApiResponse<List<RecipeSummaryDto>>> searchRecipes(
            @Parameter(description = "Search keyword", required = true)
            @RequestParam(name = "q") String query,
            @Parameter(description = "Zero-based page index (default 0)")
            @RequestParam(name = "page", defaultValue = "0") int page,
            @Parameter(description = "Page size (default 12, max 50)")
            @RequestParam(name = "size", defaultValue = "12") int size,
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        return ResponseEntity.ok(recipeService.searchRecipes(query, page, size, locale));
    }

    @GetMapping("/category/{slug}")
    @Operation(summary = "Get recipes by category slug")
    public ResponseEntity<ApiResponse<List<RecipeSummaryDto>>> getRecipesByCategory(
            @PathVariable String slug,
            @Parameter(description = "Zero-based page index (default 0)")
            @RequestParam(name = "page", defaultValue = "0") int page,
            @Parameter(description = "Page size (default 12, max 50)")
            @RequestParam(name = "size", defaultValue = "12") int size,
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        return ResponseEntity.ok(recipeService.getRecipesByCategory(slug, page, size, locale));
    }

    @GetMapping("/{slug}")
    @Operation(summary = "Get detailed recipe by slug")
    public ResponseEntity<ApiResponse<RecipeDetailDto>> getRecipeBySlug(
            @PathVariable String slug,
            @Parameter(description = "Language locale: km (default) or en")
            @RequestParam(name = "locale", defaultValue = "km") String locale) {
        RecipeDetailDto recipe = recipeService.getRecipeBySlug(slug, locale);
        return ResponseEntity.ok(ApiResponse.ok(recipe));
    }
}
