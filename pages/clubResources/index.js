import Sidebar from "@/components/sidebar";
import React, { useEffect, useState } from "react";
import UserTable from "@/components/UserTable";
import SupervisorTable from "@/components/UserTable";
import Card from "@/components/Card";
import ProjectSection from "@/components/ProjectSection";

function Club() {
  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "/Login";
    }
  }, []);

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  }, []);

  const users = usersData.filter((user) => user.role === "user");
  const supervisors = usersData.filter((user) => user.role === "supervisor");

  if (localStorage.getItem("loggedIn") === "true") {
    return (
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <div className="mb-4">
                <SupervisorTable data={supervisors} title="Supervisors" />
              </div>
              <UserTable data={users} title="Members" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <Card
                title="Club Resources"
                description="This is where you can find some club resources like docs, videos, chats, etc..."
                href="/clubResources"
              />
              <Card
                title="Ideation"
                description="This is where you can place an idea for an AI project you might want to build. THERE ARE NO BAD IDEAS."
                href="/clubResources/ideation"
              />
              <Card
                title="Team Board"
                description="This where we plan out our ideas for projects were working. Our organization board."
                href="/clubResources/teamBoard"
              />
              <Card
                title="Learning"
                description="This is where you can learn all the new tech and how to do AI."
                href="/clubResources/learning"
              />
            </div>
          </div>
          <div className="w-full">
            <ProjectSection />
          </div>
        </div>
      </div>
    );
  }
}

export default Club;
