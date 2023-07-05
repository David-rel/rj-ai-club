import Link from "next/link";

function Card({ title, description, href }) {
  return (
    <div className="mb-8 bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105 transform duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-slate-200 mb-2 underline">{title}</h2>
      <p className="text-gray-300">{description}</p>
      <Link href={href} legacyBehavior>
        <a className="text-blue-500 hover:underline mt-4 inline-block">
            Go To {title}
        </a>
      </Link>
    </div>
  );
}

export default Card;
