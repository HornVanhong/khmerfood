package com.khmerfood.service;

import com.khmerfood.dto.response.ApiResponse;
import com.khmerfood.dto.response.PaginationDto;
import com.khmerfood.dto.response.RecipeDetailDto;
import com.khmerfood.dto.response.RecipeSummaryDto;
import com.khmerfood.entity.Recipe;
import com.khmerfood.entity.enums.RecipeStatus;
import com.khmerfood.exception.BadRequestException;
import com.khmerfood.exception.ResourceNotFoundException;
import com.khmerfood.mapper.EntityMapper;
import com.khmerfood.repository.RecipeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final EntityMapper entityMapper;

    public RecipeService(RecipeRepository recipeRepository, EntityMapper entityMapper) {
        this.recipeRepository = recipeRepository;
        this.entityMapper = entityMapper;
    }

    private Pageable validateAndCreatePageable(int page, int size) {
        if (page < 0) {
            throw new BadRequestException("INVALID_PAGE", "Page index must not be negative");
        }
        if (size < 1 || size > 50) {
            throw new BadRequestException("INVALID_SIZE", "Page size must be between 1 and 50");
        }
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
    }

    public ApiResponse<List<RecipeSummaryDto>> getRecipes(int page, int size, String locale) {
        Pageable pageable = validateAndCreatePageable(page, size);
        Page<Recipe> recipePage = recipeRepository.findByStatus(RecipeStatus.PUBLISHED, pageable);

        List<RecipeSummaryDto> dtos = recipePage.getContent().stream()
                .map(r -> entityMapper.toRecipeSummaryDto(r, locale))
                .collect(Collectors.toList());

        PaginationDto pagination = new PaginationDto(
                recipePage.getNumber(),
                recipePage.getSize(),
                recipePage.getTotalElements(),
                recipePage.getTotalPages()
        );

        return ApiResponse.ok(dtos, pagination);
    }

    public RecipeDetailDto getRecipeBySlug(String slug, String locale) {
        Recipe recipe = recipeRepository.findBySlugAndStatus(slug, RecipeStatus.PUBLISHED)
                .orElseThrow(() -> new ResourceNotFoundException("RECIPE_NOT_FOUND", "Recipe not found: " + slug));
        return entityMapper.toRecipeDetailDto(recipe, locale);
    }

    public List<RecipeSummaryDto> getFeaturedRecipes(String locale) {
        return recipeRepository.findByFeaturedTrueAndStatus(RecipeStatus.PUBLISHED).stream()
                .map(r -> entityMapper.toRecipeSummaryDto(r, locale))
                .collect(Collectors.toList());
    }

    public ApiResponse<List<RecipeSummaryDto>> getRecipesByCategory(String categorySlug, int page, int size, String locale) {
        Pageable pageable = validateAndCreatePageable(page, size);
        Page<Recipe> recipePage = recipeRepository.findByCategorySlugAndStatus(categorySlug, RecipeStatus.PUBLISHED, pageable);

        List<RecipeSummaryDto> dtos = recipePage.getContent().stream()
                .map(r -> entityMapper.toRecipeSummaryDto(r, locale))
                .collect(Collectors.toList());

        PaginationDto pagination = new PaginationDto(
                recipePage.getNumber(),
                recipePage.getSize(),
                recipePage.getTotalElements(),
                recipePage.getTotalPages()
        );

        return ApiResponse.ok(dtos, pagination);
    }

    public ApiResponse<List<RecipeSummaryDto>> searchRecipes(String query, int page, int size, String locale) {
        if (query == null || query.trim().isBlank()) {
            throw new BadRequestException("INVALID_QUERY", "Search query must not be empty");
        }
        String cleanQuery = query.trim();
        if (cleanQuery.length() > 100) {
            throw new BadRequestException("INVALID_QUERY", "Search query exceeds maximum length of 100 characters");
        }

        Pageable pageable = validateAndCreatePageable(page, size);
        Page<Recipe> recipePage = recipeRepository.searchRecipes(cleanQuery, RecipeStatus.PUBLISHED, pageable);

        List<RecipeSummaryDto> dtos = recipePage.getContent().stream()
                .map(r -> entityMapper.toRecipeSummaryDto(r, locale))
                .collect(Collectors.toList());

        PaginationDto pagination = new PaginationDto(
                recipePage.getNumber(),
                recipePage.getSize(),
                recipePage.getTotalElements(),
                recipePage.getTotalPages()
        );

        return ApiResponse.ok(dtos, pagination);
    }
}
