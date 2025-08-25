import React, { useEffect, useState } from "react";
import { fetchProjectByUserId } from "../apiService/allApi";

const MyWork = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
  const userId = userCredentials?.id;
  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    const fetchMyWork = async () => {
      try {
        const res = await fetchProjectByUserId(userId, headers);
        console.log(res);
        setProjects(res.data.projects);
        setTasks(res.data.tasks);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMyWork();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Projects</h2>
      <ul className="mb-6">
        {projects.length === 0 ? (
          <li>No projects found.</li>
        ) : (
          projects.map((p) => (
            <li key={p._id} className="border p-2 rounded mb-2">
              {p.title}<br/> {p.description}<br/>
              <span className="text-sm text-gray-500">
                Status: {p.status} |
              </span>
              <br />
               <span className="text-sm text-gray-500">
                Priority: {p.priority}
              </span>
              <br />
              
              <span className="text-sm text-gray-500">
                Due Date: {p.dueDate ? new Date(p.dueDate).toLocaleDateString() : "No due date"}
              </span>
              <br />
              
              
              <span className="text-sm text-gray-500">
                Tasks: {p.tasks?.length || 0}

              </span>
              <br />
             
            </li>
          ))
        )}
      </ul>

      <h2 className="text-xl font-bold mb-4">My Tasks</h2>
      <ul>
        {tasks.length === 0 ? (
          <li>No tasks found.</li>
        ) : (
          tasks.map((t) => (
            <li key={t._id} className="border p-2 rounded mb-2">
              <strong>{t.title}</strong> - {t.status} <br /> {t.priority} <br/> {t.dueDate ? new Date(t.dueDate).toLocaleDateString() : "No due date"}
              <span className="text-sm text-gray-500">
                Project: {t.project?.title || "N/A"}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MyWork;
