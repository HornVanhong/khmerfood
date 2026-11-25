# Stage 1: Build JAR
FROM maven:3.9-eclipse-temurin-17-alpine AS builder
WORKDIR /workspace

# Copy POM and pre-fetch dependencies
COPY pom.xml ./
RUN mvn dependency:go-offline -B || true

# Copy source code and build
COPY src ./src
RUN mvn clean package -DskipTests -B

# Stage 2: Production Runtime
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Run as non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser:appgroup

# Copy compiled JAR from builder
COPY --from=builder /workspace/target/*.jar app.jar

ENV PORT=8080
ENV SPRING_PROFILES_ACTIVE=prod
EXPOSE 8080

ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
