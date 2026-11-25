# Development Roadmap

Estimated schedule: four weeks for an initial MVP; adjust based on team size and content readiness.

## Week 1 — Foundation
- Create repository and project structure.
- Initialize Next.js and Spring Boot.
- Configure PostgreSQL and Flyway.
- Create entities and initial migrations.
- Implement repositories and basic API contracts.

## Week 2 — Backend and frontend foundations
- Implement services, DTOs, controllers and exception handling.
- Add Swagger/OpenAPI.
- Build shared frontend layout, navigation and footer.
- Build homepage, category cards and recipe cards.

## Week 3 — Core features
- Build recipe listing, pagination and category filtering.
- Implement bilingual search.
- Build recipe details, ingredients and image-based steps.
- Implement Khmer/English route handling.
- Integrate frontend with live API.

## Week 4 — Quality and release
- Review and load 15–20 authentic recipes.
- Test APIs and frontend journeys.
- Verify Khmer typography and mobile responsiveness.
- Optimize images, metadata and sitemap.
- Deploy frontend, backend and database.
- Configure HTTPS, backups and monitoring.

## Testing strategy
| Area | Tools |
|---|---|
| Frontend unit/component | Vitest, React Testing Library |
| Backend unit | JUnit 5, Mockito |
| Backend integration | Spring Boot Test, Testcontainers if available |
| API | Postman or REST Assured |
| Browser E2E | Playwright |
| Quality | ESLint, TypeScript, Checkstyle |

## Release checklist
- [ ] All public pages work without login.
- [ ] Draft recipes are not publicly visible.
- [ ] Khmer and English content is reviewed.
- [ ] Search and category filters work.
- [ ] Images have alt text and load efficiently.
- [ ] Mobile and desktop layouts are tested.
- [ ] Environment secrets are not committed.
- [ ] Database backups are configured.
- [ ] Production API uses HTTPS.
