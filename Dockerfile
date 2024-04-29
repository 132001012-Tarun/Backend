# Start by specifying the base image. Node.js 14 is a good current choice for compatibility.
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app1

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run your app using npm start script
CMD ["npm", "run", "start:dev"]
