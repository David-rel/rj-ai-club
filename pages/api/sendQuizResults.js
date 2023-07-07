import { client, q } from "../../utils/fauna";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { username, score } = req.body;



  try {
    await client.query(
      q.Update(
        q.Select("ref", q.Get(q.Match(q.Index("users_by_username"), username))),
        {
          data: { quiz_submission: `${score}/15` },
        }
      )
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Fauna error:", err);
    return res.status(500).json({ success: false });
  }
}
