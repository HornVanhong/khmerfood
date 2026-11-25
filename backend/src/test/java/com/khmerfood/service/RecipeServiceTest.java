package com.khmerfood.service;

import com.khmerfood.dto.response.ApiResponse;
import com.khmerfood.dto.response.RecipeDetailDto;
import com.khmerfood.dto.response.RecipeSummaryDto;
import com.khmerfood.entity.Category;
import com.khmerfood.entity.Recipe;
import com.khmerfood.entity.enums.Difficulty;
import com.khmerfood.entity.enums.RecipeStatus;
import com.khmerfood.exception.BadRequestException;
import com.khmerfood.exception.ResourceNotFoundException;
import com.khmerfood.mapper.EntityMapper;
import com.khmerfood.repository.RecipeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RecipeServiceTest {

    @Mock
    private RecipeRepository recipeRepository;

    private EntityMapper entityMapper;
    private RecipeService recipeService;

    @BeforeEach
    void setUp() {
        entityMapper = new EntityMapper();
        recipeService = new RecipeService(recipeRepository, entityMapper);
    }

    private Recipe createSampleRecipe(String slug, boolean featured) {
        Recipe recipe = new Recipe();
        recipe.setId(UUID.randomUUID());
        recipe.setSlug(slug);
        recipe.setCategory(new Category(UUID.randomUUID(), "soups", "img.jpg", true));
        recipe.setStatus(RecipeStatus.PUBLISHED);
        recipe.setFeatured(featured);
        recipe.setDifficulty(Difficulty.EASY);
        return recipe;
    }

    @Test
    void testGetRecipes_success() {
        Recipe r = createSampleRecipe("fish-amok", true);
        Page<Recipe> page = new PageImpl<>(List.of(r));
        when(recipeRepository.findByStatus(eq(RecipeStatus.PUBLISHED), any(Pageable.class)))
                .thenReturn(page);

        ApiResponse<List<RecipeSummaryDto>> response = recipeService.getRecipes(0, 12, "km");
        assertTrue(response.isSuccess());
        assertEquals(1, response.getData().size());
        assertEquals("fish-amok", response.getData().get(0).getSlug());
    }

    @Test
    void testGetRecipes_invalidPage_throwsBadRequest() {
        assertThrows(BadRequestException.class, () -> recipeService.getRecipes(-1, 10, "km"));
    }

    @Test
    void testGetRecipes_invalidSize_throwsBadRequest() {
        assertThrows(BadRequestException.class, () -> recipeService.getRecipes(0, 0, "km"));
        assertThrows(BadRequestException.class, () -> recipeService.getRecipes(0, 51, "km"));
    }

    @Test
    void testGetRecipeBySlug_found() {
        Recipe r = createSampleRecipe("fish-amok", true);
        when(recipeRepository.findBySlugAndStatus("fish-amok", RecipeStatus.PUBLISHED))
                .thenReturn(Optional.of(r));

        RecipeDetailDto detail = recipeService.getRecipeBySlug("fish-amok", "en");
        assertNotNull(detail);
        assertEquals("fish-amok", detail.getSlug());
    }

    @Test
    void testGetRecipeBySlug_notFound_throwsResourceNotFound() {
        when(recipeRepository.findBySlugAndStatus("non-existent", RecipeStatus.PUBLISHED))
                .thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> recipeService.getRecipeBySlug("non-existent", "km"));
    }

    @Test
    void testSearchRecipes_blankQuery_throwsBadRequest() {
        assertThrows(BadRequestException.class, () -> recipeService.searchRecipes("  ", 0, 10, "km"));
    }

    @Test
    void testSearchRecipes_validQuery() {
        Recipe r = createSampleRecipe("beef-lok-lak", false);
        Page<Recipe> page = new PageImpl<>(List.of(r));
        when(recipeRepository.searchRecipes(eq("lok lak"), eq(RecipeStatus.PUBLISHED), any(Pageable.class)))
                .thenReturn(page);

        ApiResponse<List<RecipeSummaryDto>> response = recipeService.searchRecipes("lok lak", 0, 10, "en");
        assertTrue(response.isSuccess());
        assertEquals(1, response.getData().size());
    }
}
