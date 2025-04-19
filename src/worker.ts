import {Worker} from "bullmq"
import axios from "axios";
import dotenv from "dotenv"
dotenv.config();
const worker = new Worker("judge0", async job => {
    const {token, submissionId} = job.data
    try {
        const options = {
            method: 'GET',
            url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            params: {
                base64_encoded: 'true',
                fields: ''
            },
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
                'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
            }
        };
      //  console.log("getting submission")
        const response = await axios.request(options);
    //    console.log(response.data.status)
        const status = response.data.status.description
        const statusId = response.data.status.id
   //     console.log("updating nextjs")
        await axios.post(process.env.NEXT_SERVER_URL!, {
            token, submissionId, status, statusId
        })
   //     console.log("nextjs updated")
        return;
    } catch (e) {
        console.log(e);
    }

}, {
    connection : {
        host : "localhost",
        port : 6379
    }
})

worker.on('completed', job => {
    console.log("job completed", job.data);
});

worker.on('failed', (job, err) => {
    console.log("job failed", err);
});