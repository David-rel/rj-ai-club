import ChatPopup from "@/components/ChatPopup";
import React from "react";
import { Fade } from "react-awesome-reveal";

function AI() {
  const sections = [
    {
      title: "Overview of AI",
      text:       "This is a brief overview video of how AI works. The types of AI and all of the amazing things that go beyond it.",
      video: "https://www.youtube.com/embed/uMzUB89uSxU",
    },
    {
      title: "What is AI?",
      text: "Artificial Intelligence (AI) is the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.John McCarthy The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experiences.",
      image: "whatIsAI/ai1.jpeg",
    },
    {
      title: "Where is AI?",
      text: `AI is everywhere in our daily lives. It is used in various fields
            such as medicine, finance, transportation, and entertainment. AI is
            present in software such as voice assistants, image recognition, and
            financial fraud detection. It is also present in hardware such as
            drones, self-driven vehicles, robots, and the Internet of Things. AI
            has transformed the world completely and has made our lives easier
            and more efficient. It is in our homes, in our cars, in our devices.
            Google search results, youtube algoritthms, teslas self driving
            cars. All of this uses some type of AI.AI is everywhere in our daily
            lives. It is used in various fields such as medicine, finance,
            transportation, and entertainment. AI is present in software such as
            voice assistants, image recognition, and financial fraud detection.
            It is also present in hardware such as drones, self-driven vehicles,
            robots, and the Internet of Things. AI has transformed the world
            completely and has made our lives easier and more efficient{" "}`,
      image: "whatIsAI/ai3.jpeg",
    },
    {
      title: "The History",
      text: `             The term “Artificial Intelligence” was first coined by John McCarthy
            in 1956 when he held the first academic conference on the subject at
            Dartmouth College. Before the term was coined, researchers and
            computer scientists have been laying the groundwork for AI to become
            a dominant field in computer science`,
      image: "whatIsAI/John.jpeg",
    },
    {
      title: "The AI Categories",
      text: `            AI can be classified into three categories: Narrow Intelligence
            (ANI), General Intelligence (AGI), and Super Intelligence (ASI). ANI
            is the most common type of AI and is designed to perform a specific
            task. This is like your instagram algorithim or a self dirving. Its
            sometihng that has one job and needs to keepl earning how to do
            better at it. AGI is designed to perform any intellectual task that
            a human can do. This type of AI is hypotheitcal and we are about 50%
            of the way there to getting it. AGi can do everything because it can
            learn like a human at exponential rates. It does need data becasue
            it ca take in all the data it needs. ASI is hypothetical and refers
            to an AI that surpasses human intelligence in all areas. This is
            your Star Wars super itneligent droids like R2D2. It can do
            everything a human can do but better with ease.`,
      image: "whatIsAI/ai4.jpeg",
    },
    {
      title: "A Deeper of Understanding of AI",
      text: `            Aritifical Intelgience wraps around this whole idea of AI. Like in
            the photo above aritifical intellgince has differnet types that uses
            sense reason, engagment and learning. This your broad ideas like
            Natrual Language Processing, Computer Vision, Robotics, Image
            Generation, optimzation, etc... Then isnde of all of these types
            there is either deep learning or macxhine ealrning. Deep learining
            is about computers learning to think using structures modeled on the
            human brain while Machine learning is about computers being able to
            think and act with less human intervention. Both of these use the 4
            type of learning being Supervised(trained using labeled input and
            output data). This is your Image recognition, speech recogintion,
            and other types of recognition. Unsupervised learning (trained using
            unlabeled data). This is your self driving car, facial recognition
            and expert systems. There is also semi-supervised learning which is
            a broad category of machine learning that uses labeled data to
            ground predictions, and unlabeled data to learn the shape of the
            larger data distribution. Reinforcment Learning which is a type of
            machine learning method where an intelligent agent (computer
            program) interacts with the environment and learns to act within
            that. Likea robotics dog learning to walk. each one of these types
            of machine learning models useswhats called methods to build out and
            learn. These are your Regressions, Descision trees, and nueral
            networks. these methods help an AI learn`,
      image: "whatIsAI/ai2.webp",
    },
    {
      title: "The Dangers of AI",
      text: `            AI can be used for dangerous reasons. AI can be dangerous in two
            ways: The AI is programmed to do something malicious or the AI is
            programmed to be beneficial but does something destructive while
            achieving its goal. These risks are amplified by the sophistication
            of AI software. Like "jail breaking" chat gpt being a lesser but
            malicious way to train an AI tihnking patterns. Rhat is just a small
            way but other really big ways AI can be used to harm is: Convincing
            social engineering attacks at scale, Document-scraping malware to
            make attacks, more efficient Evasion of image recognition and voice
            biometrics Ransomware attacks, through intelligent targeting and
            evasion, Data pollution by identifying blind spots in detection
            rules Deepfake technology which involves the use of AI to craft or
            manipulate audio and visual content for the purpose of making such
            content appear authentic, Thwarting CAPTCHA security systems, which
            are commonly used on websites to hinder malicious activity,
            Misinformation/fake news which involves the use of AI to generate or
            spread false or misleading information, Hacking which involves the
            use of AI to exploit vulnerabilities or bypass security measures,
            Autonomous weapon systems which involve the use of AI to control or
            direct lethal weapons without human intervention 12. With all of
            these rpobems you wonder why we dso this in the first place but
            heres what it can whe you put it in the righht hands`,
      image: "whatIsAI/ai5.jpeg",
    },
    {
      title: "The Greatness of AI",
      text: `            AI can also help in so many ways that can out due all the bad. some
            example are: : Healthcare: AI can help doctors diagnose diseases and
            develop personalized treatment plans. Education: AI can help
            teachers personalize learning and provide students with more
            individualized attention. Transportation: AI can help reduce traffic
            congestion and improve safety on the roads. Agriculture: AI can help
            farmers optimize crop yields and reduce waste. Environment: AI can
            help monitor and predict natural disasters and climate change.
            Entertainment: AI can help create more immersive and interactive
            experiences for users. These are just a couple ways how AI can help
            us. WE just need to learn how to use it in the righht way.`,
      image: "whatIsAI/ai6.jpeg",
    },
    {
      title: "Why You Should Learn AI",
      text: `            AI is growing alarmingly quickly and it’s important to learn about
            it now so that you can be better prepared for the future. AI is
            already being used in many industries and is expected to become even
            more prevalent in the coming years. By learning about AI now, you
            can gain a better understanding of how it works and how it can be
            used to benefit society. This knowledge can help you stay ahead of
            the curve and be better prepared for the changes that are coming.`,
      image: "whatIsAI/ai7.jpeg",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <ChatPopup />
      <Fade triggerOnce duration={1000}>
        <h1 className="text-5xl font-bold text-center py-10">
          Artificial Intelligence Overview
        </h1>
      </Fade>
      {sections.map((section, index) => (
        <Fade triggerOnce key={index} duration={2000}>
          <section
            className={`flex flex-col md:items-center md:justify-between w-full min-h-screen font-kanit bg-${
              index % 2 === 0
                ? "gray-200"
                : index % 3 === 0
                ? "gray-100"
                : "white"
            } p-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            <div className="max-w-xl w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-xl text-gray-600 font-maven">{section.text}</p>
            </div>
            <div className="w-full md:w-1/2">
              {section.image ? (
                <img
                  className="mt-4 rounded-lg w-full"
                  src={section.image}
                  alt={section.title}
                />
              ) : (
                <iframe
                  className="w-full h-96"
                  src={section.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </section>
        </Fade>
      ))}
    </div>
  );
}

export default AI;
