#!/bin/sh
npx prisma generate
npx prisma migrate dev
yarn start
