import {myQueue} from "./queue"

export async function addJobs(token : string, submissionId : string) {
    const payload ={token, submissionId}
    await myQueue.add("judge", payload);
    console.log("job added");
}