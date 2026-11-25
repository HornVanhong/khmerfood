package com.khmerfood.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "recipe_ingredients",
       uniqueConstraints = @UniqueConstraint(name = "uq_recipe_ingredient", columnNames = {"recipe_id", "ingredient_id"}))
public class RecipeIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recipe_id", nullable = false)
    private Recipe recipe;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id", nullable = false)
    private Ingredient ingredient;

    @Column(precision = 10, scale = 2)
    private BigDecimal quantity;

    @Column(length = 50)
    private String unit;

    @Column(name = "display_order", nullable = false)
    private int displayOrder = 0;

    public RecipeIngredient() {}

    public RecipeIngredient(Recipe recipe, Ingredient ingredient, BigDecimal quantity, String unit, int displayOrder) {
        this.recipe = recipe;
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.unit = unit;
        this.displayOrder = displayOrder;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Recipe getRecipe() { return recipe; }
    public void setRecipe(Recipe recipe) { this.recipe = recipe; }

    public Ingredient getIngredient() { return ingredient; }
    public void setIngredient(Ingredient ingredient) { this.ingredient = ingredient; }

    public BigDecimal getQuantity() { return quantity; }
    public void setQuantity(BigDecimal quantity) { this.quantity = quantity; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public int getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(int displayOrder) { this.displayOrder = displayOrder; }
}
