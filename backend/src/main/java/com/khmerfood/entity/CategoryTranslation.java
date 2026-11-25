package com.khmerfood.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "category_translations",
       uniqueConstraints = @UniqueConstraint(name = "uq_category_locale", columnNames = {"category_id", "locale"}))
public class CategoryTranslation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, length = 5)
    private String locale;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    public CategoryTranslation() {}

    public CategoryTranslation(Category category, String locale, String name, String description) {
        this.category = category;
        this.locale = locale;
        this.name = name;
        this.description = description;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public Category getCategory() { return category; }
    public void setCategory(Category category) { this.category = category; }

    public String getLocale() { return locale; }
    public void setLocale(String locale) { this.locale = locale; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
