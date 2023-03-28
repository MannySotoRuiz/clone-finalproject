import { getUserById, getUsers } from "@/lib/prisma/users"
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { users, error } = await getUsers();
    if (error) throw new Error(error);
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: error.message});
  }
  // return new Response('Hello, Next.js!')
}
