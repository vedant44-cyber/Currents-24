# Use the official Node.js image with your version
FROM node:23.6.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your project files
COPY . .

# Expose the Vite dev server's default port
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]