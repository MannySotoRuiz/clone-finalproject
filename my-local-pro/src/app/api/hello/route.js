import { getUserById } from "@/lib/prisma/users"
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { foundUser, error } = await getUserById("641e862d653e36ae9b25af41");
    if (error) throw new Error(error);
    return NextResponse.json({ foundUser });
  } catch (error) {
    return NextResponse.json({ error: error.message});
  }
  // return new Response('Hello, Next.js!')
}
