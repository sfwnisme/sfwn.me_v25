FROM node:22.18.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
EXPOSE 3000
CMD npm run dev