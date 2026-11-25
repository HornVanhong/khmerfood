package com.khmerfood.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "recipe_translations",
       uniqueConstraints = @UniqueConstraint(name = "uq_recipe_locale", columnNames = {"recipe_id", "locale"}))
public class RecipeTranslation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipe recipe;

    @Column(nullable = false, length = 5)
    private String locale;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    public RecipeTranslation() {}

    public RecipeTranslation(Recipe recipe, String locale, String name, String description) {
        this.recipe = recipe;
        this.locale = locale;
        this.name = name;
        this.description = description;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Recipe getRecipe() { return recipe; }
    public void setRecipe(Recipe recipe) { this.recipe = recipe; }

    public String getLocale() { return locale; }
    public void setLocale(String locale) { this.locale = locale; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
