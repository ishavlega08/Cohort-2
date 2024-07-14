import { createClient } from "redis";

const client = createClient();

async function processSubmission(submission: string) {
    const { problemId, userId, code, language } = JSON.parse(submission);

    console.log(`Processing submission for problemId ${problemId} and userId ${userId}...`);
    console.log(`Code: ${code}`);
    console.log(`Language: ${language}`);
    // would add actual processing logic

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId} and userId ${userId}`);
}

async function startWorker() {
    try {
        await client.connect();
        console.log("Worker connected to Redis");

        // Main loop
        while(true) {
            try {
                const submission = await client.brPop("submissions", 0);
                // @ts-ignore
                await processSubmission(submission.element);
            } catch(err) {
                console.error("Error processing submission:", err);
            }
        }
    } catch(err) {
        console.error("Failed to connect to Redis", err);
    }
}

startWorker();