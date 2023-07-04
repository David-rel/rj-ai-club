import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";


export default function Home() {
  return (
    <div>
      <div className="relative bg-black text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-image">
          <Image
            src="/about/aiclub.jpeg"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="hero-text z-10 opacity-0">
          <h1 className="text-5xl font-bold text-white underline">
            RJ AI Engineering Club Projects
          </h1>
          <h2 className="text-2xl mt-4 text-white">
            We are currently planning and working on many very interesting and
            fun projects in the future. Scroll down to check them out.
          </h2>
        </div>
      </div>

      {/* Projects in Progress Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Projects in Progress
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Add your project cards here */}
            <ProjectCard
              imageUrl="/projects/raiderbot.png"
              title="Raider Bot V1"
              description="NLP Chat Bot for Regis Jesuit Highschool."
              buttonLink="/projects/raiderBotV1"
            />
            
            ;
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Upcoming Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Add your project cards here */}
          </div>
        </div>
      </section>
    </div>
  );
}
