import dayjs, { Dayjs } from 'dayjs';
import { createEvent, createStore, sample } from 'effector';
import { delay, interval } from 'patronum';

export const $time = createStore<Dayjs>(dayjs());

const start = createEvent<void>();

const { tick } = interval({ start: delay(start, (1000 - (Date.now() % 1000)) / 1000), timeout: Math.round(1000 / 30) });

sample({
    clock: tick.map(() => dayjs()),
    target: $time,
});

start();
