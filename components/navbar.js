import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Sidebar = ({ isOpen, close }) => {
  const sidebarRef = useRef(); // Create a reference to the sidebar div
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      // Close sidebar if clicked on outside of element
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        close();
      }
    }

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  function logout() {
    // Remove the login status and username from the local storage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    // Optionally, you can redirect to the login page
    window.location.href = "/";
  }

  return (
    <div
      ref={sidebarRef} // Add the ref here
      className={`fixed inset-y-0 right-0 transform ease-in-out duration-500 sm:duration-700 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-30 w-56 px-4 sm:px-6 overflow-auto bg-gray-800 text-white`}
    >
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl">Navigation</h1>
        <button onClick={close} className="text-white">
          &#x2715;
        </button>
      </div>
      <div className="flex flex-col items-start">
        <Link href="/" legacyBehavior>
          <button onClick={close}>
            <a className="block px-2 py-1 text-white hover:text-blue-500">
              Home
            </a>
          </button>
        </Link>

        <Link href="/about" legacyBehavior>
          <button onClick={close}>
            <a className="block px-2 py-1 text-white hover:text-blue-500">
              About Us
            </a>
          </button>
        </Link>

        <Link href="/join" legacyBehavior>
          <button onClick={close}>
            <a className="block px-2 py-1 text-white hover:text-blue-500">
              Join
            </a>
          </button>
        </Link>
        <Link href="/whatIsAI" legacyBehavior>
          <button onClick={close}>
            <a className="block px-2 py-1 text-white hover:text-blue-500">
              What is AI
            </a>
          </button>
        </Link>
        <Link href="/projects" legacyBehavior>
          <button onClick={close}>
            <a className="block px-2 py-1 text-white hover:text-blue-500">
              Projects and Ideas
            </a>
          </button>
        </Link>
        <Link href="/clubResources" legacyBehavior>
          <button onClick={close}>
            <a className="block px-2 py-1 text-white hover:text-blue-500">
              Club Resources
            </a>
          </button>
        </Link>
      </div>
      <br />
      <div className="flex items-center">
        {!isLoggedIn ? (
          <Link
            href="/Login"
            className="text-md font-bold text-blue-600 dark:text-blue-500 hover:underline pl-4"
          >
            Login
          </Link>
        ) : (
          <div className="rounded-f text-white flex-none pl-2 font-bold text-lg">
            Hello, {localStorage.getItem("username")}
            <div className="pr-3">
              <button
                className="text-md font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => logout()}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <nav className="bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/" legacyBehavior>
                <a className="text-white mx-2 mr-8 hover:text-blue-500">Home</a>
              </Link>

              <Link href="/about" legacyBehavior>
                <a className="text-white mx-2 mr-8 hover:text-blue-500">
                  About Us
                </a>
              </Link>
            </div>

            <Link href="/join" legacyBehavior>
              <a className="text-white mx-2 mr-8 hidden md:block hover:text-blue-500">
                Join
              </a>
            </Link>
            <Link href="/whatIsAI" legacyBehavior>
              <a className="text-white mx-2 mr-8 hidden md:block hover:text-blue-500">
                What is AI
              </a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="text-white mx-2 mr-8 hover:text-blue-500 hidden md:block">
                Projects and Ideas
              </a>
            </Link>
            <Link href="/clubResources" legacyBehavior>
              <a className="text-white mx-2 mr-8 hover:text-blue-500 hidden md:block">
                Club Resources
              </a>
            </Link>
          </div>
          <div className="block md:hidden pt-4">
            <button onClick={() => setIsMenuOpen(true)}>
              <span className="block w-6 text-white text-2xl leading-none">
                &#9776;
              </span>
            </button>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
