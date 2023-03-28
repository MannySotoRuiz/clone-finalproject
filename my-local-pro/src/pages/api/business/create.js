import { createBusiness } from "@/lib/prisma/business";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const data = req.body;
            const { business, error } = await createBusiness(data);
            if (error) throw new Error(error);
            return res.status(200).json({ business });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} is not allowed`);
}