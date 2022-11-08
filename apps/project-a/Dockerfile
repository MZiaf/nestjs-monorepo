FROM lerna-root-image

WORKDIR /nestjs-monorepo/apps/project-a

COPY . .

WORKDIR /nestjs-monorepo

RUN yarn bootstrap

RUN yarn build

EXPOSE 3000

WORKDIR /nestjs-monorepo/apps/project-a

RUN chmod +x ./start.sh

ENTRYPOINT [ "./start.sh" ]
