FROM node:14.5.0-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 33356

CMD ["yarn", "dev"]