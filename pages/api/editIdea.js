// /pages/api/editIdea.js
import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).send();
  }

  const { id, title, description, creator, createdAt } = req.body;

  try {
    await client.query(
      q.Update(q.Ref(q.Collection("ideas"), id), {
        data: {
          title,
          description,
          creator,
          createdAt,
        },
      })
    );

    res.status(200).json({ message: "Idea updated successfully." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
