// import prisma from ".";
import { db } from "./db";

export async function createBusiness(business) {
    try {
        const businessFromDB = await db.business.create({ data: business });
        return { business: businessFromDB };
    } catch (error) {
        return { error };
    }
}