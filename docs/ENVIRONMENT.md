# Environment Configuration

## Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
NEXT_PUBLIC_DEFAULT_LOCALE=km
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

Only expose variables prefixed with `NEXT_PUBLIC_` if they are safe for browsers to read. Never put secrets in public variables.

## Backend environment
```env
DB_URL=jdbc:postgresql://localhost:5432/khmerfood_db
DB_USERNAME=postgres
DB_PASSWORD=change_me
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## Example Spring configuration
```yaml
spring:
  datasource:
    url: ${DB_URL:jdbc:postgresql://localhost:5432/khmerfood_db}
    username: ${DB_USERNAME:postgres}
    password: ${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: validate
    open-in-view: false
  flyway:
    enabled: true

server:
  port: 8080
```

Use separate development and production credentials. Do not commit `.env` files or production secrets.
