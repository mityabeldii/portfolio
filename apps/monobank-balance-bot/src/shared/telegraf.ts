import { createEffect, launch } from 'effector';
import { env } from 'shared/env';
import { Telegraf } from 'telegraf';

const { TELEGRAM_BOT_TOKEN, TELEGRAM_USER_ID } = env;

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

const sendMessageFx = createEffect(async (message: string) => bot.telegram.sendMessage(TELEGRAM_USER_ID, message, { parse_mode: 'Markdown' }));

export const tg = {
    sendMessageFx,

    launch: () => bot.launch(),
};
