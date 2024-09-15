FROM oven/bun:latest
WORKDIR /app

COPY bundle.js .

EXPOSE 5001/tcp
ENTRYPOINT [ "bun", "run", "bundle.js" ]