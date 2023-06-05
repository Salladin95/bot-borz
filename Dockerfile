FROM denoland/deno:latest

WORKDIR /usr/src/app

COPY . .

RUN deno task build

EXPOSE ${APP_PORT}

CMD ["deno", "task", "start"]