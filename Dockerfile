FROM node:gallium-alpine AS build

ENV PORT=8080
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build:client
RUN yarn build:server

FROM nginx:alpine AS prod

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf
ENV PORT=8080
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'