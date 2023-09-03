const dotenv = require("dotenv");
const faunadb = require("faunadb");
const XLSX = require("xlsx");




async function addUser() {
  dotenv.config({ path: "./.env.local" });

  const secret = process.env.NEXT_PUBLIC_FUANA_DB_KEY;
  const q = faunadb.query;
  const client = new faunadb.Client({ secret });

  console.log("FaunaDB Key:", secret);
  try {
    const result = await client.query(
      q.Create(q.Collection("users"), {
        data: {
          username: "George Mitsuoka",
          password:
            "$2b$10$DnJcZf05AZnHg3Yd6mT39eHsUjHhaXrWioFXDHhAarHMm1SXjAVTW",
          email: "gmitsuoka@regisjesuit.com",
          role: "admin",
          quiz_submission: "",
          project_submission: "",
        },
      })
    );
    console.log("User added:", result);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

addUser();