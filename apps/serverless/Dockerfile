FROM lerna-root-image

RUN yarn global add serverless

WORKDIR /usr/src/app/nestjs-monorepo/apps/serverless

COPY . .

WORKDIR /usr/src/app/nestjs-monorepo

RUN yarn bootstrap

RUN yarn build

EXPOSE 4000

WORKDIR /usr/src/app/nestjs-monorepo/apps/serverless

CMD ["serverless", "offline", "--host", "0.0.0.0" ]
