package com.khmerfood.dto.response;

import java.util.UUID;

public class CategoryDto {
    private UUID id;
    private String slug;
    private String name;
    private String description;
    private String imageUrl;
    private long recipeCount;

    public CategoryDto() {}

    public CategoryDto(UUID id, String slug, String name, String description, String imageUrl, long recipeCount) {
        this.id = id;
        this.slug = slug;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.recipeCount = recipeCount;
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

    public long getRecipeCount() { return recipeCount; }
    public void setRecipeCount(long recipeCount) { this.recipeCount = recipeCount; }
}
