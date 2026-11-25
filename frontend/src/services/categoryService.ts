import { Category } from '@/types/category';
import { ApiResponse, Locale } from '@/types/api';
import { fetchApi } from './api';

export const fallbackCategories: Record<Locale, Category[]> = {
  km: [
    {
      id: 'c0000000-0000-0000-0000-000000000001',
      slug: 'soups-curries',
      name: 'ម្ហូបសម្ល',
      description: 'សម្លប្រពៃណីខ្មែរ រួមមានសម្លកកូរ អាម៉ុក និងការីខ្មែរ',
      imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
      recipeCount: 5,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000002',
      slug: 'stir-fried',
      name: 'ម្ហូបឆា',
      description: 'ម្ហូបឆាក្តៅៗជាមួយគ្រឿងទេសខ្មែរ និងបន្លែស្រស់',
      imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000003',
      slug: 'grilled',
      name: 'ម្ហូបអាំង',
      description: 'ម្ហូបអាំងឈ្ងុយឆ្ងាញ់ជាមួយទឹកជ្រលក់កោះកុង',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000004',
      slug: 'rice-dishes',
      name: 'ម្ហូបបាយ',
      description: 'បាយផ្កាម្លិះ និងម្ហូបបាយប្រពៃណីខ្មែរ',
      imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000005',
      slug: 'noodles',
      name: 'មី និងគុយទាវ',
      description: 'គុយទាវភ្នំពេញ នំបញ្ចុក និងមីស៊ុប',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000006',
      slug: 'desserts',
      name: 'បង្អែម',
      description: 'បង្អែមខ្មែរឈ្ងុយខ្ទិះដូង ស្ករត្នោត និងផ្លែឈើស្រស់',
      imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      recipeCount: 3,
    },
  ],
  en: [
    {
      id: 'c0000000-0000-0000-0000-000000000001',
      slug: 'soups-curries',
      name: 'Soups & Curries',
      description: 'Traditional Cambodian soups, curries and steamed aromatics like Fish Amok',
      imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
      recipeCount: 5,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000002',
      slug: 'stir-fried',
      name: 'Stir-Fried Dishes',
      description: 'Fragrant stir-fries seasoned with Kampot pepper and lemongrass paste',
      imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000003',
      slug: 'grilled',
      name: 'Grilled Dishes',
      description: 'Savory grilled meats and seafood served with authentic dipping sauces',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000004',
      slug: 'rice-dishes',
      name: 'Rice Dishes',
      description: 'Fragrant jasmine rice specialties and breakfast favorites',
      imageUrl: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000005',
      slug: 'noodles',
      name: 'Noodles',
      description: 'Classic noodle soups including Kuy Teav and freshly pressed Nom Banh Chok',
      imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
      recipeCount: 2,
    },
    {
      id: 'c0000000-0000-0000-0000-000000000006',
      slug: 'desserts',
      name: 'Desserts',
      description: 'Sweet Khmer treats crafted with palm sugar, coconut cream, and ripe fruit',
      imageUrl: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      recipeCount: 3,
    },
  ],
};

export async function getCategories(locale: Locale = 'km'): Promise<Category[]> {
  const res = await fetchApi<Category[]>(`/categories?locale=${locale}`);
  if (res.success && res.data && res.data.length > 0) {
    return res.data;
  }
  return fallbackCategories[locale] || fallbackCategories.km;
}

export async function getCategoryBySlug(slug: string, locale: Locale = 'km'): Promise<Category | null> {
  const res = await fetchApi<Category>(`/categories/${slug}?locale=${locale}`);
  if (res.success && res.data) {
    return res.data;
  }
  const list = fallbackCategories[locale] || fallbackCategories.km;
  return list.find((c) => c.slug === slug) || null;
}
