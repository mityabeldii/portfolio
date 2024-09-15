import { z } from 'zod';

export const StatementItemZod = z.object({
    id: z.string(),
    time: z.number(),
    description: z.string(),
    mcc: z.number(),
    originalMcc: z.number(),
    amount: z.number(),
    operationAmount: z.number(),
    currencyCode: z.number(),
    commissionRate: z.number(),
    cashbackAmount: z.number(),
    balance: z.number(),
    hold: z.boolean(),
    receiptId: z.string(),
});

export type StatementItem = z.infer<typeof StatementItemZod>;

export const WebhookDataZod = z.object({
    type: z.string(),
    data: z.object({
        account: z.string(),
        statementItem: StatementItemZod,
    }),
});

export type WebhookData = z.infer<typeof WebhookDataZod>;
