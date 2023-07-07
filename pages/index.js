import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import FAQSection from "../components/FAQSection";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ChatPopup from "@/components/ChatPopup";

function Home() {
  const sections = [
    {
      image: "/about/aiclub.jpeg",
      title: "About RJ AI Engineering Club",
      description:
        "Get to know what the RJ AI Engineering Club is all about and see if you want to join.",
      path: "/about",
      button: "About Us",
    },
    {
      image: "/about/aidev.jpeg",
      title: "What Is AI",
      description:
        "Take a brief introduction to what AI is and if you think you like it. ",
      path: "/whatIsAI",
      button: "What Is AI",
    },
    {
      image: "/about/aiethics.jpeg",
      title: "Projects",
      description:
        "See what Cool Projects The AI Engineering Club is creating.",
      path: "/projects",
      button: "Projects",
    },
    {
      image: "/about/jspy.jpeg",
      title: "JOIN US",
      description:
        "If you are interested in AI at all, or you want to see what it is all about click below to JOIN US",
      path: "/join",
      button: "JOIN US",
    },
  ];

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "20px",
        zIndex: 2,
        transform: "translateY(-50%)",
        fontSize: "2rem",
        cursor: "pointer",
        color: "#333",
      }}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "20px",
        zIndex: 2,
        transform: "translateY(-50%)",
        fontSize: "2rem",
        cursor: "pointer",
        color: "#333",
      }}
    >
      <FaChevronLeft />
    </div>
  );
};


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  return (
    <div className="bg-gray-200">
      <ChatPopup />
      <section class="relative bg-[url(../public/banner.jpg)] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-4xl font-extrabold sm:text-7xl animate-fadeIn">
              Regis Jesuit Highschool
              <strong class="block font-extrabold text-blue-600">
                AI Engineering
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed animate-fadeIn">
              Welcome to the Regis Jesuit AI Engineering Club
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link href="/about" legacyBehavior>
                <a class="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring-0 active:bg-blue-500 sm:w-auto animate-fadeIn">
                  LEARN MORE
                </a>
              </Link>
              <Link href="/join" legacyBehavior>
                <a class="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring-0 active:bg-blue-500 sm:w-auto animate-fadeIn">
                  JOIN HERE
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8">
        <Slider {...settings}>
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center h-full space-y-4"
            >
              <div className="w-full h-3/4 flex items-center justify-center">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={700}
                  height={600}
                />
              </div>

              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="text-sm">{section.description}</p>
              <Link href={section.path} legacyBehavior>
                <a className="inline-block bg-blue-500 rounded px-8 py-2 text-white hover:bg-blue-600 active:bg-blue-700">
                  {section.button}
                </a>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
      <div className="bg-gray-300">
        <FAQSection />
      </div>
    </div>
  );
}

export default Home;
