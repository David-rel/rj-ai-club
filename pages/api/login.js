// /api/login.js
import { client, q } from "../../utils/fauna";
import bcrypt from "bcrypt";

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

      // compare entered password with stored hashed password
      if (user && bcrypt.compareSync(password, user.data.password)) {
        // password match
        res
          .status(200)
          .json({ status: "success", username: user.data.username });
      } else {
        // password did not match
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
