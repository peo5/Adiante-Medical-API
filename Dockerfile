################################## Development

FROM node:16-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

################################## Production

FROM node:16-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
