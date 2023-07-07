import Image from "next/image";
import Link from "next/link";

// within the projects grid


export default function ProjectCard({
  imageUrl,
  title,
  description,
  buttonLink,
}) {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
      <Image
        className="h-56 w-full object-cover"
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 font-maven">{description}</p>
        <Link href={buttonLink}>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
