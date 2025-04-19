import express from "express"
import cors from "cors"
import {addJobs} from "./producer"
const app = express();

app.use(express.json());
app.use(cors());

app.post("/judge0/submit", async  (req, res) => {
    const {token, submissionId} = req.body;
    console.log("submit")
    try {
        await addJobs(token,submissionId)
        res.status(200).json({message : "job added"});
        return;
    } catch (e) {
        console.log(e);
        res.status(500);
        return;
    }
})

app.listen(5000, () => {
    console.log("server running on 5000.")
})