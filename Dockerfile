FROM node:16-alpine

RUN npm i -g typescript ts-node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8070

CMD ["npm", "start"]