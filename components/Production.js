import React, { useState } from "react";

function Test({ post }) {
  const [showEditModal, setEditShowModal] = React.useState(false);
  const [completion, setCompletion] = useState(post.data.completion);
  const [level, setLevel] = useState(post.data.level);
  const [description, setDescription] = useState(post.data.description);
  const [title, setTitle] = useState(post.data.title);
  const options = ["Markup", "Development", "Test", "Production"];
  const levels = ["To Do", "In Progress", "Done"];
  const titles = ["Raider Bot", "Other"];

  const onOptionChangeHandlerLevel = (event) => {
    setLevel(event.target.value);
  };

  const onOptionChangeHandlerCompletion = (event) => {
    setCompletion(event.target.value);
  };

  const onOptionChangeHandlerTitle = (event) => {
    setTitle(event.target.value);
  };

  const deleteBoard = (id) => {
    fetch("../api/deleteBoard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _method: "DELETE", id }),
    })
      .then((response) => response.json())

      .catch((error) => {
        console.error("Error:", error);
      });

    setEditShowModal(false);
    alert("post deleted");
    window.location.reload();
  };

  const handleClick = () => {
    if (title == undefined || description == undefined) {
      alert("fill out all the forms");
      return;
    }
    const createdAt = new Date();

    fetch("/api/editBoard", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: post.ref["@ref"].id, // pass the id of the idea to be updated
        title,
        description,
        level: level,
        completion: completion,
        creator: post.data.creator,
        createdAt: createdAt,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });

    setEditShowModal(false);
    alert("post updated");
    window.location.reload();
  };

  if (post.data.level == "Production") {
    return (
      <div>
        <div class="flex flex-col pb-2 overflow-auto">
          {post.level != "done" ? (
            <div
              class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
              draggable="true"
            >
              <button
                class="absolute top-0 right-0 flex items-center justify-center  w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
                onClick={() => setEditShowModal(true)}
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              {post.data.completion == "To Do" ? (
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-red-500 bg-red-100 rounded-full">
                  {post.data.completion}
                </span>
              ) : null}

              {post.data.completion == "In Progress" ? (
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-full">
                  {post.data.completion}
                </span>
              ) : null}
              {post.data.completion == "Done" ? (
                <span class="flex items-center h-6 px-3 text-xs font-semibold text-green-500 bg-green-100 rounded-full">
                  {post.data.completion}
                </span>
              ) : null}

              <h4 class="mt-2 text-md font-bold underline ">
                {post.data.title}
              </h4>
              <h4 class="mt-1 text-sm font-medium">{post.data.description}</h4>
              <p className="text-gray-700 text-sm">
                Updated At:{" "}
                {new Date(post.data.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          ) : null}

          {showEditModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Edit Task</h3>
                      <div className="border-solid rounded-b pl-4">
                        {" "}
                        <button
                          className="bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => deleteBoard(post.ref["@ref"].id)}
                        >
                          Delete task
                        </button>
                      </div>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setEditShowModal(false)}
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
                      <option>{post.data.level}</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                    <br />
                    <select
                      onChange={onOptionChangeHandlerCompletion}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option>{post.data.completion}</option>
                      {levels.map((level, index) => {
                        return <option key={index}>{level}</option>;
                      })}
                    </select>
                    <br />
                    <select
                      onChange={onOptionChangeHandlerTitle}
                      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option>{post.data.title}</option>
                      {titles.map((title, index) => {
                        return <option key={index}>{title}</option>;
                      })}
                    </select>
                    <br />

                    <textarea
                      className="md:w-[643px] w-full md:h-[208px] h-[340px] resize-none focus:outline-none border border-gray-300 placeholder-gray-600 py-4 px-4"
                      placeholder="What's the New Task?"
                      value={description}
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
                        onClick={() => setEditShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() =>
                          handleClick({
                            description,
                            title,
                            level,
                            completion,
                            id: post.ref["@ref"].id,
                          })
                        }
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Test;
