import Image from "next/image";
import Link from "next/link";
import React from "react";

function footer() {
  return (
    <div className="bg-gray-700 px-10 py-10 text-center text-black">
      <>
        <div className=" bg-linear-pink-invert pb-12 bg-gray-700">
          <div className="mx-auto container flex flex-col items-center justify-center">
            <div>
              <Image
                src={"/icon.png"}
                alt="Home Page"
                className="rounded-lg"
                width={175}
                height={100}
              />
            </div>

            <div className="text-gray-200 flex flex-col md:items-center f-f-l  pt-6">
              <h1 className="text-2xl font-white">RJ AI Engineering Club</h1>

              <div className="md:flex items-center mt-4 text-base text-color f-f-l">
                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  6300 S Lewiston Way, Aurora, CO 80016
                </h2>

                <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">
                  email: swagner@regisjesuit.com
                </h2>
              </div>

              <div className=" text-base text-color f-f-l">
                <ul className="md:flex items-center">
                  <Link
                    href="/"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Home
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/about"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    About
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/clubResources"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Resources
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/projects"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Projects
                  </Link>
                  <br />
                  <br />

                  <Link
                    href="/whatIsAI"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    What is AI
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="/join"
                    className=" md:mr-6 cursor-pointer pt-4 lg:py-0"
                  >
                    Join
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Link href="/disclaimer">disclaimer</Link>
        <p className="text-white">
          Website Built by{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.instagram.com/_david_rel/"
          >
            @David-Rel
          </a>
          ,{" "}
          <a
            className="text-blue-600 underline"
            href="https://www.buymeacoffee.com/DavidFales"
          >
            Buy Me a Coffee
          </a>
        </p>
        <p className="text-white">
          Like what you see and want a website built be me click{" "}
          <a
            className="text-blue-600 underline"
            href="https://code-crafty-web-development.vercel.app/"
          >
            here
          </a>
        </p>
      </>
    </div>
  );
}

export default footer;
