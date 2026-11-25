package com.khmerfood.mapper;

import com.khmerfood.dto.response.*;
import com.khmerfood.entity.*;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class EntityMapper {

    public static final String DEFAULT_LOCALE = "km";
    public static final String FALLBACK_LOCALE = "en";

    public String resolveLocale(String requestedLocale) {
        if (requestedLocale == null || requestedLocale.isBlank()) {
            return DEFAULT_LOCALE;
        }
        String clean = requestedLocale.trim().toLowerCase();
        return clean.startsWith("en") ? "en" : DEFAULT_LOCALE;
    }

    public CategoryDto toCategoryDto(Category category, String locale, long recipeCount) {
        String loc = resolveLocale(locale);
        String name = category.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(CategoryTranslation::getName)
                .orElseGet(() -> category.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(CategoryTranslation::getName)
                        .orElse(category.getSlug()));

        String description = category.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(CategoryTranslation::getDescription)
                .orElseGet(() -> category.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(CategoryTranslation::getDescription)
                        .orElse(""));

        return new CategoryDto(
                category.getId(),
                category.getSlug(),
                name,
                description,
                category.getImageUrl(),
                recipeCount
        );
    }

    public CategorySummaryDto toCategorySummaryDto(Category category, String locale) {
        String loc = resolveLocale(locale);
        String name = category.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(CategoryTranslation::getName)
                .orElseGet(() -> category.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(CategoryTranslation::getName)
                        .orElse(category.getSlug()));

        return new CategorySummaryDto(category.getSlug(), name);
    }

    public RecipeSummaryDto toRecipeSummaryDto(Recipe recipe, String locale) {
        String loc = resolveLocale(locale);
        String name = recipe.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(RecipeTranslation::getName)
                .orElseGet(() -> recipe.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(RecipeTranslation::getName)
                        .orElse(recipe.getSlug()));

        String description = recipe.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(RecipeTranslation::getDescription)
                .orElseGet(() -> recipe.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(RecipeTranslation::getDescription)
                        .orElse(""));

        CategorySummaryDto categorySummary = recipe.getCategory() != null
                ? toCategorySummaryDto(recipe.getCategory(), locale)
                : null;

        return new RecipeSummaryDto(
                recipe.getId(),
                recipe.getSlug(),
                name,
                description,
                recipe.getMainImageUrl(),
                categorySummary,
                recipe.getPreparationMinutes(),
                recipe.getCookingMinutes(),
                recipe.getServings(),
                recipe.getDifficulty() != null ? recipe.getDifficulty().name() : "EASY",
                recipe.isFeatured()
        );
    }

    public RecipeDetailDto toRecipeDetailDto(Recipe recipe, String locale) {
        String loc = resolveLocale(locale);
        String name = recipe.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(RecipeTranslation::getName)
                .orElseGet(() -> recipe.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(RecipeTranslation::getName)
                        .orElse(recipe.getSlug()));

        String description = recipe.getTranslations().stream()
                .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                .findFirst()
                .map(RecipeTranslation::getDescription)
                .orElseGet(() -> recipe.getTranslations().stream()
                        .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                        .findFirst()
                        .map(RecipeTranslation::getDescription)
                        .orElse(""));

        CategorySummaryDto categorySummary = recipe.getCategory() != null
                ? toCategorySummaryDto(recipe.getCategory(), locale)
                : null;

        List<IngredientDto> ingredientDtos = recipe.getRecipeIngredients().stream()
                .sorted(Comparator.comparingInt(RecipeIngredient::getDisplayOrder))
                .map(ri -> {
                    Ingredient ing = ri.getIngredient();
                    String ingName = ing.getTranslations().stream()
                            .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                            .findFirst()
                            .map(IngredientTranslation::getName)
                            .orElseGet(() -> ing.getTranslations().stream()
                                    .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                                    .findFirst()
                                    .map(IngredientTranslation::getName)
                                    .orElse(""));
                    return new IngredientDto(ingName, ri.getQuantity(), ri.getUnit(), ing.getImageUrl());
                })
                .collect(Collectors.toList());

        List<StepDto> stepDtos = recipe.getSteps().stream()
                .sorted(Comparator.comparingInt(RecipeStep::getStepNumber))
                .map(step -> {
                    String instruction = step.getTranslations().stream()
                            .filter(t -> t.getLocale().equalsIgnoreCase(loc))
                            .findFirst()
                            .map(StepTranslation::getInstruction)
                            .orElseGet(() -> step.getTranslations().stream()
                                    .filter(t -> t.getLocale().equalsIgnoreCase(DEFAULT_LOCALE))
                                    .findFirst()
                                    .map(StepTranslation::getInstruction)
                                    .orElse(""));
                    return new StepDto(step.getStepNumber(), instruction, step.getImageUrl());
                })
                .collect(Collectors.toList());

        return new RecipeDetailDto(
                recipe.getId(),
                recipe.getSlug(),
                name,
                description,
                recipe.getMainImageUrl(),
                categorySummary,
                recipe.getPreparationMinutes(),
                recipe.getCookingMinutes(),
                recipe.getServings(),
                recipe.getDifficulty() != null ? recipe.getDifficulty().name() : "EASY",
                recipe.isFeatured(),
                ingredientDtos,
                stepDtos
        );
    }
}
