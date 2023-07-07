import ChatPopup from "@/components/ChatPopup";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-blue-200 pb-10">
      <ChatPopup />
      {/* Section 1 */}
      <div className="relative h-screen w-screen">
        <Image
          src="/about/aiclub.jpeg"
          layout="fill"
          objectFit="cover"
          alt="AI Ethics Discussions"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white space-x-4">
          <h1 className="text-4xl mb-4 font-kanit">
            We are the Regis Jesuit AI Engineering Club
          </h1>
          <p className="text-xl mb-4 leading-relaxed font-maven">
            Based at Regis Jesuit Highschool the AI Engineering Club works to
            create new and very interesting AI and Machine Learning Models. We
            learn about the newest features in the space and discuss about AI.
            You don&apos;t need any past experience. Just come ready to learn
            about the wonders of AI.
          </p>
          <Link href="/about" legacyBehavior>
            <a className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-kanit">
              LEARN MORE
            </a>
          </Link>
          <Link href="/join" legacyBehavior>
            <a className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 font-kanit">
              JOIN HERE
            </a>
          </Link>
        </div>
      </div>

      {/* Remaining sections */}
      <div className="container mx-auto">
        {/* Sections 2 and 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 min-h-screen items-center bg-gray-200 p-4 font-kanit">
          {/* Section 2 */}
          <div className="flex flex-col items-center" data-aos="fade-right">
            <Image
              src="/about/aiethics.jpeg"
              alt="AI Ethics Discussions"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2 font-kanit">
                AI Ethics Discussions
              </h2>
              <p className="mb-4 text-lg leading-relaxed font-maven">
                We conduct discussions about AI ethics, pondering how AI should
                be treated, and whether it should be used in schools or other
                workplaces. These discussions are open to all members and help
                stimulate critical thinking and a better understanding of AI
                applications in the real world.
              </p>
              <Link href="/about" legacyBehavior>
                <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-kanit">
                  LEARN MORE
                </a>
              </Link>
            </div>
          </div>

          {/* Section 3 */}
          <div
            className="flex flex-col items-center font-kanit"
            data-aos="fade-left"
          >
            <Image
              src="/about/aidev.jpeg"
              alt="AI Development"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">AI Development</h2>
              <p className="mb-4 text-lg leading-relaxed font-maven">
                We actively engage in building new AI language models and
                chatbots. The club serves as an avenue for learning basic AI
                development in Python and JavaScript. Whether you&apos;re an
                advanced programmer or just getting started, this club provides
                opportunities to dive into AI.
              </p>
              <Link href="/projects" legacyBehavior>
                <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  OUR PROJECTS
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Sections 4 and 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen items-center bg-slate-200 p-4">
          {/* Section 4 */}
          <div className="flex flex-col items-center" data-aos="fade-right">
            <Image
              src="/about/jspy.jpeg"
              alt="Learning Opportunities"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4 font-kanit">
              <h2 className="text-2xl font-bold mb-2">
                Learning Opportunities
              </h2>
              <p className="mb-4 text-lg leading-relaxed font-maven">
                We offer learning opportunities in Python, JavaScript, and
                various Python packages for AI. Our club promotes an inclusive
                environment where anyone, regardless of their previous coding
                experience, can thrive and acquire new skills.
              </p>
              <Link href="/join" legacyBehavior>
                <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  JOIN HERE
                </a>
              </Link>
            </div>
          </div>

          {/* Section 5 */}
          <div
            className="flex flex-col items-center font-kanit"
            data-aos="fade-left"
          >
            <Image
              src="/about/rj.png"
              alt="Regis Jesuit Honor Code"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">
                Regis Jesuit Principles
              </h2>
              <p className="mb-4 text-lg leading-relaxed font-maven">
                We follow Regis Jesuit Highschool and their principles. We do
                not use the technology we build to harm anyone and we follow
                guidelines to help improve AI and not diminish it.
              </p>
              <Link
                href="https://www.regisjesuit.com/mission/our-values--vision"
                legacyBehavior
              >
                <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  GOTO REGIS
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
