# AGENTS.md — KhmerFood

## Project
KhmerFood is a bilingual (Khmer/English) Cambodian cooking recipe website. Read this file before making changes.

## Stack
- Frontend: Next.js App Router, TypeScript, Tailwind CSS
- Backend: Java, Spring Boot, Spring Data JPA
- Database: PostgreSQL, Flyway
- API: REST/JSON, Swagger/OpenAPI
- Images: Cloudinary URLs

## Architecture
- Keep frontend and backend as separate applications.
- Backend follows Controller → Service → Repository.
- Use DTOs at API boundaries; never expose JPA entities.
- Keep business logic in services and database access in repositories.
- Use UUID primary keys and Flyway migrations.
- Public endpoints return published recipes only.

## Frontend rules
- TypeScript strict mode.
- Prefer Server Components; use Client Components only when needed.
- Use reusable, small components.
- Keep API calls in service modules.
- Use semantic and accessible HTML.
- Optimize images with `next/image`.
- Implement loading, error and empty states.
- Support responsive mobile, tablet and desktop layouts.

## Backend rules
- Validate all request parameters and DTOs.
- Use centralized exception handling.
- Use appropriate HTTP status codes.
- Paginate recipe listings; maximum page size 50.
- Document endpoints with Swagger.
- Configure CORS for known origins only.

## Database rules
- PostgreSQL with UUID keys and foreign keys.
- Use Flyway for every schema change.
- Never edit a migration that has already been applied.
- Add indexes for common filters and lookups.
- Store image URLs, not image binaries.
- Maintain referential integrity and unique locale constraints.

## Localization
- Supported locales: `km` and `en`.
- Khmer is the default locale.
- Recipe, category, ingredient and step text must support translations.
- Preserve the current route when switching locale.
- Use a documented fallback when a translation is missing.
- Do not invent culinary facts; have recipe content reviewed.

## Security
- Never commit secrets or credentials.
- Use environment variables.
- Validate and safely render content.
- Use HTTPS in production.
- Restrict CORS and database network access.

## MVP scope
Homepage, recipe listing, search, category filtering, recipe details, ingredients, image-based steps and Khmer/English localization.

Do not add accounts, AI, video, payments, comments or social features unless explicitly requested.

## Workflow
1. Inspect the repository and existing conventions.
2. Read relevant documentation.
3. State a concise implementation plan for non-trivial work.
4. Make focused changes; do not replace working code unnecessarily.
5. Add or update tests.
6. Run lint, type checks, compilation and relevant tests.
7. Report changed files, test results and known limitations honestly.
