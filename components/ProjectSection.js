import Link from "next/link";
import { useEffect, useState } from "react";

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [tasks, setTasks] = useState({ toDo: [], inProgress: [] });
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("/api/getBoard")
      .then((response) => response.json())
      .then((data) => {
        setAllData(data);
        filterTasks(data);
      });
  }, []);

  const filterTasks = (data) => {
    const toDoTasks = data.filter(
      (form) =>
        form.data.completion === "To Do" &&
        (selectedProject === "All Projects" ||
          form.data.title === selectedProject)
    );
    const inProgressTasks = data.filter(
      (form) =>
        form.data.completion === "In Progress" &&
        (selectedProject === "All Projects" ||
          form.data.title === selectedProject)
    );

    setTasks({ toDo: toDoTasks, inProgress: inProgressTasks });
  };

  useEffect(() => {
    filterTasks(allData);
  }, [selectedProject]);

  // Change your handleSelect function to:
  const handleSelect = (e) => {
    setSelectedProject(e.target.value);
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Project Section
      </h1>
      <div className="mb-4">
        <label
          className="block text-gray-800 text-sm font-bold mb-2"
          htmlFor="project-select"
        >
          Select a Project:
        </label>
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="project-select"
          value={selectedProject}
          onChange={handleSelect}
        >
          <option value="">--Please choose a project--</option>
          <option value="Raider Bot">Raider Bot</option>
          <option value="Other">Other</option>
          {/* Add more projects here */}
        </select>
      </div>
      <div>
        <p>Selected Project: {selectedProject}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-white">
          <div class="md:col-span-2 xl:col-span-1">
            <div class="rounded bg-gray-800 p-3">
              <div class="flex justify-between py-1 text-white">
                <h3 class="text-sm font-semibold">Tasks not started yet</h3>
              </div>

              <div class="text-sm text-gray-50 mt-2">
                {tasks.toDo &&
                  tasks.toDo.map((form, index) => (
                    <Link href="/clubResources/teamBoard" key={index}>
                      <div>
                        <div class="bg-gray-600 hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-900 cursor-pointer">
                          <p className="font-semibold">{form.data.title}</p>{" "}
                          {form.data.description}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <div class="md:col-span-2 xl:col-span-1">
            <div class="rounded bg-gray-800 p-3">
              <div class="flex justify-between py-1 text-white">
                <h3 class="text-sm font-semibold">Tasks in Progress</h3>
              </div>

              <div class="text-sm text-gray-50 mt-2">
                {tasks.inProgress &&
                  tasks.inProgress.map((form, index) => (
                    <Link href="/clubResources/teamBoard" key={index}>
                      <div>
                        <div class="bg-gray-600 hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-900 cursor-pointer">
                          <p className="font-semibold">{form.data.title}</p>{" "}
                          {form.data.description}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
