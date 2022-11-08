# base image
FROM lerna-root-image

WORKDIR /nestjs-monorepo/apps/project-b

COPY . .

WORKDIR /nestjs-monorepo

RUN yarn bootstrap

RUN yarn build

EXPOSE 3001

WORKDIR /nestjs-monorepo/apps/project-b

CMD ["yarn", "start"]
