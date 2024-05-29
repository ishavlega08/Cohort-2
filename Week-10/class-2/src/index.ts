import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// insert 
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true,
            firstName: true
        },
    })
    console.log(res);
}

// insertUser("ishav1@gmail.com", "password", "Ishav", "Singh");

// update
interface UpdateParams {
    firstName: string,
    lastName: string,
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {username: username},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

// updateUser('ishav1@gmail.com', {
//     firstName: "Ishav111",
//     lastName: "Singh"
// })

// delete
