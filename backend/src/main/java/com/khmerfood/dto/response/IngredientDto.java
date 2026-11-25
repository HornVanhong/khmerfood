package com.khmerfood.dto.response;

import java.math.BigDecimal;

public class IngredientDto {
    private String name;
    private BigDecimal quantity;
    private String unit;
    private String imageUrl;

    public IngredientDto() {}

    public IngredientDto(String name, BigDecimal quantity, String unit, String imageUrl) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.imageUrl = imageUrl;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public BigDecimal getQuantity() { return quantity; }
    public void setQuantity(BigDecimal quantity) { this.quantity = quantity; }

    public String getUnit() { return unit; }
    public void setUnit(String unit) { this.unit = unit; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
