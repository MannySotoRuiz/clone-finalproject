import prisma from ".";
// import { db } from "./db";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany();
        return { users };
    } catch (error) {
        return { error };
    }
}

export async function createUser(user) {
    try {
        const userFromDB = await prisma.user.create({ data: user });
        return { user: userFromDB };
    } catch (error) {
        return { error };
    }
}

export async function getUserById(id) {
    console.log("going to attempt to find user: ", id);
    try {
        const foundUser  = await prisma.user.findUnique({ where: { id } });
        return { foundUser };
    } catch (error) {
        return { error };
    }
}