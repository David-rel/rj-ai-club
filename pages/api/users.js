import { client, q } from "../../utils/fauna";

export default async (req, res) => {
  try {
    const { data } = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("users"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    // transform data
    const users = data.map((user) => ({
      username: user.data.username,
      email: user.data.email,
      role: user.data.role,
    }));

    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
