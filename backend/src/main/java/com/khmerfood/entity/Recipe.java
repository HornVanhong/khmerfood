package com.khmerfood.entity;

import com.khmerfood.entity.enums.Difficulty;
import com.khmerfood.entity.enums.RecipeStatus;
import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "recipes")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, unique = true, length = 150)
    private String slug;

    @Column(name = "main_image_url")
    private String mainImageUrl;

    @Column(name = "preparation_minutes", nullable = false)
    private int preparationMinutes = 0;

    @Column(name = "cooking_minutes", nullable = false)
    private int cookingMinutes = 0;

    @Column(nullable = false)
    private int servings = 1;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Difficulty difficulty = Difficulty.EASY;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private RecipeStatus status = RecipeStatus.DRAFT;

    @Column(name = "is_featured", nullable = false)
    private boolean featured = false;

    @Column(name = "created_at", nullable = false, updatable = false)
    private OffsetDateTime createdAt = OffsetDateTime.now();

    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt = OffsetDateTime.now();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RecipeTranslation> translations = new ArrayList<>();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("displayOrder ASC")
    private List<RecipeIngredient> recipeIngredients = new ArrayList<>();

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("stepNumber ASC")
    private List<RecipeStep> steps = new ArrayList<>();

    public Recipe() {}

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = OffsetDateTime.now();
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getMainImageUrl() { return mainImageUrl; }
    public void setMainImageUrl(String mainImageUrl) { this.mainImageUrl = mainImageUrl; }

    public int getPreparationMinutes() { return preparationMinutes; }
    public void setPreparationMinutes(int preparationMinutes) { this.preparationMinutes = preparationMinutes; }

    public int getCookingMinutes() { return cookingMinutes; }
    public void setCookingMinutes(int cookingMinutes) { this.cookingMinutes = cookingMinutes; }

    public int getServings() { return servings; }
    public void setServings(int servings) { this.servings = servings; }

    public Difficulty getDifficulty() { return difficulty; }
    public void setDifficulty(Difficulty difficulty) { this.difficulty = difficulty; }

    public RecipeStatus getStatus() { return status; }
    public void setStatus(RecipeStatus status) { this.status = status; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public OffsetDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(OffsetDateTime createdAt) { this.createdAt = createdAt; }

    public OffsetDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(OffsetDateTime updatedAt) { this.updatedAt = updatedAt; }

    public List<RecipeTranslation> getTranslations() { return translations; }
    public void setTranslations(List<RecipeTranslation> translations) { this.translations = translations; }

    public List<RecipeIngredient> getRecipeIngredients() { return recipeIngredients; }
    public void setRecipeIngredients(List<RecipeIngredient> recipeIngredients) { this.recipeIngredients = recipeIngredients; }

    public List<RecipeStep> getSteps() { return steps; }
    public void setSteps(List<RecipeStep> steps) { this.steps = steps; }
}
