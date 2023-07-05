// /api/login.js
import { client, q } from "../../utils/fauna";

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      const response = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index("users_by_username"), username)),
          q.Lambda((x) => q.Get(x))
        )
      );
      const user = response.data[0];
      if (user && user.data.password === password) {
        // For actual applications, consider encrypting passwords.
        // Here, we're assuming that they are stored in plain text.
        // Never store passwords in plain text in production.

        res
          .status(200)
          .json({ status: "success", username: user.data.username });
      } else {
        res
          .status(401)
          .json({ status: "error", message: "Invalid username or password" });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      res
        .status(500)
        .json({ status: "error", message: "An internal error occurred" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
