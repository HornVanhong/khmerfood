# KhmerFood

**Discover Cambodian Cuisine. Learn to Cook Khmer Food.**

KhmerFood is a bilingual (Khmer + English) recipe website that introduces Cambodian cuisine and teaches visitors how to prepare traditional dishes through photos and written instructions.

## MVP Scope
- Homepage with featured and latest recipes
- Recipe listing, search across Khmer and English names, and category filtering
- Recipe detail pages with preparation/cooking time, difficulty, and servings
- Ingredients with quantities and units
- Ordered cooking steps with step-by-step images
- Khmer and English localization (preserves current route on locale switch)
- Responsive mobile-first design and SEO (OpenGraph, sitemap, semantic HTML)

*Out of scope for MVP: accounts, AI assistant, video tutorials, payments, comments, social features and mobile apps.*

## Technology Stack
- **Frontend**: Next.js 14 App Router, TypeScript (strict mode), Tailwind CSS, Lucide icons
- **Backend**: Java 17, Spring Boot 3.4, Spring Data JPA, Jakarta Validation
- **Database**: PostgreSQL with UUID keys, Flyway migrations (`V1__init_schema.sql`, `V2__seed_data.sql`)
- **API Documentation**: OpenAPI 3 / Swagger (`/swagger-ui.html`, `/v3/api-docs`)
- **Images**: Remote image URLs (Cloudinary / Unsplash)

## Repository Layout
```text
KhmerFood/
├── frontend/
│   ├── src/app/             # Next.js App Router (bilingual [locale] routes)
│   ├── src/components/      # Reusable components (layout, recipe, category, ui)
│   ├── src/i18n/            # Khmer and English dictionaries
│   ├── src/services/        # API client modules with graceful fallback
│   ├── src/types/           # TypeScript interfaces & types
│   └── package.json
├── backend/
│   ├── src/main/java/com/khmerfood/
│   │   ├── config/          # CORS & Swagger OpenAPI config
│   │   ├── controller/      # REST API Controllers (Recipes, Categories)
│   │   ├── dto/             # Response DTOs & ApiResponse envelope
│   │   ├── entity/          # JPA Domain Entities & Enums
│   │   ├── exception/       # Centralized Exception Handler (@RestControllerAdvice)
│   │   ├── mapper/          # Entity to DTO mapping with locale fallback
│   │   ├── repository/      # Spring Data JPA Repositories
│   │   └── service/         # Business logic layer
│   ├── src/main/resources/
│   │   ├── db/migration/    # Flyway migrations (V1 schema, V2 16 authentic dishes)
│   │   └── application.yml
│   └── pom.xml
├── docs/                    # Specifications, architecture, database, API & PRD
├── AGENTS.md                # Development guidelines & rules
├── CLAUDE.md                # Agent instructions & standards
└── README.md
```

## REST API Endpoints
Base URL: `http://localhost:8080/api/v1`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/categories?locale=km` | List all active categories |
| `GET` | `/api/v1/categories/{slug}?locale=km` | Get category details by slug |
| `GET` | `/api/v1/recipes?page=0&size=12&locale=km` | Paginated published recipes |
| `GET` | `/api/v1/recipes/{slug}?locale=km` | Full recipe details (ingredients & steps) |
| `GET` | `/api/v1/recipes/featured?locale=km` | Featured published recipes |
| `GET` | `/api/v1/recipes/search?q={query}&locale=km` | Search both Khmer and English recipe names |
| `GET` | `/api/v1/recipes/category/{slug}?locale=km` | Recipes filtered by category |

## Local Development Setup

### 1. Backend (Spring Boot)
1. Ensure Java 17+ is installed.
2. Configure PostgreSQL database `khmerfood_db` (or copy `backend/.env.example` to `backend/.env`):
   ```bash
   export DB_URL=jdbc:postgresql://localhost:5432/khmerfood_db
   export DB_USERNAME=postgres
   export DB_PASSWORD=postgres
   ```
3. Run backend tests:
   ```bash
   cd backend
   ./mvnw test
   ```
4. Start Spring Boot application on port 8080:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
5. Access Swagger documentation at `http://localhost:8080/swagger-ui.html`.

### 2. Frontend (Next.js)
1. Ensure Node.js 18+ and npm are installed.
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Run type check and lint:
   ```bash
   npm run type-check
   npm run lint
   ```
4. Build production bundle:
   ```bash
   npm run build
   ```
5. Start development server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000` in your browser (redirects automatically to `/km`).

### 3. Local Multi-Container Run (Docker Compose)
To run the full stack locally with PostgreSQL, Spring Boot, and Next.js in containers:
```bash
docker compose up --build
```
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080/api/v1`
- PostgreSQL: `localhost:5432`

## AWS Production Deployment
Complete step-by-step instructions for deploying to AWS are documented in [docs/AWS-DEPLOYMENT-GUIDE.md](docs/AWS-DEPLOYMENT-GUIDE.md):
- **Database**: Amazon RDS PostgreSQL (`db.t4g.micro` / Free tier)
- **Backend**: AWS App Runner or AWS Elastic Beanstalk (Corretto 17)
- **Frontend**: AWS Amplify Hosting (Next.js 14 App Router SSR with CloudFront CDN)
