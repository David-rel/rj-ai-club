// components/ChatPopup.js
import { useState, useEffect } from "react";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      message:
        "Welcome to RJ AI Engineering Question Bot. Click a question get an answer.",
      type: "system",
    },
  ]);

  const questions = [
    {
      q: "What is RJ AI Engineering?",
      a: "RJ AI Engineering Club is a club that focuses fully on creating, learning, and discussing AI. The ethics behind it, how to use it, how to build it. ",
    },
    {
      q: "What is AI?",
      a: "AI(Artificial Intelligence)is the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. There are many types of AIs that use Machine and Deep Learning to learn. It uses neural networks and linear regression and other algorithms to create.",
    },
    {
      q: "How does the club build AIs?",
      a: "We use a 7 step process that grabs data, cleans it, sorts, it, questions it, creates a model, and revises using python packages, and javascript front end libraries",
    },
    {
      q: "How many members does the club have?",
      a: "Our club has 10 members and 2 supervisors.",
    },
    {
      q: "What are the main goals of the club?",
      a: "The main goals of the club is to help people develope there AI knowledge and strengthen their love for AI while also discoursing about its ethics.",
    },
    {
      q: "What specifically does the club do?",
      a: "We build AIs that can help the people around us and the school. We learn how to use AI's correctly and how to ethically work with them ",
    },
    {
      q: "How can I join?",
      a: "Joining is easy! You can click the join button and fill the form to join anytime, contact our supervisor, find us during our working hours, or sign up at the club activities fair at school.",
    },
    {
      q: "Whom should I contact?",
      a: "You can reach out to our main supervisor, Spencer Wagner, at this email: swagner@regisjesuit.com",
    },
    {
      q: "Why should I join?",
      a: "You should join if you enjoy the task of learning, building, and discussing everything there has to do with AI. Join if you want to learn",
    },
    {
      q: "What are the club hours?",
      a: "Every week on Tuesday and Thursday from 3:00 - 5:00",
    },
    {
      q: "Do I need prior knowledge to join?",
      a: "No, you do not need any prior experience. Just be open and willing to learn.",
    },
  ];

  const [availableQuestions, setAvailableQuestions] = useState([...questions]);
  const [randomQuestions, setRandomQuestions] = useState(getRandomQuestions());

  function getRandomQuestions() {
    const shuffledQuestions = availableQuestions.sort(
      () => 0.5 - Math.random()
    );
    return shuffledQuestions.slice(0, 3);
  }

  const handleQuestionClick = (question, answer) => {
    setChatMessages([...chatMessages, { message: question, type: "question" }]);
    setAvailableQuestions(availableQuestions.filter((q) => q.q !== question));

    setTimeout(() => {
      setChatMessages((prevChatMessages) => [
        ...prevChatMessages,
        { message: answer, type: "answer" },
      ]);
      if (availableQuestions.length > 0) {
        setRandomQuestions(getRandomQuestions());
      }
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (availableQuestions.length <= questions.length - 3) {
      setAvailableQuestions([...questions]);
    }
  }, [availableQuestions]);

  return (
    <div className="fixed bottom-5 right-5 hidden md:flex lg:flex z-50">
      {isOpen ? (
        <div
          className="flex flex-col bg-white shadow-lg rounded-lg"
          style={{ width: "30rem", height: "36rem" }} // Custom width and height
        >
          {" "}
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h3 className="font-semibold text-lg">
              RJ AI Engineering Question Bot
            </h3>
            <button onClick={toggleChat} className="focus:outline-none z-10">
              X
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-scroll">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${
                  msg.type === "question"
                    ? "text-white bg-blue-600"
                    : "text-black bg-gray-200"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-gray-300">
            {availableQuestions.length > 0 ? (
              randomQuestions.map((question, index) => (
                <button
                  key={index}
                  className="w-full px-3 py-1 mb-2 text-sm bg-white text-blue-500 border border-blue-500 rounded-lg focus:outline-none"
                  onClick={() => handleQuestionClick(question.q, question.a)}
                >
                  {question.q}
                </button>
              ))
            ) : (
              <div className="w-full px-3 py-1 mb-2 text-sm text-center text-gray-500">
                That's all I have to answer. Bye!
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-16 h-16 text-white bg-blue-500 rounded-full focus:outline-none z-10"
        >
          RJ
        </button>
      )}
    </div>
  );
};

export default ChatPopup;
