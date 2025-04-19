import {Worker} from "bullmq"

const worker = new Worker("judge0", async job => {

        console.log(job.data);
        return job.data;
}, {
    connection : {
        host : "localhost",
        port : 6379
    }
})

worker.on('completed', job => {
    console.log("job completed");
});

worker.on('failed', (job, err) => {
    console.log("job failed", err);
});