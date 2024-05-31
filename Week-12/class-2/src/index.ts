interface User {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
};

// Pick
type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>

// Patial
type UpdatedPropsOptional = Partial<UpdatedProps>

function updateUser(updatedProps: UpdatedPropsOptional) {
    // hit the database to update the user
}

updateUser({
    name: "asb"
})

// Readonly
type User1 = {
    name: string;
    age: number;
    country: string;
}

const user: Readonly<User1> = {
    name: "ishav", 
    age: 21, 
    country: "India"
}

// user.name = "ajay"

// To create key value pairs in typescript we can use record and map 
type UsersAge = {
    [key: string]: number;
}

// Record
type Users = Record<string, {age: number; name: string}>;

const users: Users = {
    "ras@12": {age: 21, name: "ishav"},
    "rad12$": {age: 33, name: "raman"},
}

// Map
type Users2 = {
    name: string;
    age: number;
    email: string;
}

const users1 = new Map<string, Users2>()
users1.set("ras@qd1", {name: "Ras", age: 30, email: "ras@121"})
users1.set("sarah@qd1", {name: "Sarah", age: 25, email: "sarah@008"})

const user2 = users1.get("ras@qd1")
console.log(user2);

// Exclude
type EventType = 'scroll' | 'click' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'> // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
}

handleEvent('click');
// handleEvent('scroll');

// Type inference in Zod
import express from "express";
import { z } from "zod";

const app = express();

// Define the schema for the profile update
const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18, {message: "You must be atleast 18 years old"}).optional(),
});

// Type inference 
export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody ?

    if(!success) {
        res.status(411).json({});
        return;
    }

    // update database here
    res.json({
        message: "User updated"
    })
});

app.listen(3000);