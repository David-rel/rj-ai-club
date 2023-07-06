// /pages/api/createIdea.js
import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send();
  }

  const { title, description, creator, createdAt } = req.body;

  try {
    await client.query(
      q.Create(q.Collection("ideas"), {
        data: {
          title,
          description,
          creator,
          createdAt,
        },
      })
    );

    res.status(200).json({ message: "Idea created successfully." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
