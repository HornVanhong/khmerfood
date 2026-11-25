export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
  recipeCount: number;
}

export interface CategorySummary {
  slug: string;
  name: string;
}
