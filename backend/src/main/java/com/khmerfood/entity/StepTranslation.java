package com.khmerfood.entity;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "step_translations",
       uniqueConstraints = @UniqueConstraint(name = "uq_step_locale", columnNames = {"step_id", "locale"}))
public class StepTranslation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "step_id", nullable = false)
    private RecipeStep step;

    @Column(nullable = false, length = 5)
    private String locale;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String instruction;

    public StepTranslation() {}

    public StepTranslation(RecipeStep step, String locale, String instruction) {
        this.step = step;
        this.locale = locale;
        this.instruction = instruction;
    }

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public RecipeStep getStep() { return step; }
    public void setStep(RecipeStep step) { this.step = step; }

    public String getLocale() { return locale; }
    public void setLocale(String locale) { this.locale = locale; }

    public String getInstruction() { return instruction; }
    public void setInstruction(String instruction) { this.instruction = instruction; }
}
