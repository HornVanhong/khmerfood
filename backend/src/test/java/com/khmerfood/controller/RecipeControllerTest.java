package com.khmerfood.controller;

import com.khmerfood.dto.response.*;
import com.khmerfood.exception.ResourceNotFoundException;
import com.khmerfood.service.RecipeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(RecipeController.class)
class RecipeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RecipeService recipeService;

    @Test
    void testGetRecipes_returns200() throws Exception {
        RecipeSummaryDto summary = new RecipeSummaryDto(
                UUID.randomUUID(), "fish-amok", "អាម៉ុកត្រី", "ការពិពណ៌នា", "img.jpg",
                new CategorySummaryDto("soups", "ម្ហូបសម្ល"), 20, 30, 4, "MEDIUM", true
        );
        ApiResponse<List<RecipeSummaryDto>> resp = ApiResponse.ok(List.of(summary), new PaginationDto(0, 12, 1, 1));
        when(recipeService.getRecipes(0, 12, "km")).thenReturn(resp);

        mockMvc.perform(get("/api/v1/recipes?page=0&size=12&locale=km")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data[0].slug").value("fish-amok"))
                .andExpect(jsonPath("$.pagination.totalElements").value(1));
    }

    @Test
    void testGetRecipeBySlug_found() throws Exception {
        RecipeDetailDto detail = new RecipeDetailDto(
                UUID.randomUUID(), "fish-amok", "Fish Amok", "Delicious", "img.jpg",
                new CategorySummaryDto("soups", "Soups"), 20, 30, 4, "MEDIUM", true,
                List.of(new IngredientDto("Fish", null, null, null)),
                List.of(new StepDto(1, "Clean fish", null))
        );
        when(recipeService.getRecipeBySlug("fish-amok", "en")).thenReturn(detail);

        mockMvc.perform(get("/api/v1/recipes/fish-amok?locale=en")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data.name").value("Fish Amok"))
                .andExpect(jsonPath("$.data.ingredients[0].name").value("Fish"));
    }

    @Test
    void testGetRecipeBySlug_notFound_returns404() throws Exception {
        when(recipeService.getRecipeBySlug("unknown", "km"))
                .thenThrow(new ResourceNotFoundException("RECIPE_NOT_FOUND", "Recipe not found: unknown"));

        mockMvc.perform(get("/api/v1/recipes/unknown?locale=km")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.error.code").value("RECIPE_NOT_FOUND"));
    }

    @Test
    void testGetFeatured_returns200() throws Exception {
        when(recipeService.getFeaturedRecipes("km")).thenReturn(List.of());

        mockMvc.perform(get("/api/v1/recipes/featured?locale=km")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true));
    }
}
