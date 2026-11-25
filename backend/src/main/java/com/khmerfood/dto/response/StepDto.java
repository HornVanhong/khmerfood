package com.khmerfood.dto.response;

public class StepDto {
    private int stepNumber;
    private String instruction;
    private String imageUrl;

    public StepDto() {}

    public StepDto(int stepNumber, String instruction, String imageUrl) {
        this.stepNumber = stepNumber;
        this.instruction = instruction;
        this.imageUrl = imageUrl;
    }

    public int getStepNumber() { return stepNumber; }
    public void setStepNumber(int stepNumber) { this.stepNumber = stepNumber; }

    public String getInstruction() { return instruction; }
    public void setInstruction(String instruction) { this.instruction = instruction; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
