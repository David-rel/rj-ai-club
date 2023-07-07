import { useState } from "react";

const FAQs = [
  {
    question: "What exactly do you learn at the AI Engineering Club?",
    answer:
      "What you learn in this club is how all based around AI Engineering. You will learn a programming language called Python and the AI packages that go along with it. You will learn what it means to code an AI and create one in gerneral. You will learn how to build your first AI. We build LLM(large language models), Chat Apps, and NLPs(Natural Language Processors). You will also learn what is AI is and how to use is responsibly and how to show the world that AI is not just a bad thing.",
  },
  {
    question: "Do I need any skills prior to joining?",
    answer:
      "You do not need any skills to join this club. You will learn Everything you need. But if you do have good programming or math skills then more power to you. But you don't need it. ALL ARE WELCOME.",
  },
  {
    question: "When does the club meet?",
    answer: "We meet every Tuesday and Thursday from 3:00 - 5:00",
  },
  {
    question: "Why should I join this club?",
    answer:
      "You should join this club if your interested in programming, machine learning, neural networks, and overall the AI experience.",
  },
  {
    question: "Who runs this club?",
    answer: "The Clubs Supervisor is Mr. Wagner and Mr. Mitsuoka. The club captain is David Fales who is a senior this year and built this website.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleQuestionClick = (index) => {
    if (activeIndex === index) {
      // If the clicked question is the currently active one, close it
      setActiveIndex(null);
    } else {
      // Otherwise, open the clicked question
      setActiveIndex(index);
    }
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 font-kanit">FAQs</h2>
      <div className="space-y-6">
        {FAQs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow cursor-pointer"
            onClick={() => handleQuestionClick(index)}
          >
            <p className="font-bold font-kanit">{faq.question}</p>
            {activeIndex === index && (
              <p className="mt-2 font-maven">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
