package com.khmerfood.dto.response;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class RecipeDetailDto {
    private UUID id;
    private String slug;
    private String name;
    private String description;
    private String imageUrl;
    private CategorySummaryDto category;
    private int preparationMinutes;
    private int cookingMinutes;
    private int servings;
    private String difficulty;
    private boolean featured;
    private List<IngredientDto> ingredients = new ArrayList<>();
    private List<StepDto> steps = new ArrayList<>();

    public RecipeDetailDto() {}

    public RecipeDetailDto(UUID id, String slug, String name, String description, String imageUrl,
                           CategorySummaryDto category, int preparationMinutes, int cookingMinutes,
                           int servings, String difficulty, boolean featured,
                           List<IngredientDto> ingredients, List<StepDto> steps) {
        this.id = id;
        this.slug = slug;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.category = category;
        this.preparationMinutes = preparationMinutes;
        this.cookingMinutes = cookingMinutes;
        this.servings = servings;
        this.difficulty = difficulty;
        this.featured = featured;
        this.ingredients = ingredients;
        this.steps = steps;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public CategorySummaryDto getCategory() { return category; }
    public void setCategory(CategorySummaryDto category) { this.category = category; }

    public int getPreparationMinutes() { return preparationMinutes; }
    public void setPreparationMinutes(int preparationMinutes) { this.preparationMinutes = preparationMinutes; }

    public int getCookingMinutes() { return cookingMinutes; }
    public void setCookingMinutes(int cookingMinutes) { this.cookingMinutes = cookingMinutes; }

    public int getServings() { return servings; }
    public void setServings(int servings) { this.servings = servings; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public List<IngredientDto> getIngredients() { return ingredients; }
    public void setIngredients(List<IngredientDto> ingredients) { this.ingredients = ingredients; }

    public List<StepDto> getSteps() { return steps; }
    public void setSteps(List<StepDto> steps) { this.steps = steps; }
}
