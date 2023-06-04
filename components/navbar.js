import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ isOpen, close }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 transform ease-in-out duration-500 sm:duration-700 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-30 w-64 px-4 sm:px-6 overflow-auto bg-gray-800 text-white`}
    >
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl">Navigation</h1>
        <button onClick={close} className="text-white">
          &#x2715;
        </button>
      </div>
      <div>
        <Link href="/" legacyBehavior>
          <a className="block px-2 py-1 text-white hover:text-red-500">Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="block px-2 py-1 text-white hover:text-red-500">
            About Us
          </a>
        </Link>
        <Link href="/join" legacyBehavior>
          <a className="block px-2 py-1 text-white hover:text-red-500">Join</a>
        </Link>
        <Link href="/whatIsAI" legacyBehavior>
          <a className="block px-2 py-1 text-white hover:text-red-500">
            What is AI
          </a>
        </Link>
        <Link href="/projects" legacyBehavior>
          <a className="block px-2 py-1 text-white hover:text-red-500">
            Projects and Ideas
          </a>
        </Link>
        <Link href="/clubResources" legacyBehavior>
          <a className="block px-2 py-1 text-white hover:text-red-500">
            Club Resources
          </a>
        </Link>
      </div>
    </div>
  );
};





const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const path = router.asPath;

  const menuIcon = (
    <span className="block w-6 text-white text-2xl leading-none">&#9776;</span>
  );

  const closeIcon = (
    <span className="block w-6 text-white text-2xl leading-none">&#x2715;</span>
  );

  return (
    <nav className="bg-gray-700" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/" legacyBehavior>
                <a className="text-white mx-2 mr-8 hover:text-red-500">Home</a>
              </Link>

              <Link href="/about" legacyBehavior>
                <a className="text-white mx-2 mr-8 hover:text-red-500">
                  About Us
                </a>
              </Link>
            </div>

            <Link href="/join" legacyBehavior>
              <a className="text-white mx-2 mr-8 hidden md:block hover:text-red-500">
                Join
              </a>
            </Link>
            <Link href="/whatIsAI" legacyBehavior>
              <a className="text-white mx-2 mr-8 hidden md:block hover:text-red-500">
                What is AI
              </a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="text-white mx-2 mr-8 hover:text-red-500 hidden md:block">
                Projects and Ideas
              </a>
            </Link>
            <Link href="/clubResources" legacyBehavior>
              <a className="text-white mx-2 mr-8 hover:text-red-500 hidden md:block">
                Club Resources
              </a>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden my-2">
            {path == "/TeamResources/Scouter" ||
            path == "/TeamResources/Scouter/Scout" ? (
              <SearchBar />
            ) : null}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
            >
              {isMenuOpen ? closeIcon : menuIcon}
            </button>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
