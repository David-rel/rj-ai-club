const faunadb = require('faunadb');
const secret = process.env.NEXT_PUBLIC_FUANA_DB_KEY;  // ensure your secret key is stored safely 
const q = faunadb.query;
const client = new faunadb.Client({ secret });

async function addUser(username, password, email, role, quiz_submission, project_submission) {
  try {
    const newUser = {
      data: {
        username,
        password,
        email,
        role,
        quiz_submission,
        project_submission,
      },
    };

    const result = await client.query(
      q.Create(
        q.Collection('users'),
        newUser
      )
    );

    console.log("User created in DB: ", result);
  } catch (error) {
    console.log("Error creating user: ", error);
  }
}






