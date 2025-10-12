ARG NODE_VERSION=22.18.0
ARG EXPOSE_PORT=3000

FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${EXPOSE_PORT}
CMD ["npm", "run", "dev"]

