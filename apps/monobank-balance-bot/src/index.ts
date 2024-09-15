import 'apps/main';
import { tg } from 'shared/telegraf';
import { app as honoApp } from './apps/hono-server';
import { monobank } from 'shared/monobank-api';

tg.launch();
await monobank.setupWebhookFx().catch(() => console.error('Failed to setup monobank webhook'));

const server: { port: number; fetch: typeof honoApp.fetch } = { port: 5001, fetch: honoApp.fetch };

export default server;
