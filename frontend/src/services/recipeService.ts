import { RecipeSummary, RecipeDetail } from '@/types/recipe';
import { ApiResponse, Locale, Pagination } from '@/types/api';
import { fetchApi } from './api';

export const fallbackRecipes: Record<Locale, RecipeDetail[]> = {
  km: [
    {
      id: 'r0000000-0000-0000-0000-000000000001',
      slug: 'fish-amok',
      name: 'អាម៉ុកត្រី',
      description: 'ម្ហូបតំណាងជាតិខ្មែរ ធ្វើពីត្រីទឹកសាបស្រស់ លាយជាមួយគ្រឿងបុកស្លឹកគ្រៃ និងខ្ទិះដូង ចំហុយក្នុងកន្ទោងស្លឹកចេក។',
      imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'soups-curries', name: 'ម្ហូបសម្ល' },
      preparationMinutes: 25,
      cookingMinutes: 30,
      servings: 4,
      difficulty: 'MEDIUM',
      featured: true,
      ingredients: [
        { name: 'សាច់ត្រីរ៉ស់ ឬត្រីដំរី', quantity: 500, unit: 'g', imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80' },
        { name: 'គ្រឿងបុកខ្មែរ (ស្លឹកគ្រៃ រមៀត រំដេង ខ្ទឹមស)', quantity: 3, unit: 'tbsp', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
        { name: 'ខ្ទិះដូងដើម និងចុង', quantity: 400, unit: 'ml', imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80' },
        { name: 'ស្ករត្នោតធម្មជាតិ', quantity: 1.5, unit: 'tbsp', imageUrl: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'លាងសម្អាតសាច់ត្រីរ៉ស់ឲ្យស្អាត រួចកាត់ជាបន្ទះស្តើងល្មម។', imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80' },
        { stepNumber: 2, instruction: 'ច្របល់គ្រឿងស្លឹកគ្រៃបុក ខ្ទិះដូង ពងទា និងស្ករត្នោតឲ្យចូលគ្នាសព្វ រួចដាក់សាច់ត្រីចូល។', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80' },
        { stepNumber: 3, instruction: 'ដួសដាក់ក្នុងកន្ទោងស្លឹកចេក រួចយកទៅចំហុយរយៈពេល ២០ ទៅ ៣០ នាទីរហូតដល់ឆ្អិនខាប់។', imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000002',
      slug: 'beef-lok-lak',
      name: 'ឡុកឡាក់សាច់គោ',
      description: 'សាច់គោឆាក្តៅៗរសជាតិដិត ញ៉ាំជាមួយសាឡាត់ ប៉េងប៉ោះ ខ្ទឹមបារាំង និងទឹកជ្រលក់អំបិលម្រេចក្រូចឆ្មា។',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'stir-fried', name: 'ម្ហូបឆា' },
      preparationMinutes: 20,
      cookingMinutes: 15,
      servings: 3,
      difficulty: 'EASY',
      featured: true,
      ingredients: [
        { name: 'សាច់គោផាត់ផុយ', quantity: 400, unit: 'g', imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80' },
        { name: 'ម្រេចកំពតខ្មៅ', quantity: 1, unit: 'tbsp', imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80' },
        { name: 'ស្ករត្នោតធម្មជាតិ', quantity: 1, unit: 'tsp', imageUrl: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'កាត់សាច់គោជាដុំតូចៗ រួចប្រឡាក់ជាមួយប្រេងខ្យង ទឹកស៊ីអ៊ីវ ខ្ទឹមស និងស្ករត្នោត ២០ នាទី។', imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80' },
        { stepNumber: 2, instruction: 'ដាក់ខ្ទះឲ្យក្តៅខ្លាំង រួចឆាសាច់គោឲ្យឆ្អិនស្រួយក្រៅ លើកដាក់លើចានដែលមានបន្លែ និងទឹកម្រេចក្រូចឆ្មា។', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000003',
      slug: 'samlor-korko',
      name: 'សម្លកកូរ',
      description: 'សម្លប្រពៃណីខ្មែរបុរាណសម្បូរដោយបន្លែចម្រុះជាច្រើនមុខ អង្ករលីង និងត្រីរ៉ស់ស្រស់។',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'soups-curries', name: 'ម្ហូបសម្ល' },
      preparationMinutes: 30,
      cookingMinutes: 40,
      servings: 5,
      difficulty: 'HARD',
      featured: true,
      ingredients: [
        { name: 'សាច់ត្រីរ៉ស់ ឬត្រីដំរី', quantity: 400, unit: 'g' },
        { name: 'អង្ករលីងបុកម៉ដ្ឋ', quantity: 3, unit: 'tbsp' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'លីងអង្ករឲ្យឡើងពណ៌លឿងក្រអូប រួចបុកឲ្យម៉ដ្ឋល្អ។' },
        { stepNumber: 2, instruction: 'រម្ងាស់ត្រី និងបន្លែចម្រុះ រួចដាក់អង្ករលីងចូលឲ្យខាប់ក្រអូប។' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000004',
      slug: 'nom-banh-chok',
      name: 'នំបញ្ចុកទឹកសម្លប្រហើរ',
      description: 'នំបញ្ចុកស្រស់ស្រូបជាមួយទឹកសម្លប្រហើរត្រីរ៉ស់បុកជាមួយគ្រឿងស្លឹកគ្រៃ និងបន្លែស្រស់ៗ។',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'noodles', name: 'មី និងគុយទាវ' },
      preparationMinutes: 40,
      cookingMinutes: 35,
      servings: 4,
      difficulty: 'HARD',
      featured: true,
      ingredients: [
        { name: 'សរសៃគុយទាវ ឬនំបញ្ចុក', quantity: 500, unit: 'g' },
        { name: 'សាច់ត្រីរ៉ស់ ឬត្រីដំរី', quantity: 300, unit: 'g' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'ស្ងោរត្រីរ៉ស់ឲ្យឆ្អិន បេះយកតែសាច់ រួចបុកជាមួយគ្រឿងស្លឹកគ្រៃ។' },
        { stepNumber: 2, instruction: 'ដាំទឹកស៊ុបជាមួយខ្ទិះដូង និងសាច់ត្រីបុក រៀបនំបញ្ចុកដាក់ចានស្រូបទឹកសម្ល។' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000005',
      slug: 'kuy-teav-phnom-penh',
      name: 'គុយទាវភ្នំពេញ',
      description: 'ស៊ុបគុយទាវរសជាតិផ្អែមជាប់មាត់ពីឆ្អឹងជ្រូករម្ងាស់យូរ ជាមួយប្រហិត សាច់ជ្រូក និងបង្គាស្រស់។',
      imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'noodles', name: 'មី និងគុយទាវ' },
      preparationMinutes: 30,
      cookingMinutes: 120,
      servings: 4,
      difficulty: 'MEDIUM',
      featured: true,
      ingredients: [
        { name: 'សរសៃគុយទាវ ឬនំបញ្ចុក', quantity: 500, unit: 'g' },
        { name: 'សាច់ជ្រូកបីជាន់', quantity: 300, unit: 'g' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'រម្ងាស់ឆ្អឹងជ្រូក មឹកក្រៀម និងខ្ទឹមបារាំង ២ ម៉ោងឲ្យផ្អែមទឹកស៊ុប។' },
        { stepNumber: 2, instruction: 'ស្រុសគុយទាវ ដាក់សាច់ និងស្រូបទឹកស៊ុបក្តៅៗ។' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000006',
      slug: 'bai-sach-chrouk',
      name: 'បាយសាច់ជ្រូក',
      description: 'បាយពេលព្រឹកបែបខ្មែរ សាច់ជ្រូកប្រឡាក់ខ្ទិះដូងអាំងឈ្ងុយលើធ្យូង ញ៉ាំជាមួយជ្រក់ត្រសក់។',
      imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'rice-dishes', name: 'ម្ហូបបាយ' },
      preparationMinutes: 25,
      cookingMinutes: 20,
      servings: 2,
      difficulty: 'EASY',
      featured: true,
      ingredients: [
        { name: 'សាច់ជ្រូកបីជាន់', quantity: 350, unit: 'g' },
        { name: 'អង្ករផ្កាម្លិះខ្មែរ', quantity: 300, unit: 'g' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'ប្រឡាក់សាច់ជ្រូកជាមួយខ្ទិះដូង ខ្ទឹមស និងស្ករត្នោត។' },
        { stepNumber: 2, instruction: 'អាំងលើរងើកភ្លើងធ្យូងឲ្យក្រហមឈ្ងុយ ដួសបាយដាក់ចានជាមួយជ្រក់។' },
      ],
    },
  ],
  en: [
    {
      id: 'r0000000-0000-0000-0000-000000000001',
      slug: 'fish-amok',
      name: 'Fish Amok',
      description: 'Cambodias signature culinary masterpiece: silky steamed freshwater fish curry infused with yellow kroeung, coconut cream, and kaffir lime, cradled in banana leaves.',
      imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'soups-curries', name: 'Soups & Curries' },
      preparationMinutes: 25,
      cookingMinutes: 30,
      servings: 4,
      difficulty: 'MEDIUM',
      featured: true,
      ingredients: [
        { name: 'Freshwater fish fillet', quantity: 500, unit: 'g', imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80' },
        { name: 'Yellow Kroeung paste', quantity: 3, unit: 'tbsp', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
        { name: 'Coconut milk', quantity: 400, unit: 'ml', imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80' },
        { name: 'Palm sugar', quantity: 1.5, unit: 'tbsp', imageUrl: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'Clean and slice the freshwater fish into bite-sized bite pieces.', imageUrl: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80' },
        { stepNumber: 2, instruction: 'Whisk the yellow kroeung paste with thick coconut milk, egg, and palm sugar until velvety, then gently fold in the fish.', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80' },
        { stepNumber: 3, instruction: 'Spoon into banana leaf cups and steam for 25 minutes until set. Top with coconut cream and kaffir lime ribbons.', imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000002',
      slug: 'beef-lok-lak',
      name: 'Beef Lok Lak',
      description: 'Caramelized stir-fried beef cubes served over crisp lettuce, cucumber, and fresh tomatoes, paired with a zesty lime and Kampot black pepper dip.',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'stir-fried', name: 'Stir-Fried Dishes' },
      preparationMinutes: 20,
      cookingMinutes: 15,
      servings: 3,
      difficulty: 'EASY',
      featured: true,
      ingredients: [
        { name: 'Beef tenderloin', quantity: 400, unit: 'g', imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80' },
        { name: 'Kampot black pepper', quantity: 1, unit: 'tbsp', imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80' },
        { name: 'Palm sugar', quantity: 1, unit: 'tsp', imageUrl: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=400&q=80' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'Dice beef and marinate with garlic, soy sauce, oyster sauce, and palm sugar for 20 minutes.', imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80' },
        { stepNumber: 2, instruction: 'Sear over high heat for 2-3 minutes. Serve with fresh lettuce, tomatoes, and lime-pepper dip.', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000003',
      slug: 'samlor-korko',
      name: 'Samlor Korko',
      description: 'Cambodias hearty royal vegetable stew cooked with roasted pounded rice, aromatic herbs, local river fish, and garden greens.',
      imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'soups-curries', name: 'Soups & Curries' },
      preparationMinutes: 30,
      cookingMinutes: 40,
      servings: 5,
      difficulty: 'HARD',
      featured: true,
      ingredients: [
        { name: 'River fish fillet', quantity: 400, unit: 'g' },
        { name: 'Pounded roasted rice', quantity: 3, unit: 'tbsp' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'Toast raw jasmine rice until deeply golden, then pound into a fine fragrant powder.' },
        { stepNumber: 2, instruction: 'Simmer fresh fish, vegetables, and aromatic kroeung with the roasted rice powder until rich.' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000004',
      slug: 'nom-banh-chok',
      name: 'Nom Banh Chok',
      description: 'Iconic Khmer breakfast noodles bathed in a fragrant, golden river-fish and lemongrass broth, garnished with edible flowers and water celery.',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'noodles', name: 'Noodles' },
      preparationMinutes: 40,
      cookingMinutes: 35,
      servings: 4,
      difficulty: 'HARD',
      featured: true,
      ingredients: [
        { name: 'Fresh rice noodles', quantity: 500, unit: 'g' },
        { name: 'River fish fillet', quantity: 300, unit: 'g' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'Poach river fish and pound with yellow lemongrass paste and fermented fish paste.' },
        { stepNumber: 2, instruction: 'Simmer with rich coconut milk into a golden fragrant broth, ladle over noodles with fresh herbs.' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000005',
      slug: 'kuy-teav-phnom-penh',
      name: 'Phnom Penh Noodle Soup (Kuy Teav)',
      description: 'A comforting, slow-simmered pork bone and dried seafood broth poured over delicate rice noodles, tender slices of pork, minced pork, and fresh herbs.',
      imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'noodles', name: 'Noodles' },
      preparationMinutes: 30,
      cookingMinutes: 120,
      servings: 4,
      difficulty: 'MEDIUM',
      featured: true,
      ingredients: [
        { name: 'Fresh rice noodles', quantity: 500, unit: 'g' },
        { name: 'Sliced pork & minced pork', quantity: 300, unit: 'g' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'Simmer pork bones, dried squid, and daikon radish for 2 hours until naturally sweet.' },
        { stepNumber: 2, instruction: 'Blanch rice noodles, arrange toppings, and pour scalding aromatic broth.' },
      ],
    },
    {
      id: 'r0000000-0000-0000-0000-000000000006',
      slug: 'bai-sach-chrouk',
      name: 'Bai Sach Chrouk',
      description: 'Beloved morning staple: tender pork marinated in coconut milk and garlic, slowly char-grilled and served over steamed jasmine rice with quick-pickled cucumbers.',
      imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80',
      category: { slug: 'rice-dishes', name: 'Rice Dishes' },
      preparationMinutes: 25,
      cookingMinutes: 20,
      servings: 2,
      difficulty: 'EASY',
      featured: true,
      ingredients: [
        { name: 'Sliced pork shoulder', quantity: 350, unit: 'g' },
        { name: 'Steamed jasmine rice', quantity: 300, unit: 'g' },
      ],
      steps: [
        { stepNumber: 1, instruction: 'Marinate thin pork slices in coconut milk, garlic, soy sauce, and palm sugar.' },
        { stepNumber: 2, instruction: 'Grill slowly over hot charcoal until caramelized and tender. Serve over hot jasmine rice.' },
      ],
    },
  ],
};

export async function getRecipes(
  page: number = 0,
  size: number = 12,
  locale: Locale = 'km'
): Promise<{ recipes: RecipeSummary[]; pagination: Pagination }> {
  const res = await fetchApi<RecipeSummary[]>(`/recipes?page=${page}&size=${size}&locale=${locale}`);
  if (res.success && res.data && res.data.length > 0) {
    return {
      recipes: res.data,
      pagination: res.pagination || { page, size, totalElements: res.data.length, totalPages: 1 },
    };
  }
  const all = fallbackRecipes[locale] || fallbackRecipes.km;
  const start = page * size;
  const paginated = all.slice(start, start + size);
  return {
    recipes: paginated,
    pagination: {
      page,
      size,
      totalElements: all.length,
      totalPages: Math.ceil(all.length / size),
    },
  };
}

export async function getFeaturedRecipes(locale: Locale = 'km'): Promise<RecipeSummary[]> {
  const res = await fetchApi<RecipeSummary[]>(`/recipes/featured?locale=${locale}`);
  if (res.success && res.data && res.data.length > 0) {
    return res.data;
  }
  const all = fallbackRecipes[locale] || fallbackRecipes.km;
  return all.filter((r) => r.featured);
}

export async function getRecipeBySlug(slug: string, locale: Locale = 'km'): Promise<RecipeDetail | null> {
  const res = await fetchApi<RecipeDetail>(`/recipes/${slug}?locale=${locale}`);
  if (res.success && res.data) {
    return res.data;
  }
  const all = fallbackRecipes[locale] || fallbackRecipes.km;
  return all.find((r) => r.slug === slug) || null;
}

export async function getRecipesByCategory(
  slug: string,
  page: number = 0,
  size: number = 12,
  locale: Locale = 'km'
): Promise<{ recipes: RecipeSummary[]; pagination: Pagination }> {
  const res = await fetchApi<RecipeSummary[]>(`/recipes/category/${slug}?page=${page}&size=${size}&locale=${locale}`);
  if (res.success && res.data && res.data.length > 0) {
    return {
      recipes: res.data,
      pagination: res.pagination || { page, size, totalElements: res.data.length, totalPages: 1 },
    };
  }
  const all = fallbackRecipes[locale] || fallbackRecipes.km;
  const filtered = all.filter((r) => r.category.slug === slug);
  const start = page * size;
  return {
    recipes: filtered.slice(start, start + size),
    pagination: {
      page,
      size,
      totalElements: filtered.length,
      totalPages: Math.max(1, Math.ceil(filtered.length / size)),
    },
  };
}

export async function searchRecipes(
  query: string,
  page: number = 0,
  size: number = 12,
  locale: Locale = 'km'
): Promise<{ recipes: RecipeSummary[]; pagination: Pagination }> {
  if (!query.trim()) {
    return getRecipes(page, size, locale);
  }
  const res = await fetchApi<RecipeSummary[]>(`/recipes/search?q=${encodeURIComponent(query)}&page=${page}&size=${size}&locale=${locale}`);
  if (res.success && res.data) {
    return {
      recipes: res.data,
      pagination: res.pagination || { page, size, totalElements: res.data.length, totalPages: 1 },
    };
  }
  const all = fallbackRecipes[locale] || fallbackRecipes.km;
  const q = query.toLowerCase();
  const matched = all.filter((r) => r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q));
  const start = page * size;
  return {
    recipes: matched.slice(start, start + size),
    pagination: {
      page,
      size,
      totalElements: matched.length,
      totalPages: Math.max(1, Math.ceil(matched.length / size)),
    },
  };
}
