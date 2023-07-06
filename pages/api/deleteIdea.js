import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {

  if (req.body._method !== "DELETE") {
    return res.status(405).send();
  }

  const { id } = req.body;

  try {
    await client.query(q.Delete(q.Ref(q.Collection("ideas"), id)));

    res.status(200).json({ message: "Idea deleted successfully." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
