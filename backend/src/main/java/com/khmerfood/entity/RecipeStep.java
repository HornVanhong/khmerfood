package com.khmerfood.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "recipe_steps",
       uniqueConstraints = @UniqueConstraint(name = "uq_recipe_step_number", columnNames = {"recipe_id", "step_number"}))
public class RecipeStep {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipe recipe;

    @Column(name = "step_number", nullable = false)
    private int stepNumber;

    @Column(name = "image_url")
    private String imageUrl;

    @OneToMany(mappedBy = "step", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StepTranslation> translations = new ArrayList<>();

    public RecipeStep() {}

    public RecipeStep(Recipe recipe, int stepNumber, String imageUrl) {
        this.recipe = recipe;
        this.stepNumber = stepNumber;
        this.imageUrl = imageUrl;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Recipe getRecipe() { return recipe; }
    public void setRecipe(Recipe recipe) { this.recipe = recipe; }

    public int getStepNumber() { return stepNumber; }
    public void setStepNumber(int stepNumber) { this.stepNumber = stepNumber; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public List<StepTranslation> getTranslations() { return translations; }
    public void setTranslations(List<StepTranslation> translations) { this.translations = translations; }
}
