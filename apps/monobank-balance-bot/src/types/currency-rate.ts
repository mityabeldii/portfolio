import { z } from 'zod';

const CurrencyRateZod = z
    .object({
        currencyCodeA: z.number(),
        currencyCodeB: z.number(),
        date: z.number(),
        rateSell: z.number(),
        rateBuy: z.number(),
        rateCross: z.number(),
    })
    .strict();

export type CurrencyRate = z.infer<typeof CurrencyRateZod>;
