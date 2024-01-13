# First stage: build the app
FROM node:20 as build-stage
WORKDIR /dat3-FrontendExam
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Second stage: serve the app with nginx
FROM nginx:1.25
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the default nginx.conf to get the try-files to work with React Router
COPY ./dat3-FrontendExam/nginx.conf /etc/nginx/conf.d/default.conf