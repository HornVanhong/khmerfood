# Software Requirements Specification (SRS)

## 1. System overview
KhmerFood consists of a Next.js web client, Spring Boot REST API, PostgreSQL database and external image hosting.

## 2. Functional requirements
- **FR-01 Homepage:** show navigation, hero/search, featured recipes, categories and latest recipes.
- **FR-02 Listing:** show published recipes in a paginated grid with category filters.
- **FR-03 Search:** support partial matching against Khmer and English recipe names.
- **FR-04 Details:** show title, description, main image, preparation/cooking time, servings, difficulty, ingredients and cooking steps.
- **FR-05 Localization:** support `km` and `en`; preserve route when switching languages.
- **FR-06 Categories:** show active categories and recipes belonging to a category.
- **FR-07 Accessibility:** semantic HTML, keyboard-accessible controls, useful alt text and readable contrast.
- **FR-08 SEO:** unique page metadata, sitemap and crawlable recipe pages.

## 3. Non-functional requirements
- Performance: optimize images, avoid unnecessary client JavaScript and paginate lists.
- Security: validate inputs, use environment variables, restrict CORS and use HTTPS in production.
- Reliability: provide loading, empty and error states.
- Maintainability: modular frontend, layered backend and documented APIs.
- Compatibility: current versions of Chrome, Firefox, Safari and Edge.
- Localization: use a Khmer-capable font and test text wrapping on small screens.

## 4. User journey
1. Visitor opens homepage.
2. Visitor searches or chooses a category.
3. Visitor opens a recipe.
4. Visitor reads ingredients and cooking time.
5. Visitor follows numbered instructions and step images.

## 5. Acceptance criteria
- Public pages require no login.
- Only published recipes are returned by public APIs.
- Search matches both locales.
- Recipe steps are returned in ascending order.
- Missing translations follow a documented fallback policy.
- Invalid query parameters return useful 4xx responses.
- Frontend and backend tests pass before release.
