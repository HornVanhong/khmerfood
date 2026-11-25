package com.khmerfood.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "ingredient_translations",
       uniqueConstraints = @UniqueConstraint(name = "uq_ingredient_locale", columnNames = {"ingredient_id", "locale"}))
public class IngredientTranslation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id", nullable = false)
    private Ingredient ingredient;

    @Column(nullable = false, length = 5)
    private String locale;

    @Column(nullable = false, length = 200)
    private String name;

    public IngredientTranslation() {}

    public IngredientTranslation(Ingredient ingredient, String locale, String name) {
        this.ingredient = ingredient;
        this.locale = locale;
        this.name = name;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Ingredient getIngredient() { return ingredient; }
    public void setIngredient(Ingredient ingredient) { this.ingredient = ingredient; }

    public String getLocale() { return locale; }
    public void setLocale(String locale) { this.locale = locale; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
