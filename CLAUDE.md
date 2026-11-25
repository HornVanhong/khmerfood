# CLAUDE.md — KhmerFood

You are a senior full-stack engineer working on KhmerFood. Read `AGENTS.md` and relevant files in `docs/` before implementation.

## Product
Build a production-quality bilingual Cambodian recipe website. Khmer is the default language; English is also supported. Tutorials use photos and written steps only.

## Stack
Next.js App Router, TypeScript, Tailwind CSS, Java, Spring Boot, Spring Data JPA, PostgreSQL, Flyway, Swagger/OpenAPI and Cloudinary.

## MVP
- Homepage with search, featured recipes and categories
- Recipe listing and pagination
- Search across Khmer and English names
- Category filtering
- Recipe detail with description, time, servings and difficulty
- Ingredient quantities and units
- Ordered cooking steps with images
- Khmer/English language switcher
- Responsive design and SEO

Do not add authentication, AI, videos, payments, comments or social features.

## Implementation rules
- Inspect the repository before editing.
- Follow `AGENTS.md`.
- Use Next.js Server Components by default.
- Use strict TypeScript and reusable components.
- Use Spring Controller → Service → Repository architecture.
- Use DTOs, validation and centralized exception handling.
- Never expose JPA entities.
- Use Flyway migrations and `ddl-auto: validate`.
- Return published recipes only from public endpoints.
- Search both locale translations.
- Store image URLs, not image binaries.
- Keep secrets in environment variables.
- Do not fabricate Khmer recipes or translations.

## API base
Development: `http://localhost:8080/api/v1`

Endpoints:
- `GET /categories`
- `GET /categories/{slug}`
- `GET /recipes`
- `GET /recipes/{slug}`
- `GET /recipes/featured`
- `GET /recipes/search?q=...`
- `GET /recipes/category/{slug}`

## Workflow
1. Inspect code and dependencies.
2. Present a plan before substantial changes.
3. Implement incrementally by feature.
4. Add tests.
5. Run frontend lint/type checks and backend tests.
6. Fix failures where possible.
7. Summarize changes and remaining work.

Never claim tests passed unless they were actually run and passed.
