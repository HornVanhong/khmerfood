package com.khmerfood.mapper;

import com.khmerfood.dto.response.CategoryDto;
import com.khmerfood.dto.response.RecipeDetailDto;
import com.khmerfood.dto.response.RecipeSummaryDto;
import com.khmerfood.entity.*;
import com.khmerfood.entity.enums.Difficulty;
import com.khmerfood.entity.enums.RecipeStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class EntityMapperTest {

    private EntityMapper mapper;

    @BeforeEach
    void setUp() {
        mapper = new EntityMapper();
    }

    @Test
    void testResolveLocale() {
        assertEquals("km", mapper.resolveLocale(null));
        assertEquals("km", mapper.resolveLocale(""));
        assertEquals("km", mapper.resolveLocale("km"));
        assertEquals("en", mapper.resolveLocale("en"));
        assertEquals("en", mapper.resolveLocale("en-US"));
        assertEquals("km", mapper.resolveLocale("fr"));
    }

    @Test
    void testToCategoryDto_withTranslations() {
        Category category = new Category(UUID.randomUUID(), "soups-curries", "https://example.com/img.jpg", true);
        category.getTranslations().add(new CategoryTranslation(category, "km", "ម្ហូបសម្ល", "ការពិពណ៌នា"));
        category.getTranslations().add(new CategoryTranslation(category, "en", "Soups & Curries", "Soup desc"));

        CategoryDto dtoKm = mapper.toCategoryDto(category, "km", 5);
        assertEquals("ម្ហូបសម្ល", dtoKm.getName());
        assertEquals("ការពិពណ៌នា", dtoKm.getDescription());
        assertEquals(5, dtoKm.getRecipeCount());

        CategoryDto dtoEn = mapper.toCategoryDto(category, "en", 5);
        assertEquals("Soups & Curries", dtoEn.getName());
        assertEquals("Soup desc", dtoEn.getDescription());
    }

    @Test
    void testToRecipeDetailDto_withIngredientsAndSteps() {
        Category category = new Category(UUID.randomUUID(), "soups-curries", "img.jpg", true);
        category.getTranslations().add(new CategoryTranslation(category, "km", "ម្ហូបសម្ល", ""));

        Recipe recipe = new Recipe();
        recipe.setId(UUID.randomUUID());
        recipe.setSlug("fish-amok");
        recipe.setCategory(category);
        recipe.setPreparationMinutes(20);
        recipe.setCookingMinutes(30);
        recipe.setServings(4);
        recipe.setDifficulty(Difficulty.MEDIUM);
        recipe.setStatus(RecipeStatus.PUBLISHED);
        recipe.setFeatured(true);

        recipe.getTranslations().add(new RecipeTranslation(recipe, "km", "អាម៉ុកត្រី", "ការពិពណ៌នាអាម៉ុក"));
        recipe.getTranslations().add(new RecipeTranslation(recipe, "en", "Fish Amok", "Delicious fish amok"));

        Ingredient ingredient = new Ingredient(UUID.randomUUID(), "fish.jpg");
        ingredient.getTranslations().add(new IngredientTranslation(ingredient, "km", "ត្រីរ៉ស់"));
        ingredient.getTranslations().add(new IngredientTranslation(ingredient, "en", "Snakehead fish"));

        RecipeIngredient ri = new RecipeIngredient(recipe, ingredient, new BigDecimal("500"), "g", 1);
        recipe.getRecipeIngredients().add(ri);

        RecipeStep step = new RecipeStep(recipe, 1, "step1.jpg");
        step.getTranslations().add(new StepTranslation(step, "km", "លាងត្រី"));
        step.getTranslations().add(new StepTranslation(step, "en", "Clean fish"));
        recipe.getSteps().add(step);

        RecipeDetailDto detailKm = mapper.toRecipeDetailDto(recipe, "km");
        assertEquals("អាម៉ុកត្រី", detailKm.getName());
        assertEquals(1, detailKm.getIngredients().size());
        assertEquals("ត្រីរ៉ស់", detailKm.getIngredients().get(0).getName());
        assertEquals(1, detailKm.getSteps().size());
        assertEquals("លាងត្រី", detailKm.getSteps().get(0).getInstruction());

        RecipeDetailDto detailEn = mapper.toRecipeDetailDto(recipe, "en");
        assertEquals("Fish Amok", detailEn.getName());
        assertEquals("Snakehead fish", detailEn.getIngredients().get(0).getName());
        assertEquals("Clean fish", detailEn.getSteps().get(0).getInstruction());
    }
}
