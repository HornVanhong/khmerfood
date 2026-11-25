import { CategorySummary } from './category';

export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface Ingredient {
  name: string;
  quantity?: number;
  unit?: string;
  imageUrl?: string;
}

export interface CookingStep {
  stepNumber: number;
  instruction: string;
  imageUrl?: string;
}

export interface RecipeSummary {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  category: CategorySummary;
  preparationMinutes: number;
  cookingMinutes: number;
  servings: number;
  difficulty: Difficulty;
  featured: boolean;
}

export interface RecipeDetail extends RecipeSummary {
  ingredients: Ingredient[];
  steps: CookingStep[];
}
