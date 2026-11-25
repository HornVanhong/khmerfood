# Stage 1: Build JAR
FROM maven:3.9-eclipse-temurin-17-alpine AS builder
WORKDIR /workspace

# Copy POM and source code
COPY pom.xml ./
COPY src ./src

# Set low-memory footprint for Maven on t3.micro
ENV MAVEN_OPTS="-Xmx512m -XX:+UseSerialGC"
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
