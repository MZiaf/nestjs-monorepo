# base image
FROM lerna-root-image

WORKDIR /usr/src/app/nestjs-monorepo/apps/project-b

COPY . .

WORKDIR /usr/src/app/nestjs-monorepo

RUN yarn bootstrap

RUN yarn build

EXPOSE 3001

WORKDIR /usr/src/app/nestjs-monorepo/apps/project-b

CMD ["yarn", "start"]
