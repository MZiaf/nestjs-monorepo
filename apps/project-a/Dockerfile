FROM lerna-root-image

WORKDIR /usr/src/app/nestjs-monorepo/apps/project-a

ADD . .

WORKDIR /usr/src/app/nestjs-monorepo

RUN yarn bootstrap

RUN yarn build

EXPOSE 3000

WORKDIR /usr/src/app/nestjs-monorepo/apps/project-a

RUN chmod +x /usr/src/app/nestjs-monorepo/apps/project-a/start.sh

ENTRYPOINT [ "/usr/src/app/nestjs-monorepo/apps/project-a/start.sh" ]