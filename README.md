## Setup from scratch

```bash
npm install --global yarn  #install yarn

yarn global add lerna #install yarn

npm i -global @nestjs/cli #install nest cli

mkdir nestjs-monorepro

cd nestjs-monorepo

lerna init #create a lerna project

npx create-react-app client # create a client app (FE)

mkdir apps #for BE services

cd apps #folder for BE services

nest new project-a

nest new project-b
```

update package.json at root with the following key

```bash
"workspaces": [
"apps/*",
"client"
],
"scripts": {
"clean": "lerna clean",
"bootstrap": "lerna bootstrap",
"build": "lerna run build"
}
```

Execute the following commands at root

```bash
yarn bootstrap
yarn build
```

Start each service using yarn start:

- project-a
- project-b
- client

## Setup the repo

```bash
git clone https://github.com/MZiaf/nestjs-monorepo.git
yarn bootstrap #install dependencies
yarn build
```

start each service

## Docker setup

Execute the following command in the root dir.

```bash
./compose start
  or
./compose start fresh #this will re-create the root image.
```

This will create an image with lerna configuration.
The rest of the services will use this image as a starting point.

## Structure

A single package-lock.json will be generated at root, each service will have its own package.json file.

- ./apps/project-a → sample BE service

- ./apps/project-b → sample BE service

- ./packages → will contain libraries in case any.

- ./client → contains the frontend code
