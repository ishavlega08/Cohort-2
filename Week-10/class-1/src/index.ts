// write a function to create a users table in your database
import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgresDB_owner:oLuIy2J1ZmsC@ep-red-art-a50l4tqh.us-east-2.aws.neon.tech/postgresDB?sslmode=require",
})

async function createUsersTable() {
    await client.connect()

    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)

    console.log(result);
}

// createUsersTable();

// async function to insert data into a table 
async function insertData(username: string, email: string, password: string) {
    const client = new Client({
        host: 'ep-red-art-a50l4tqh.us-east-2.aws.neon.tech',
        port: 5432,
        database: 'postgresDB',
        user: 'postgresDB_owner', 
        password: 'oLuIy2J1ZmsC',
        ssl: {
            rejectUnauthorized: false // This ensures SSL is used
        }
    });

    try {
        await client.connect(); // Ensure client connection is established
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = [username, email, password];
        const res = await client.query(insertQuery, values);
        console.log("Insertion success: ", res); // Output insertion result
    } catch(err) {
        console.error("Error during the insertion: ", err);
    } finally {
        await client.end(); // Close the client connection
    }
}

// insertData("username1", "user1@example.com", "user1_password").catch(console.error);

// aysnc function to fetch user data from the database
async function getUser(email: string) {
    const client = new Client({
        host: 'ep-red-art-a50l4tqh.us-east-2.aws.neon.tech',
        port: 5432,
        database: 'postgresDB',
        user: 'postgresDB_owner', 
        password: 'oLuIy2J1ZmsC',
        ssl: {
            rejectUnauthorized: false // This ensures SSL is used
        }
    });

    try {
        await client.connect(); 
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = await client.query(query, values);

        if(result.rows.length > 0) {
            console.log("User Found: ", result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log("No user found with this given email.");
            return null; // Return null if no user was found
        }
    } catch(err) {
        console.error("Error during fetching user: ", err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end();
    }
}

getUser("user1@example.com").catch(console.error);