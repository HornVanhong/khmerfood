import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { fallbackCategories } from '@/services/categoryService';
import { fallbackRecipes } from '@/services/recipeService';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://khmerfood.com';
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Core pages
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });
    routes.push({
      url: `${baseUrl}/${locale}/recipes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });
    routes.push({
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });

    // Categories
    const categories = fallbackCategories[locale] || fallbackCategories.km;
    for (const cat of categories) {
      routes.push({
        url: `${baseUrl}/${locale}/categories/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }

    // Recipes
    const recipes = fallbackRecipes[locale] || fallbackRecipes.km;
    for (const recipe of recipes) {
      routes.push({
        url: `${baseUrl}/${locale}/recipes/${recipe.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  return routes;
}
