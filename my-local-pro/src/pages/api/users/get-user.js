import { getUsers, getUserById } from "@/lib/prisma/users";
export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            // const { users, error } = await getUsers();
            const { foundUser, error } = await getUserById("641e862d653e36ae9b25af41");
            if (error) throw new Error(error);
            return res.status(200).json({ foundUser });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} is not allowed`);
}