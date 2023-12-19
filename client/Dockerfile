# Use a Node.js base image to build the React application
FROM node:17-alpine as build
# Set the working directory
WORKDIR /usr/src/app

# Copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the React application
RUN npm run build

# Use Nginx to serve the React application
FROM nginx:alpine

# Copy the build folder from the build stage to the Nginx folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]
