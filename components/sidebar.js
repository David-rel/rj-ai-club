import Link from "next/link";
import { useState } from "react";
import {
  FaRobot,
  FaPlus,
  FaCode,
  FaDesktop,
  FaCompass,
  FaClipboard,
} from "react-icons/fa";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {!isSidebarOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-10 p-4 bg-black text-white opacity-80 rounded mt-14"
          onClick={toggleSidebar}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <div
        className={`fixed inset-y-0 h-screen z-10 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "bg-gray-700 left-0" : "-left-64"
        } md:bg-gray-700 border border-black md:static md:z-0 md:left-auto md:w-48 `}
      >
        {isSidebarOpen && (
          <div className="md:hidden fixed top-4 left-40 z-10">
            <button
              className="p-4 bg-black text-white  mt-14"
              onClick={toggleSidebar}
            >
              <svg
                className={`-rotate-180`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        {/* Your sidebar content */}
        <h1 className="text-xl font-bold p-4 text-white underline">
          Club Page
        </h1>
        <ul className="list-none text-white">
          <Link href="/clubResources">
            <li className="p-4">
              {" "}
              <div className="flex items-center hover:text-blue-500">
                <FaDesktop size="1.25em" />
                <span className="ml-2">Dashboard</span>
              </div>
            </li>
          </Link>
          <Link href="/clubResources/ideation">
            <li className="p-4">
              <div className="flex items-center hover:text-blue-500">
                <FaCompass size="1.25em" />
                <span className="ml-2">Ideation</span>
              </div>
            </li>
          </Link>
          <Link href="/clubResources/teamBoard">
            <li className="p-4">
              {" "}
              <div className="flex items-center hover:text-blue-500">
                <FaClipboard size="1.25em" />
                <span className="ml-2">Team Board</span>
              </div>
            </li>
          </Link>
          <Link href="/clubResources/learning">
            <li className="p-4">
              {" "}
              <div className="flex items-center hover:text-blue-500">
                <FaCode size="1.25em" />
                <span className="ml-2">Learning</span>
              </div>
            </li>
          </Link>
          <Link href="/clubResources/resources">
            <li className="p-4">
              {" "}
              <div className="flex items-center hover:text-blue-500">
                <FaRobot size="1.25em" />
                <span className="ml-2">Resources</span>
              </div>
            </li>
          </Link>
        </ul>{" "}
      </div>
    </div>
  );
}
