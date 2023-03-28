import { createUser } from "@/lib/prisma/users";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const data = req.body;
            const { user, error } = await createUser(data);
            if (error) throw new Error(error);
            return res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} is not allowed`);
}