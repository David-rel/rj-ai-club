// /pages/api/createIdea.js
import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send();
  }

  const { title, description, level, createdAt, completion } = req.body;

  try {
    await client.query(
      q.Create(q.Collection("board"), {
        data: {
          title,
          description,
          level,
          completion,
          createdAt,
        },
      })
    );

    res.status(200).json({ message: "Idea created successfully." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
