import Image from "next/image";
import Link from "next/link";

function Section({ title, text, imgSrc, videoSrc }) {
  return (
    <div className="p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">{text}</p>
      <Image src={imgSrc} alt={title} width={500} height={300} />
      <div className="mt-4">
        
      </div>
    </div>
  );
}

export default function NLPPage() {
  return (
    <div>
      <Link
        href="/clubResources/learning"
        className="text-blue-600 underline font-semibold text-xl p-4 "
      >
        Back
      </Link>

      <Section
        title="Welcome to the World of Natural Language Processing (NLP)"
        text="Discover the intriguing realm of Natural Language Processing where machines understand, interpret, and respond to human language. Dive in to uncover the technologies that power your favorite digital assistants, smart home devices, and more."
        imgSrc="/NLP/NLP1.jpeg"
      />

      <Section
        title="The Driving Forces of NLP: Deep Learning & Machine Learning"
        text="NLP leverages the power of both Deep Learning and Machine Learning to comprehend language patterns and produce meaningful interactions. Explore how these advanced technologies work together to enable machines to understand and converse with us."
        imgSrc="/NLP/NLP2.png"
      />

      <Section
        title="Learning Styles in NLP: Supervised, Unsupervised, Semi-supervised, and Reinforcement Learning"
        text="Various learning styles equip NLP systems to process language differently. Understand how Supervised, Unsupervised, Semi-supervised, and Reinforcement Learning contribute to the evolution of NLP."
        imgSrc="/NLP/NLP3.jpg"
      />

      <Section
        title="Popular Models in NLP: Regression, Decision Trees, Neural Networks, and More"
        text="NLP systems employ a variety of models to interpret language. From Regression and Decision Trees to Neural Networks, each model plays a unique role. Delve into the fascinating world of NLP models with us."
        imgSrc="/NLP/NLP 4.svg"
      />

      <section className="pl-8 pb-8">
        <h1 className="text-3xl font-bold pt-8">
          Here a couple videos to get you started with NLPs
        </h1>
        <h2 className="pb-8">
          You may need to setup different environment for each tutorial so
          follow along with different tutorials to set those up. Also these are
          not just the only tutorials you can follow, if you found different
          ones that are better use them and even send them to the creator of the
          website to upload onto the page.
        </h2>
        <div className="pb-12">
          <h1 className="text-green-500 underline text-3xl font-semibold">
            Beginner
          </h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t1EKO78idoI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            className="pb-8"
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KVxIx8f_VpM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            className="pb-8"
          ></iframe>
        </div>
        <div className="pb-8">
          <h1 className="text-blue-500 underline text-3xl font-semibold">
            Intermediate
          </h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ciPOWwJNRlk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            className="pb-8"
          ></iframe>
          <Link
            href="https://www.youtube.com/playlist?list=PLQY2H8rRoyvzDbLUZkbudP-MFQZwNmU4S"
            className="text-blue-600 underline text-5xl"
          >
            Tensor Flow playlist tutorial
          </Link>
        </div>
        <div>
          <h1 className="text-red-500 underline text-3xl font-semibold">
            Master
          </h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kCc8FmEb1nY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            className="pb-8"
          ></iframe>
          <Link
            href="https://www.youtube.com/playlist?list=PLeo1K3hjS3uuvuAXhYjV2lMEShq2UYSwX"
            className="text-blue-600 underline text-5xl"
          >
            In Depth NLP Tutorial in Python
          </Link>
        </div>
      </section>
    </div>
  );
}
