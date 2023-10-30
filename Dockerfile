# Use the Node.js 18 image with Alpine Linux as the base image.
FROM node:18-alpine3.14

# Install TypeScript and ts-node globally using npm.
RUN npm i -g typescript ts-node

# Set the working directory for the subsequent commands to '/app'.
WORKDIR /app

# Copy all files from the current directory into the container's '/app' directory.
COPY . .

# Install the application's dependencies using npm.
RUN npm install

# Expose port 8070 to allow incoming network connections to the container.
EXPOSE 8070

# Define the command to run when the container starts using npm start.
CMD ["npm", "start"]
