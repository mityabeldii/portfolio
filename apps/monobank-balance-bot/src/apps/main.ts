import { sample } from 'effector';
import { env } from 'shared/env';
import { monobank } from 'shared/monobank-api';
import { tg } from 'shared/telegraf';

const { MONOBANK_ACCOUNT_ID } = env;

sample({
    clock: monobank.webhookReceived,
    filter: (webhookResponse) => webhookResponse.data.account === MONOBANK_ACCOUNT_ID,
    fn: (webhookResponse) => monobank.statementTemplate(webhookResponse.data.statementItem),
    target: tg.sendMessageFx,
});

monobank.webhookReceived.watch(console.log);
