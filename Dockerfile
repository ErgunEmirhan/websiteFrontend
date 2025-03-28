# Step 1: Build the application

# Use a Node.js image to build the app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Build the project using Vite (this will generate the production build in /dist)
RUN npm run build

# Step 2: Serve the application

# Use a smaller image to serve the app
FROM nginx:alpine

# Copy the build folder from the previous stage to the Nginx HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
