package com.khmerfood.service;

import com.khmerfood.dto.response.CategoryDto;
import com.khmerfood.entity.Category;
import com.khmerfood.entity.enums.RecipeStatus;
import com.khmerfood.exception.ResourceNotFoundException;
import com.khmerfood.mapper.EntityMapper;
import com.khmerfood.repository.CategoryRepository;
import com.khmerfood.repository.RecipeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final RecipeRepository recipeRepository;
    private final EntityMapper entityMapper;

    public CategoryService(CategoryRepository categoryRepository,
                           RecipeRepository recipeRepository,
                           EntityMapper entityMapper) {
        this.categoryRepository = categoryRepository;
        this.recipeRepository = recipeRepository;
        this.entityMapper = entityMapper;
    }

    public List<CategoryDto> getActiveCategories(String locale) {
        return categoryRepository.findByActiveTrueOrderByCreatedAtAsc().stream()
                .map(category -> {
                    long count = recipeRepository.countByCategorySlugAndStatus(category.getSlug(), RecipeStatus.PUBLISHED);
                    return entityMapper.toCategoryDto(category, locale, count);
                })
                .collect(Collectors.toList());
    }

    public CategoryDto getCategoryBySlug(String slug, String locale) {
        Category category = categoryRepository.findBySlugAndActiveTrue(slug)
                .orElseThrow(() -> new ResourceNotFoundException("CATEGORY_NOT_FOUND", "Category not found: " + slug));
        long count = recipeRepository.countByCategorySlugAndStatus(category.getSlug(), RecipeStatus.PUBLISHED);
        return entityMapper.toCategoryDto(category, locale, count);
    }
}
