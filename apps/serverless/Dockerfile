FROM lerna-root-image

RUN yarn global add serverless

WORKDIR /nestjs-monorepo/apps/serverless

COPY . .

WORKDIR /nestjs-monorepo

RUN yarn bootstrap

RUN yarn build

EXPOSE 4000

WORKDIR /nestjs-monorepo/apps/serverless

CMD ["serverless", "offline", "--host", "0.0.0.0" ]
