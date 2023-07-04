// pages/projects/[id].js

import Link from "next/link";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back Button */}
      <Link href="/projects" legacyBehavior>
        <a className="inline-block mb-10 text-blue-500 hover:text-blue-700">
          &larr; Back
        </a>
      </Link>

      <div className="flex flex-wrap -mx-4">
        {/* Image */}
        <div className="w-full md:w-1/2 px-4">
          <Image
            src="/projects/raiderBot.png"
            alt="title"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Raider Bot</h1>
          <p className="mb-6 text-xl">
            Raider Bot v1 is a NLP (Natural Language Processor) Chat Bot that
            web scrapes Regis Jesuit High Schools Website. It then uses that
            data to create a semi-supervised machine learning model that also
            learns from human feedback and past chats. It uses that data and the
            user data to keep on becoming better. it is not out yet and in
            development. Stay tuned as we continue to build out this AI.{" "}
          </p>
          <div>
            <Link href="https://github.com/David-rel/raiderBot" legacyBehavior>
              <a className="mr-4 bg-black text-white font-bold py-3 px-6 text-xl rounded">
                GitHub
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-xl rounded">
                Visit Page
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
