FROM node:alpine

WORKDIR /client/app

COPY package.json .

RUN yarn install

COPY . .
EXPOSE 5273
CMD [ "yarn", "dev" ]