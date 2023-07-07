import { useEffect, useState } from "react";

const QUESTIONS = [
  {
    question: "What is the output of print(0.1 + 0.2 == 0.3)?",
    answers: ["True", "False", "0.1", "0.3"],
    correctAnswer: "False",
    explanation:
      "Due to the way floating-point numbers are stored in memory, 0.1 + 0.2 is not exactly equal to 0.3.",
  },
  {
    question: "What is the output of print(type(1/2)) in Python?",
    answers: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'str'>",
      "<class 'bool'>",
    ],
    correctAnswer: "<class 'float'>",
    explanation:
      "In Python 3, the division of two integers results in a float.",
  },
  {
    question:
      "How do you create a loop that starts at 1 and ends at 10 in Python?",
    answers: [
      "for x in range(1, 10)",
      "for x in range(1, 11)",
      "for x in range(0, 10)",
      "for x in range(0, 11)",
    ],
    correctAnswer: "for x in range(1, 11)",
    explanation:
      "The 'range' function in Python includes the start value and excludes the end value.",
  },
  {
    question: "How do you define a class named 'PythonClass' in Python?",
    answers: [
      "class PythonClass()",
      "PythonClass = class()",
      "class PythonClass:",
      "PythonClass: class",
    ],
    correctAnswer: "class PythonClass:",
    explanation:
      "Classes in Python are defined using the 'class' keyword followed by the class name and a colon.",
  },
  {
    question: "How do you print 'Hello, World!' in Python?",
    answers: [
      "print('Hello, World!')",
      "print Hello, World!",
      "println('Hello, World!')",
      "console.log('Hello, World!')",
    ],
    correctAnswer: "print('Hello, World!')",
    explanation: "The 'print' function is used for output in Python.",
  },
  {
    question: "How do you read a line of user input in Python?",
    answers: ["input()", "read()", "readline()", "scanf()"],
    correctAnswer: "input()",
    explanation:
      "The 'input' function reads a line of input from the user in Python.",
  },
  {
    question: "What is the output of print(str(1+1)) in Python?",
    answers: ["1+1", "2", "11", "Error"],
    correctAnswer: "2",
    explanation:
      "The 'str' function converts the result of 1+1, which is 2, into a string.",
  },
  {
    question: "How do you write an 'if' statement for x equals 5 in Python?",
    answers: ["if x = 5", "if x == 5", "if x:5", "if x equals 5"],
    correctAnswer: "if x == 5",
    explanation: "The '==' operator is used to compare equality in Python.",
  },
  {
    question: "Which function do you use to create an empty list in Python?",
    answers: ["list()", "new list()", "[]", "array()"],
    correctAnswer: "[]",
    explanation:
      "An empty list in Python can be created by using square brackets with nothing inside.",
  },
  {
    question:
      "How do you assign the value 10 to a variable named 'x' in Python?",
    answers: ["x = 10", "x == 10", "10 = x", "x: 10"],
    correctAnswer: "x = 10",
    explanation:
      "The '=' operator is used to assign values to variables in Python.",
  },
  {
    question: "What is the result of 10 ** 3 in Python?",
    answers: ["1000", "30", "13", "300"],
    correctAnswer: "1000",
    explanation:
      "The '**' operator is used for exponentiation in Python. So, 10**3 is 10 to the power of 3, which equals 1000.",
  },
  {
    question:
      "How do you add an item 'Python' at the end of a list named 'myList' in Python?",
    answers: [
      "myList.append('Python')",
      "myList.add('Python')",
      "myList += 'Python'",
      "myList.push('Python')",
    ],
    correctAnswer: "myList.append('Python')",
    explanation:
      "The 'append' method is used to add an item at the end of a list in Python.",
  },
  {
    question: "What is the output of print(10 % 3) in Python?",
    answers: ["1", "0", "3", "33"],
    correctAnswer: "1",
    explanation:
      "The '%' operator is used for modulo operation in Python, which returns the remainder of the division. So, 10 % 3 returns 1.",
  },
  {
    question: "What is the output of print(3 * (2 + 3)) in Python?",
    answers: ["15", "21", "18", "20"],
    correctAnswer: "15",
    explanation:
      "In Python, like in regular math, operations inside parentheses have higher priority. So, 2+3 is calculated first, then the result is multiplied by 3.",
  },
  {
    question: "How do you create a multi-line comment in Python?",
    answers: ["/*...*/", "//...", "#...", "'''...'''"],
    correctAnswer: "'''...'''",
    explanation:
      "In Python, multi-line comments can be created by wrapping the comment inside triple quotes.",
  },
];

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizIsComplete, setQuizIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [resetCounter, setResetCounter] = useState(0); // Add this line
  const [user, setUser] = useState("");

  //...
  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "/Login";
    } else {
      setUser(localStorage.getItem("username"));
    }
  }, []);

  console.log(user); // Try logging the user here.

  //...

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleQuizSubmit = async () => {
    let newScore = 0;

    QUESTIONS.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setQuizIsComplete(true);

    const result = await submitQuizResult(user, newScore);
    if (result.success) {
      // handle successful result submission
    } else {
      // handle failed result submission
    }
  };

  async function submitQuizResult(username, score) {
    console.log(`Submitting result for user ${username} with score ${score}`);

    try {
      const res = await fetch("/api/sendQuizResults", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, score }),
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

  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setQuizIsComplete(false);
    setScore(0);
    setResetCounter((prev) => prev + 1); // Add this line
  };

  const getFeedbackMessage = (score) => {
    if (score <= 5) return "You should definitely review Python a bit more.";
    if (score <= 10)
      return "That's good, but I suggest brushing up a little bit more.";
    if (score <= 14) return "Very good! You're ready to move on.";
    return "Perfect score! Great job, you're ready to move on.";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Python Quiz</h1>
      {QUESTIONS.map((question, index) => (
        <div key={index} className="mb-4">
          <h2 className="mb-2">
            {question.question}
            {quizIsComplete && (
              <span
                className={
                  selectedAnswers[index] === question.correctAnswer
                    ? "ml-2 text-green-500"
                    : "ml-2 text-red-500"
                }
              >
                {selectedAnswers[index] === question.correctAnswer
                  ? "✅"
                  : "❌"}
              </span>
            )}
          </h2>
          <div key={resetCounter}>
            {" "}
            {/* Add this line */}
            {question.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <input
                  id={`question-${index}-answer-${answerIndex}`}
                  type="radio"
                  name={`question-${index}`}
                  value={answer}
                  onChange={() => handleAnswerChange(index, answer)}
                  className="mr-2"
                  disabled={quizIsComplete}
                />
                <label htmlFor={`question-${index}-answer-${answerIndex}`}>
                  {answer}
                </label>
              </div>
            ))}
          </div>{" "}
          {/* Add this line */}
          {quizIsComplete &&
            selectedAnswers[index] !== question.correctAnswer && (
              <p className="mt-2 text-red-500">{question.explanation}</p>
            )}
        </div>
      ))}
      <button
        onClick={handleQuizSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={quizIsComplete}
      >
        {quizIsComplete ? "Submitted" : "Submit Quiz"}
      </button>
      {quizIsComplete && (
        <div className="mt-6">
          <h2 className="text-xl">
            Your score is: {score} out of {QUESTIONS.length}
          </h2>
          <p>{getFeedbackMessage(score)}</p>
          <button
            onClick={handleRetryQuiz}
            className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}
