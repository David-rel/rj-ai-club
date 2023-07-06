// /components/IdeaModal.js
import React, { useEffect, useState } from "react";

export default function EditIdeaModal({ idea, onClose, onEditIdea }) {
  const [title, setTitle] = useState(idea.data.title);
  const [description, setDescription] = useState(idea.data.description);
  const [creator, setCreator] = useState(idea.data.creator);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "/Login";
    } else {
      setCreator(localStorage.getItem("username"));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/api/editIdea", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idea.ref["@ref"].id, // pass the id of the idea to be updated
        title,
        description,
        creator,
        createdAt: idea.data.createdAt,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          onEditIdea({
            ref: { ["@ref"]: { id: idea.ref["@ref"].id } },
            data: {
              title,
              description,
              creator,
              createdAt: idea.data.createdAt,
            },
          });
          onClose();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              id="modal-title"
            >
              Edit Idea
            </h3>
            <div className="mt-2">
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="mt-1 block w-full rounded-md shadow-sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mt-4"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="3"
                  className="mt-1 block w-full rounded-md shadow-sm"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
