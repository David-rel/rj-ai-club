import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  function logout() {
    // Remove the login status and username from the local storage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    // Optionally, you can redirect to the login page
    window.location.href = "/";
  }

  return (
    <header className="bg-gray-900 border-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={"/icon.png"}
            className="w-10 h-10 mr-4 rounded"
            alt="Home Page"
            width={50}
            height={100}
          />
          <h1 className="text-xl font-bold  sm:block text-white font-kanit">
            <Link href="https://www.regisjesuit.com/">
              RJHS AI Engineering Club
            </Link>
          </h1>

          <p className="ml-4 text-sm hidden lg:block text-white font-maven">
            <Link href="https://www.google.com/maps/place/6300+S+Lewiston+Way,+Aurora,+CO+80016/@39.6011631,-104.8005882,17z/data=!3m1!4b1!4m5!3m4!1s0x876c88d4a3602fc3:0x4e5549fd92d581c!8m2!3d39.601159!4d-104.7983995">
              6400 S Lewiston Way, Aurora, CO 80016
            </Link>
          </p>
        </div>
        <div className="items-center hidden md:block font-kanit">
          {!isLoggedIn ? (
            <Link
              href="/Login"
              className="text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline "
            >
              Login
            </Link>
          ) : (
            <div className="rounded-f text-white flex pr-1 font-kanit text-lg">
              Hello, {localStorage.getItem("username")}
              <div className="pl-3">
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
    </header>
  );
};

export default Header;
