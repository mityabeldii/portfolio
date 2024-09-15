import { z } from 'zod';

export const env = z
    .object({
        MONOBANK_API_TOKEN: z.coerce.string(),
        TELEGRAM_BOT_TOKEN: z.coerce.string(),
        MONOBANK_ACCOUNT_ID: z.coerce.string(),
        TELEGRAM_USER_ID: z.coerce.number(),
    })
    .parse(Bun.env);
