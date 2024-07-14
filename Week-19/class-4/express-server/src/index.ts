import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const client = createClient();
client.on("error", (err) => {
    console.log("Redis Client Error", err);
});

app.post("/submit", async (req, res) => {
    const { problemId, userId, code, language } = req.body;
    // push this to a db prisma.submission.create()

    try {
        await client.lPush("submissions", JSON.stringify({ problemId, userId, code, language }));
        // store in the db
        res.status(200).send("Submission received and stored");
    } catch(err) {
        console.error("Redis error:", err);
        res.status(500).send("Failed to store submission");
    }
})

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch(err) {
        console.error("Failed to connect to Redis", err);
    }
}

startServer();