# Use the official Node.js image as the base image
FROM node:18
# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

RUN npm run build

# Expose the port that Next.js is running on (usually 3000 by default)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
