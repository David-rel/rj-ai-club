import Sidebar from "@/components/sidebar";
import Link from "next/link";
import React from "react";

function Resources() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow px-6 py-8 bg-white overflow-y-auto w-1/2">
        <h1 className="text-4xl font-bold">AI Resources</h1>
        <p className="mt-6 text-lg text-gray-600">
          Here are some resources to help you get started with AI
        </p>
        {/* Online Courses Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Online Courses</h2>
          <ul className="list-disc list-inside text-blue-500">
            <li>
              <Link href="https://www.coursera.org/learn/machine-learning">
                Machine Learning - Coursera (Andrew Ng)
              </Link>
            </li>
            <li>
              <Link href="https://www.coursera.org/specializations/deep-learning">
                Deep Learning Specialization - Coursera
              </Link>
            </li>
            <li>
              <Link href="https://www.edx.org/professional-certificate/cs50s-introduction-to-artificial-intelligence-with-python">
                Introduction to AI - edX
              </Link>
            </li>
            <li>
              <Link href="https://www.fast.ai/">
                Deep Learning for Coders - Fast.ai
              </Link>
            </li>
            <li>
              <Link href="https://www.udacity.com/course/intro-to-artificial-intelligence--cs271">
                Intro to Artificial Intelligence - Udacity
              </Link>
            </li>
            <li>
              <Link href="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/">
                Artificial Intelligence - MIT OpenCourseWare
              </Link>
            </li>
          </ul>
        </section>

        {/* Podcasts Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Podcasts</h2>
          <ul className="list-disc list-inside text-blue-500">
            <li>
              <Link href="https://futureoflife.org/ai-alignment-podcast/">
                AI Alignment by the Future of Life Institute
              </Link>
            </li>
            <li>
              <Link href="https://blogs.nvidia.com/ai-podcast/">
                The AI Podcast by NVIDIA
              </Link>
            </li>
            <li>
              <Link href="https://dataskeptic.com/">Data Skeptic</Link>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Books</h2>
          <ul className="list-disc list-inside text-blue-500">
            <li>
              <Link href="https://www.amazon.com/Rise-Teacher-Coach-Classroom-Adaptable-ebook/dp/B0BV1XJFMJ/ref=sr_1_1?keywords=the+rise+of+the+teacher+coach&qid=1675890803&s=amazon-devices&sr=1-1">
                The Rise of the Teacher Coach by Mr. Wagner (RECOMMENDED)
              </Link>
            </li>
            <li>
              <Link href="https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646">
                Hands-On Machine Learning with Scikit-Learn, Keras, and
                TensorFlow by Aurelien Geron
              </Link>
            </li>
            <li>
              <Link href="https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618">
                Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron
                Courville
              </Link>
            </li>
            <li>
              <Link href="https://www.amazon.com/Artificial-Intelligence-Modern-Approach-3rd/dp/0136042597">
                Artificial Intelligence: A Modern Approach by Stuart Russell and
                Peter Norvig
              </Link>
            </li>
            <li>
              <Link href="https://www.amazon.com/Elements-Statistical-Learning-Prediction-Statistics/dp/0387848576">
                The Elements of Statistical Learning by Trevor Hastie, Robert
                Tibshirani, and Jerome Friedman
              </Link>
            </li>
          </ul>
        </section>

        {/* Competitions Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Competitions and Hands-on Practice
          </h2>
          <ul className="list-disc list-inside text-blue-500">
            <li>
              <Link href="https://www.kaggle.com/">Kaggle</Link>
            </li>
            <li>
              <Link href="https://zindi.africa/">Zindi</Link>
            </li>
            <li>
              <Link href="https://www.aicrowd.com/">AIcrowd</Link>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Interactive Tools</h2>
          <ul className="list-disc list-inside text-blue-500">
            <li>
              <Link href="https://teachablemachine.withgoogle.com/">
                Google&apos;s Teachable Machine
              </Link>
            </li>
            <li>
              <Link href="https://aif360.mybluemix.net/">
                IBM&apos;s AI Fairness 360
              </Link>
            </li>
          </ul>
        </section>
        {/* YouTube Channels Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">YouTube Channels</h2>
          <ul className="list-disc list-inside text-blue-500">
            <li>
              <Link href="https://www.youtube.com/@TechWithTim">Tech With Tim</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/c/3Blue1Brown">3Blue1Brown</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/user/krishnaik06">Krish Naik</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@freecodecamp">
                freeCodeCamp.org
              </Link>
            </li>

            {/* More YouTube channel links... */}
          </ul>
        </section>
      </main>
      <main className="flex-grow px-6 py-8 bg-white overflow-y-auto w-1/3">
        <h1 className="text-4xl font-bold">Club Resources</h1>
        <p className="mt-6 text-lg text-gray-600">
          Here are some resources for the club
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Emails</h2>
          <ul className="list-disc list-inside text-black">
            <li>Supervisor: swagner@regisjesuit.com</li>
            <li>Supervisor: gmitsuoka@regisjesuit.com</li>
            <li>Captain: falesda24@student.regisjesuit.com</li>
          </ul>
        </section>

        <section className="mt-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Teams Chats</h2>
          <ul className="list-disc list-inside text-blue-600">
            <li>
              <Link href="https://teams.microsoft.com/_?culture=en-us&country=us#/school/conversations/General?threadId=19:dIfemOYvLMvUt2uI6eiB6wU0kRZIz1fyv3ZRBHnCJs81@thread.tacv2&ctx=channel">
                General
              </Link>
            </li>
            <li>
              <Link href="https://teams.microsoft.com/_?culture=en-us&country=us#/school/conversations/Ideation?threadId=19:e2e0225e73a84c349e7813ad752fbfaf@thread.tacv2&ctx=channel">
                Ideation
              </Link>
            </li>
            <li>
              <Link href="https://teams.microsoft.com/_?culture=en-us&country=us#/school/conversations/News?threadId=19:6016e822b8024c57916ae9cf5c284246@thread.tacv2&ctx=channel">
                News
              </Link>
            </li>
          </ul>
        </section>
        <h1 className="text-4xl font-bold">Coding Resources</h1>
        <p className="mt-6 text-lg text-gray-600">
          Here are some programming resources
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Python Libraries (just the docs for for resources)
          </h2>
          <ul className="list-disc list-inside text-black">
            <li>
              <Link href="https://numpy.org/doc/stable/">NumPy (recommend)</Link>
            </li>
            <li>
              <Link href="https://matplotlib.org/stable/users/index">
                Matplotlib (recommend)
              </Link>
            </li>
            <li>
              <Link href="https://www.tensorflow.org/learn">
                TensorFlow (recommend)
              </Link>
            </li>
            <li>
              <Link href="https://pytorch.org/docs/stable/index.html">PyTorch</Link>
            </li>
            <li>
              <Link href="https://scikit-learn.org/stable/auto_examples/index.html">
                Scikit-Learn(really recommend)
              </Link>
            </li>
            <li>
              <Link href="https://docs.scipy.org/doc/scipy/">SciPy</Link>
            </li>
            <li>
              {" "}
              <Link href="https://docs.jupyter.org/en/latest/">
                Jupyter (recommend)
              </Link>
            </li>
            <li>
              <Link href="https://pandas.pydata.org/docs/">Pandas (recommend)</Link>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Environment Setup</h2>
          <ul className="list-disc list-inside text-black">
            <li>
              <Link href="https://www.python.org/downloads/">Python</Link>
            </li>
            <li>
              <Link href="https://code.visualstudio.com/download">
                VSCode (code compiler)
              </Link>
            </li>
            <li>
              <Link href="https://www.anaconda.com/download">
                Anaconda (to download important python libraries including
                Jupyter)
              </Link>
            </li>
          </ul>
        </section>

       
      </main>
    </div>
  );
}

export default Resources;
