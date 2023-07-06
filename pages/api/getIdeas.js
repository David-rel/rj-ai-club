// /pages/api/ideas.js
import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send();
  }

  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("ideas"))),
        q.Lambda((x) => q.Get(x))
      )
    );

    res.status(200).json(result.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}