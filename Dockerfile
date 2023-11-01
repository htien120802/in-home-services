# Stage 1: Build the Spring Boot application
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app

# Copy the project files and build the application
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Create a minimal image to run the application
FROM adoptopenjdk:17-jre-hotspot
WORKDIR /app

# Copy the JAR file from the build stage into the final image
COPY --from=build /app/target/in-home-service-1.0.jar /app/in-home-service.jar

# Specify the command to run your application
CMD ["java", "-jar", "in-home-service.jar"]
