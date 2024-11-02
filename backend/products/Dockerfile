FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

WORKDIR /app/src

EXPOSE 8002

CMD ["npm", "start"]


