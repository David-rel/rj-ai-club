import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Markup from "@/components/Markup";
import Development from "@/components/Development";
import Test from "@/components/Test";
import Production from "@/components/Production";



function KanBan() {
  const [showModal, setShowModal] = React.useState(false);
  const [completion, setCompletion] = useState(null);
  const [level, setLevel] = useState(null);
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);
  const [data, setData] = useState([]);
  const options = ["Markup", "Development", "Test", "Production"];
  const levels = ["To Do", "In Progress", "Done"];

  const onOptionChangeHandlerLevel = (event) => {
    setLevel(event.target.value);
  };

  const onOptionChangeHandlerCompletion = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setCompletion(event.target.value);
  };

    useEffect(() => {
      fetch("/api/getBoard")
        .then((response) => response.json())
        .then((data) => setData(data));

      console.log(data);
    }, []);

    const addData = (idea) => {
      const newData = {
        data: {
          title: idea.title,
          description: idea.description,
          level: idea.level,
          completion: idea.completion,
          createdAt: idea.createdAt,
        },
      };
      setData([newData, ...data]);
    };


      const handleSubmit = () => {
        if (
          title == undefined ||
          description == undefined ||
          level == undefined ||
          completion == undefined
        ) {
      alert("fill out all the forms");
          return;
        }
        const createdAt = new Date();

        fetch("/api/createBoard", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            level,
            completion,
            createdAt,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message) {
              addData({ title, description, level, completion, createdAt });
              setShowModal(false);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };






  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
    } else {
      window.location.href = "/Login";
    }
  }, []);





  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-600 to-white-200">
          <div class="px-10 mt-6">
            <h1 class="text-2xl font-bold">Team Board</h1>
          </div>
          <div class="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
            <div class="flex flex-col flex-shrink-0 w-72">
              <div class="flex items-center flex-shrink-0 h-10 px-2">
                <span class="block text-sm font-semibold">Markup</span>
                {/* <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">6</span> */}
                <button
                  class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>

              {data && (
                <div>
                  {data.map((post) => (
                    <Markup key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>

            <div class="flex flex-col flex-shrink-0 w-72">
              <div class="flex items-center flex-shrink-0 h-10 px-2">
                <span class="block text-sm font-semibold">Development</span>
                {/* <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span> */}
                <button
                  class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>

              {data && (
                <div>
                  {data.map((post) => (
                    <Development key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>

            <div class="flex flex-col flex-shrink-0 w-72">
              <div class="flex items-center flex-shrink-0 h-10 px-2">
                <span class="block text-sm font-semibold">Test</span>
                {/* <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">2</span> */}
                <button
                  class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>

              {data && (
                <div>
                  {data.map((post) => (
                    <Test key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>

            <div class="flex flex-col flex-shrink-0 w-72">
              <div class="flex items-center flex-shrink-0 h-10 px-2">
                <span class="block text-sm font-semibold">Production</span>
                {/* <span class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">3</span> */}
                <button
                  class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                  onClick={() => setShowModal(true)}
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>

              {data && (
                <div>
                  {data.map((post) => (
                    <Production key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create the Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <br />
                {/*body*/}
                <select
                  onChange={onOptionChangeHandlerLevel}
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Level</option>
                  {options.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </select>
                <br />
                <select
                  onChange={onOptionChangeHandlerCompletion}
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option>Completion</option>
                  {levels.map((level, index) => {
                    return <option key={index}>{level}</option>;
                  })}
                </select>
                <br />

                <input
                  placeholder="What's the Title?"
                  className="md:w-[643px] w-full md:h-[50px] h-[50px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <br />
                <textarea
                  className="md:w-[643px] w-full md:h-[208px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                  placeholder="What's the Description?"
                  defaultValue={""}
                  // value= {description || ""}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>
                      handleSubmit({
                        description,
                        title,
                        level,
                        completion,
                      })
                    }
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default KanBan;
