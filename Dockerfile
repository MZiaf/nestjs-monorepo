FROM node:18.12.0-alpine

WORKDIR /usr/src/app/nestjs-monorepo

COPY ./package.json ./

COPY ./lerna.json ./

RUN yarn install
