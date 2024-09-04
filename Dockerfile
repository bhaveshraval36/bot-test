# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Add package.json to the container
ADD package.json /app/

# Set the working directory to /app
WORKDIR /app

# Install git and other dependencies
RUN apk add --no-cache git

# Install production dependencies
RUN npm install --production

# Add the rest of the application code to the container
ADD . /app

# Create a directory for log files
RUN mkdir -p /var/log/node_apps/

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
