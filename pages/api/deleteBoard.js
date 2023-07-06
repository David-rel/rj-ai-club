import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.body._method !== "DELETE") {
    return res.status(405).send();
  }

  const { id } = req.body;

  try {
    await client.query(q.Delete(q.Ref(q.Collection("board"), id)));

    res.status(200).json({ message: "Board deleted successfully." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
