// /pages/ideation.js
import React, { useEffect, useState } from "react";
import IdeaModal from "@/components/IdeaModal";
import IdeaEditModal from "@/components/IdeaEditModal"
import Sidebar from "@/components/sidebar";
import Link from "next/link";

export default function Ideation() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [ideas, setIdeas] = useState([]); // This would typically come from a database or API
  const [creator, setCreator] = useState("");
  const [selectedIdea, setSelectedIdea] = useState(null);

  const openEditModal = (idea) => {
    setSelectedIdea(idea);
    setShowEditModal(true);
  };

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "/Login";
    } else {
      setCreator(localStorage.getItem("username"));
    }
  }, []);

const addIdea = (idea) => {
  const newIdea = {
    data: {
      title: idea.title,
      description: idea.description,
      creator: idea.creator,
      createdAt: idea.createdAt,
    },
  };
  setIdeas([newIdea, ...ideas]);
};

const editIdea = (updatedIdea) => {
  setIdeas(
    ideas.map((idea) => {
      if (idea.ref["@ref"].id === updatedIdea.ref["@ref"].id) {
        return updatedIdea;
      } else {
        return idea;
      }
    })
  );
};


  useEffect(() => {
    fetch("../api/getIdeas")
      .then((response) => response.json())
      .then((data) => setIdeas(data));
  }, []);



const deleteIdea = (id) => {
  fetch("../api/deleteIdea", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _method: "DELETE", id }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        // Remove the idea from the state
        setIdeas(ideas.filter((idea) => idea.ref["@ref"].id !== id));
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};



  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen py-2 pl-8 pr-8">
        <h1 className="text-3xl font-bold">Ideation</h1>
        {ideas.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ideas.map((idea, index) => (
              <div className="bg-white p-6 rounded-lg shadow-lg" key={index}>
                {idea && idea.data && (
                  <>
                    <h2 className="text-2xl font-bold mb-2 text-black">
                      {idea.data.title}
                    </h2>
                    <p className="text-gray-700 font-bold">
                      Creator: {idea.data.creator}
                    </p>
                    <p className="text-gray-700">{idea.data.description}</p>
                    <p className="text-gray-700">
                      Created At:{" "}
                      {new Date(idea.data.createdAt).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                    {idea.data.creator === localStorage.getItem("username") && (
                      <>
                        <button
                          className="bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          onClick={() => deleteIdea(idea.ref["@ref"].id)}
                        >
                          Delete
                        </button>
                        <button
                          className="bg-blue-500 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          onClick={() => openEditModal(idea)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        ) : null}
        <button
          onClick={() => setShowModal(true)}
          className={`mt-8 px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 ${
            ideas.length > 0 ? "" : "self-start"
          }`}
        >
          Create Idea
        </button>
        {showModal && (
          <IdeaModal onClose={() => setShowModal(false)} onAddIdea={addIdea} />
        )}
        {showEditModal && selectedIdea && (
          <IdeaEditModal
            onClose={() => setShowEditModal(false)}
            onEditIdea={editIdea}
            idea={selectedIdea}
          />
        )}
      </div>
    </div>
  );
}
