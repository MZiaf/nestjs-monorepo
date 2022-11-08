FROM node:18.12.0-alpine

WORKDIR /nestjs-monorepo

COPY ./package.json ./

COPY ./lerna.json ./

Run yarn install
