import Sidebar from "@/components/sidebar";
import Link from "next/link";
import React from "react";

function Test() {
  return (
    <div className="flex pb-12">
      <Sidebar />
      <div>
        <div className="pl-8">
          <h1 className="text-4xl font-bold p-4 text-black underline pb-4">
            Setting up the Environment for Programming
          </h1>
          {/** add a sextion for two videos and a description about them and title */}
          <div className="mb-4">
            <h2 className="font-bold text-2xl pb-4">
              To Start Go to the Resources page and download the 3 links under
              Coding Resources and Environment Setup. You are downloading Python
              for your machine, VSCode to compile code. and Anaconda as a bases
              for Machine Learning.
            </h2>

            <h2 className="font-bold text-2xl pb-4">
              After all three have been successfully downloaded. Go into your
              terminal and run the command &quot;jupyter notebook&quot;. then
              you will see a lot of words pop up afterwards, wait until you got
              automatically redirected to localhost:8888/tree.
            </h2>

            <h2 className="font-bold text-2xl">
              You have successfully done the setup portion for python and
              Machine Learning. If you need to download any other libraries in
              the future run this command in your terminal &quot;pip install
              LibraryName&quot;. You can now stop your terminal and close out of
              jupyter notebook.
            </h2>
          </div>
        </div>

        <div className="pl-8">
          <h1 className="text-4xl font-bold p-4 text-black underline pb-4">
            Learning Python
          </h1>
          {/** add a sextion for two videos and a description about them and title */}
          <div className="mb-4">
            <h2 className="font-bold text-2xl">
              1. Start with this 1 hour long video to get you started with the
              basics
            </h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kqtD5dpn9C8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              className="pb-8"
            ></iframe>

            <h2 className="font-bold text-2xl">
              2. Then move onto a more in depth video where you can completely
              understand the basics of python. It is 4 and a half hours so if
              you feel like you know a subject move on but be 100% sure of
              yourself.
            </h2>

            <h2 className="font-bold text-2xl">
              TIP: you don&apos;t need to know everything. don&apos;t get down on
              yourself if something seems confusing in this video. Just keep
              going and learning.
            </h2>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eWRfhZUzrAc"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              className="pb-8"
            ></iframe>

            <h2 className="font-bold text-2xl">
              3. You have 2 options.
              <ul className="list-disc list-inside">
                <li>
                  take this mini quiz to see if you understand what you just
                  watched.{" "}
                  <Link
                    href="/clubResources/learning/quiz"
                    className="text-blue-600 underline"
                  >
                    here
                  </Link>
                </li>
                <li>
                  Complete this python project{" "}
                  <Link
                    href="/clubResources/learning/project"
                    className="text-blue-600 underline"
                  >
                    here
                  </Link>
                </li>
              </ul>
            </h2>
          </div>
        </div>

        <div className="pl-8">
          <h1 className="text-4xl font-bold p-4 text-black underline pb-4">
            Learning AI
          </h1>
          {/** add a sextion for two videos and a description about them and title */}
          <div className="mb-4">
            <h2 className="font-bold text-2xl pb-4">
              This is where it becomes harder to just paste a couple videos down
              and say watch this and your good. If you want to strive in AI, you
              have to do your own research and your on work in it.
            </h2>

            <h2 className="font-bold text-2xl pb-4">
              Because AI is such a big field I recommend you start be learning
              what each one means and figuring out what Ai you want to work
              with. At this club we work primarily with Natural Language
              Processing AIs (NLPs){" "}
              <Link
                className="text-blue-600 underline"
                href="/clubResources/learning/NLP"
              >
                check that out here
              </Link>
              . But there are many other types of AIs to learn ig your more
              interested in those. If you look at the What Is AI section of the
              website theres a video to help you understand a good picture if
              you scroll down more.
            </h2>

            <h2 className="font-bold text-2xl">
              There is a great video that runs through a quick tutorial of bow
              to build an AI in under 1 hour
            </h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7eh4d6sabA0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
              className="pb-8"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
