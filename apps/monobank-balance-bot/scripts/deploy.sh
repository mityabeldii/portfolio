bun run build

cp Dockerfile docker-compose.yaml .env dist
tar -czvf dist.tar.gz dist
scp dist.tar.gz root@beldii.dev:~/monobank-balance-bot.tar.gz
ssh beldii.dev "
    tar -xzvf monobank-balance-bot.tar.gz
    docker-compose -f dist/docker-compose.yaml build
    if [ -d monobank-balance-bot/docker-compose.yaml ]; then
        docker-compose -f monobank-balance-bot/docker-compose.yaml down
    fi
    rm -rf monobank-balance-bot monobank-balance-bot.tar.gz
    mv dist monobank-balance-bot
    docker-compose -f monobank-balance-bot/docker-compose.yaml build
    docker-compose -f monobank-balance-bot/docker-compose.yaml up -d
    docker image prune -f
    docker container prune -f
    docker system prune -f
"
rm -rf dist dist.tar.gz