// import prisma from ".";
import { db } from "./db";

export async function getUsers() {
    try {
        const users = await db.user.findMany();
        return { users };
    } catch (error) {
        return { error };
    }
}

export async function createUser(user) {
    try {
        const userFromDB = await db.user.create({ data: user });
        return { user: userFromDB };
    } catch (error) {
        return { error };
    }
}

export async function getUserById(id) {
    try {
        const foundUser  = await db.user.findUnique({ where: { id } });
        return { foundUser };
    } catch (error) {
        return { error };
    }
}