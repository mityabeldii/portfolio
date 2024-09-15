import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { monobank } from 'shared/monobank-api';

export const app = new Hono().basePath('/api');

app.use('*', cors())
    .on('GET', '/ping', (c) => c.json('pong from monobank-balance-bot'))
    .on('GET', '/webhook', (c) => c.json('pong from monobank-balance-bot'))
    .on('POST', '/webhook', async (c) => {
        const data = await c.req.json();
        monobank.webhookReceived(data);
        return c.json('pong from monobank-balance-bot');
    });
