FROM node:18-alpine AS build
WORKDIR /app   
#This will create a working dir in the container as /app

COPY package*.json ./   
# This will copy all the source:package.json file content into dest: /app/
RUN npm install 
# This will install all the dependencies mentioned in package.json file 

COPY . .
# This will copy all the source:current dir file content into dest:/app/
RUN npm run build:docker
# This will run the build command mentioned in package.json file and create a file /docs
# To check what dir would be created run npm run build in your terminal before writing dockerfile

# Stage 2 - the production environment
FROM nginx:1.29.1
COPY --from=build /app/dist /usr/share/nginx/html
# This will copy all the source:app/docs file content into dest:/usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# This will start in the foreground and keep the container running
# If you don't do this the container will start and stop immediately


