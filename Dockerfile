FROM node:18-alpine

WORKDIR /usr/src/app
COPY src ./src
COPY package*.json tsconfig.json ./
RUN npm install
RUN npm run build
USER node

CMD ["npm", "run", "start:prod"]