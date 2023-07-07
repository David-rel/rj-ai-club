import { useEffect, useState } from "react";

export default function Submit() {
  const [code, setCode] = useState("");
  const [user, setUser] = useState("");

  //...
  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "/Login";
    } else {
      setUser(localStorage.getItem("username"));
    }
  }, []);


  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  async function submitProjectResult() {

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: user, code: code }),
      });

      if (res.ok) {
        return { success: true };
      } else {
        console.error("Failed to submit quiz result:", await res.text());
        return { success: false };
      }
    } catch (err) {
      console.error("Failed to submit quiz result:", err);
      return { success: false };
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Python Project</h1>

      <div className="mb-8">
        <h2 className="font-bold text-2xl">Your Task:</h2>
        <p>
          <p className="font-bold text-lg">
            Here you have three different tasks you can try:
          </p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              Guess the Number Game: The program generates a random number, and
              the user has to guess it. Provide feedback on whether the guessed
              number is too high or too low.
            </li>
            <li>
              Hangman Game: Implement a simple game of hangman where a user has
              to guess a hidden word by guessing one letter at a time.
            </li>
            <li>
              Palindrome Checker: A program to check whether the given string is
              a palindrome or not.
            </li>
          </ol>
          <p className="font-bold pt-4">
            After creating the Python script, copy and paste the code into the
            text box below and submit.
          </p>
        </p>
      </div>

      <div className="mb-8">
        <textarea
          className="w-full p-2 border rounded"
          rows="20"
          value={code}
          placeholder="your python script here"
          onChange={handleCodeChange}
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={submitProjectResult}
      >
        Submit
      </button>
    </div>
  );
}
