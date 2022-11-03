## Structure

A single package-lock.json will be generated at root, each service will have its own package.json file.

* ./apps/project-a → sample BE service

* ./apps/project-b → sample BE service

* ./packages → will contain libraries in case any.

* ./client → contains the frontend code


## Installation

Install yarn

```bash
npm install --global yarn
```

Install lerna


```bash
yarn install --global lerna
```

## Setup

The following command will install all the dependencies and build the serivces.
```
lerna bootstrap
lerna run build
```

Start each service using yarn start:

* project-a
* project-b
* client
