# KhmerFood — Master AI Coding Implementation Prompt

You are a Senior Full-Stack Software Engineer. Build KhmerFood, a production-quality bilingual Cambodian cooking website.

## First action
Inspect the repository, read `AGENTS.md`, `CLAUDE.md` and the documentation in `docs/`. Report the existing project structure, detected stack, gaps and a phased implementation plan. Do not overwrite working code or start a large implementation before inspection.

## Product
KhmerFood helps local and international visitors discover Cambodian traditional dishes and learn to cook them through photographs, ingredients and written step-by-step instructions.

## Technology
- Frontend: Next.js App Router, TypeScript, Tailwind CSS
- Backend: Java, Spring Boot, Spring Data JPA
- Database: PostgreSQL, Flyway
- API docs: Swagger/OpenAPI
- Images: Cloudinary
- Deployment target: Vercel frontend and AWS-hosted backend/database

## Scope
Basic public website. Languages: Khmer (`km`) and English (`en`), with Khmer as default. Tutorials: images and text only.

Implement:
1. Homepage: navigation, hero, search, featured recipes, categories, latest recipes and footer.
2. Recipe listing: responsive grid, pagination and category filtering.
3. Search: partial matching against Khmer and English recipe names.
4. Recipe detail: main image, description, prep/cook time, servings, difficulty, ingredients and ordered cooking steps with images.
5. Localization: translated UI and content; language switch preserves current route.
6. SEO: metadata, canonical URLs where appropriate, sitemap and descriptive image alt text.
7. UX states: loading, error, empty and not-found states.

Explicitly exclude login/accounts, AI assistant, video, payments, comments, social features and ordering.

## Data model
Implement:
- Category
- Recipe
- RecipeTranslation
- Ingredient
- IngredientTranslation
- RecipeIngredient
- RecipeStep
- StepTranslation

Use UUID keys, foreign keys, unique `(entity_id, locale)` constraints, appropriate indexes, validation constraints and Flyway migrations. Use `ddl-auto: validate`. Do not edit migrations already applied.

## Backend
Use Controller → Service → Repository. Add DTOs, mapping, validation, centralized exception handling and Swagger documentation. Never expose JPA entities. Public endpoints must return published recipes only.

Base URL: `http://localhost:8080/api/v1`

Endpoints:
- `GET /categories`
- `GET /categories/{slug}`
- `GET /recipes?page=0&size=12&locale=km`
- `GET /recipes/{slug}?locale=en`
- `GET /recipes/featured?locale=km`
- `GET /recipes/search?q=amok&locale=en`
- `GET /recipes/category/{slug}?locale=km`

Enforce locale `km|en`, page >= 0, size 1–50 and bounded search input. Search both translations. Sort cooking steps by step number. Return consistent JSON success and error structures.

## Frontend
Use Next.js App Router and strict TypeScript. Prefer Server Components. Keep API access in service modules. Use reusable components for navigation, recipe cards, filters, ingredients, cooking steps and states. Use `next/image` with configured remote hosts. Support mobile, tablet and desktop.

Suggested routes:
- `/[locale]`
- `/[locale]/recipes`
- `/[locale]/recipes/[slug]`
- `/[locale]/categories/[slug]`
- `/[locale]/about`

## Visual design
Create a modern Cambodian food editorial style:
- Forest green `#244B36`
- Golden yellow `#E9A94B`
- Warm cream `#FAF7F0`
- White `#FFFFFF`
- Charcoal `#333333`
Use Noto Sans Khmer and Inter. Use authentic, high-quality food photography, generous spacing, consistent image ratios and readable recipe steps.

## Content
Seed 15–20 initial recipes only after content is reviewed. Candidate dishes: Fish Amok, Beef Lok Lak, Samlor Korko, Nom Banh Chok, Kuy Teav, Bai Sach Chrouk, Samlor Machu, Prahok Ktis, Cha Kroeung, Num Ansom and Num Krok. Do not invent exact quantities or claim one regional variation is universally authentic. Make it possible to review and correct translations.

## Phased execution
1. Inspect repository and plan.
2. Set up frontend/backend configuration.
3. Implement database migrations, entities and seed mechanism.
4. Implement repositories, services, DTOs and REST endpoints.
5. Build frontend design system and shared layout.
6. Build homepage, listing, categories, search and recipe detail.
7. Integrate API and localization.
8. Add tests, SEO, image optimization and deployment documentation.

## Quality gates
- Frontend: lint, TypeScript check, component tests and browser tests.
- Backend: compile, JUnit/Mockito tests and integration tests.
- Verify API pagination, validation, locale fallback and published-only behavior.
- Verify Khmer rendering on mobile.
- Never claim success if commands fail.
- Do not commit secrets.
- Document setup in README and provide `.env.example` files.

## Final deliverables
A working frontend and backend, complete Flyway schema, reviewed seed-data format, documented REST APIs, responsive bilingual UI, tests, README, environment examples and deployment instructions.

Start with repository inspection and the implementation plan. Work incrementally and report progress after each phase.
