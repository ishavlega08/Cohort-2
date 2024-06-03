import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string, email: string) {
    const user = await prisma.user.create({
        data: {
            username, 
            password,
            firstName,
            lastName,
            email 
        }
    })
    console.log(user);
}

async function createTodo(userId: number, title: string, description: string) {
    const todo = await prisma.todo.create({
        data: {
            userId,
            title,
            description
        }
    })
    console.log(todo);
}

async function getTodo(userId: number) {
    const response = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    })
    console.log(response);
}

async function getTodoAndUserDetails(userId: number) {
    const response = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    })
    console.log(response)
}

// insertUser("ishu007", "123123123", "Ishu", "Singh", "ishu@gmail.com");
// createTodo(1, "cohort-2", "complete week 12 of cohort");
// getTodo(1);
getTodoAndUserDetails(1);