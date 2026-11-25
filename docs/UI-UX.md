# UI/UX Guidelines

## Design direction
A modern Cambodian food editorial experience: warm, welcoming, photography-led and easy to use while cooking.

## Color palette
| Token | Hex | Use |
|---|---|---|
| Forest green | `#244B36` | Primary actions and headings |
| Golden yellow | `#E9A94B` | Accent |
| Warm cream | `#FAF7F0` | Main background |
| White | `#FFFFFF` | Cards and surfaces |
| Charcoal | `#333333` | Body text |
| Soft green | `#DCE8DC` | Secondary surfaces |

## Typography
- Khmer: Noto Sans Khmer.
- English: Inter.
- Use comfortable line-height and avoid overly small Khmer text.
- Test line wrapping on narrow mobile screens.

## Main pages
### Homepage
Navbar, hero, search, featured recipes, popular categories, latest recipes and footer.

### Recipe listing
Page heading, search, category filters, recipe card grid and pagination.

### Recipe details
Breadcrumbs, main image, title, description, time, servings, difficulty, ingredients and numbered cooking steps with images.

### Category page
Category title, description, image and filtered recipe grid.

## Components
- `Navbar`
- `Footer`
- `LanguageSwitcher`
- `RecipeCard`
- `RecipeGrid`
- `RecipeSearch`
- `RecipeFilters`
- `RecipeHeader`
- `IngredientList`
- `CookingSteps`
- `CategoryCard`
- `Skeleton`
- `EmptyState`

## UX requirements
- Mobile-first responsive layout.
- Clear loading, error and empty states.
- Accessible buttons and keyboard navigation.
- Descriptive image alt text.
- Consistent image ratios and optimized image sizes.
- Preserve route when changing language.
- Keep cooking instructions readable and sequential.
- Avoid autoplay and distracting animation.
