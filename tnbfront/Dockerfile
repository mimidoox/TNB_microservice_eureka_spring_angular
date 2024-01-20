# Use an official Node.js image with the desired version
FROM node:20.5.1 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the Angular app
RUN ng build

# Use an official Nginx image as the base image for the production build
FROM nginx:latest

# Copy the built Angular app from the builder stage to the Nginx public directory
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
