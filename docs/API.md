# REST API Specification

## Base URL
Development: `http://localhost:8080/api/v1`

Content type: `application/json`. Locale can be supplied as `?locale=km` or `?locale=en` (or consistently via `Accept-Language`). Document and implement one canonical approach; this project uses the `locale` query parameter in examples.

## Public endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/categories` | List active categories |
| GET | `/categories/{slug}` | Get category and/or its recipes |
| GET | `/recipes` | Paginated published recipes |
| GET | `/recipes/{slug}` | Recipe detail |
| GET | `/recipes/featured` | Featured published recipes |
| GET | `/recipes/search?q={term}` | Search both language translations |
| GET | `/recipes/category/{slug}` | Recipes by category |

## Query parameters
- `locale`: `km` or `en`, default `km`.
- `page`: zero-based, default `0`.
- `size`: default `12`, maximum `50`.
- `q`: trimmed search term with a reasonable maximum length.

## Recipe list example
`GET /api/v1/recipes?page=0&size=12&locale=km`

```json
{
  "success": true,
  "data": [{
    "id": "a8c20c4e-5c80-4ca0-a13e-18a3d720f511",
    "slug": "fish-amok",
    "name": "អាម៉ុកត្រី",
    "description": "ម្ហូបប្រពៃណីខ្មែរ",
    "imageUrl": "https://example.com/fish-amok.jpg",
    "category": {"slug": "soups-curries", "name": "ម្ហូបសម្ល"},
    "preparationMinutes": 20,
    "cookingMinutes": 30,
    "servings": 4,
    "difficulty": "MEDIUM"
  }],
  "pagination": {"page": 0, "size": 12, "totalElements": 20, "totalPages": 2}
}
```

## Recipe detail example
`GET /api/v1/recipes/fish-amok?locale=en`

```json
{
  "success": true,
  "data": {
    "slug": "fish-amok",
    "name": "Fish Amok",
    "description": "A traditional Cambodian fish curry.",
    "imageUrl": "https://example.com/fish-amok.jpg",
    "preparationMinutes": 20,
    "cookingMinutes": 30,
    "servings": 4,
    "difficulty": "MEDIUM",
    "ingredients": [{
      "name": "Fish",
      "quantity": 500,
      "unit": "g",
      "imageUrl": "https://example.com/fish.jpg"
    }],
    "steps": [{
      "stepNumber": 1,
      "instruction": "Prepare and clean the fish.",
      "imageUrl": "https://example.com/step-1.jpg"
    }]
  }
}
```

## Error response
```json
{
  "success": false,
  "error": {
    "code": "RECIPE_NOT_FOUND",
    "message": "Recipe not found"
  }
}
```

## Status codes
- 200 success
- 400 invalid parameters
- 404 resource not found
- 500 unexpected server error
- 503 service unavailable

## API rules
- Public endpoints are read-only.
- Return published recipes only.
- Sort recipe steps by `stepNumber`.
- Search both Khmer and English translations.
- Validate locale and pagination.
- Never return persistence entities directly.
- Publish Swagger UI at `/swagger-ui/index.html`.
