package com.khmerfood.controller;

import com.khmerfood.dto.response.CategoryDto;
import com.khmerfood.exception.ResourceNotFoundException;
import com.khmerfood.service.CategoryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CategoryController.class)
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CategoryService categoryService;

    @Test
    void testGetCategories_returns200() throws Exception {
        CategoryDto dto = new CategoryDto(UUID.randomUUID(), "soups-curries", "ម្ហូបសម្ល", "ការពិពណ៌នា", "img.jpg", 3);
        when(categoryService.getActiveCategories("km")).thenReturn(List.of(dto));

        mockMvc.perform(get("/api/v1/categories?locale=km")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data[0].slug").value("soups-curries"))
                .andExpect(jsonPath("$.data[0].name").value("ម្ហូបសម្ល"));
    }

    @Test
    void testGetCategoryBySlug_notFound_returns404() throws Exception {
        when(categoryService.getCategoryBySlug("unknown", "km"))
                .thenThrow(new ResourceNotFoundException("CATEGORY_NOT_FOUND", "Category not found: unknown"));

        mockMvc.perform(get("/api/v1/categories/unknown?locale=km")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.error.code").value("CATEGORY_NOT_FOUND"));
    }
}
