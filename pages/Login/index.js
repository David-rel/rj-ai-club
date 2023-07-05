import { useEffect, useState } from "react";
import Image from "next/image";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("login in success");
      // Store the login status and username in the local storage
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", data.username);

      // Redirect to the home page
      window.location.href = "/";
    } else {
      // Handle login error
      alert(data.message);
    }
  };



  return (
    <div className="">
      <div className="h-full bg-gradient-to-tl from-blue-600 to-white-200 w-full py-16 px-4">
        <a className="flex flex-col items-center justify-center">
          <Image
            src={"/icon.png"}
            alt="Home Page"
            className="rounded-lg"
            width={150}
            height={100}
          />

          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
              role="heading"
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login To Your Account
            </p>

            <form onSubmit={handleLogin}>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mt-6  w-full">
                <label className="text-sm font-medium leading-none text-gray-800">
                  Password
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </a>
      </div>
    </div>
  );
}
