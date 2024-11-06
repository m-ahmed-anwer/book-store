FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

WORKDIR /app/src

EXPOSE 8010

CMD ["npm", "start"]


