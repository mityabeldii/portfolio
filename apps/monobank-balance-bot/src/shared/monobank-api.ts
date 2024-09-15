import axios from 'axios';
import { createEffect, createEvent, sample } from 'effector';
import cron from 'node-cron';
import { env } from 'shared/env';
import { CurrencyRate } from 'types/currency-rate';
import { StatementItem, WebhookData } from 'types/statemenet';
import { currencySymbols, mccIconMap } from './utils';
import dayjs from 'dayjs';

const { MONOBANK_API_TOKEN, MONOBANK_ACCOUNT_ID } = env;

const api = axios.create({
    baseURL: 'https://api.monobank.ua',
    headers: {
        'X-Token': MONOBANK_API_TOKEN,
    },
});

const webhookReceived = createEvent<WebhookData>();

const getCurrenciesFx = createEffect(async () => api.get('/bank/currency').then((res) => res.data));

const setupWebhookFx = createEffect(async () => api.post('/personal/webhook', { webHookUrl: `https://api.monobank.beldii.dev/webhook` }).then((res) => res.data));

const getStatementsFx = createEffect(async ({ from, to }: { from: number; to: number }) => api.get(`/personal/statement/${MONOBANK_ACCOUNT_ID}/${from}/${to}`).then((res) => res.data));

const getClientInfoFx = createEffect(async () => api.get('/personal/client-info').then((res) => res.data));

const getCachedCurrencyFx = createEffect(async () => Bun.file('.cache/currency.json').json() as Promise<CurrencyRate[]>);

const setCachedCurrencyFx = createEffect(async (data: CurrencyRate[]) => Bun.write('.cache/currency.json', JSON.stringify(data)));

function statementTemplate(statement: StatementItem): string {
    const currencySymbol = currencySymbols[statement.currencyCode as keyof typeof currencySymbols];
    const emoji = mccIconMap[statement.mcc as keyof typeof mccIconMap];
    return `${emoji || ''}*${(statement.amount / 100).toFixed(2)}*\n${statement.description}\nBalance: ${(statement.balance / 100).toFixed(2)}${currencySymbol}\n`;
}

sample({
    clock: getCurrenciesFx.doneData,
    target: setCachedCurrencyFx,
});

getCachedCurrencyFx().catch(() => getCurrenciesFx());

cron.schedule('*/5 * * * *', () => getCurrenciesFx());

export const monobank = {
    webhookReceived,

    setupWebhookFx,
    getStatementsFx,
    getClientInfoFx,
    getCurrenciesFx,

    getCachedCurrencyFx,

    statementTemplate,
};

// getStatementsFx({ from: dayjs().subtract(7, 'day').unix(), to: dayjs().unix() }).then((statements) => Bun.write('.cache/statements.json', JSON.stringify(statements)));
