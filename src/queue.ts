import { Queue } from 'bullmq';

export const myQueue = new Queue("judge0", {
    connection : {
        host : "localhost",
        port : 6379
    }
})
