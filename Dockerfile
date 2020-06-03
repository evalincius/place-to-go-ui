# stage 1

FROM node:alpine AS place-to-go-ui
WORKDIR /app
COPY . .
RUN npm install && npm run build

# stage 2

FROM nginx:alpine
COPY --from=place-to-go-ui /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=place-to-go-ui /app/dist/place-to-go-ui /usr/share/nginx/html
EXPOSE 80
