import React, { useEffect, useState } from "react";
import axios from "axios";
import { addTask, fetchProject, getProjectById } from "../apiService/allApi";

const AddTask = () => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    projectId: "",
    assignedTo: "",
    dueDate: "",
  });

  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]); // <-- only members of the selected project

  const token = JSON.parse(localStorage.getItem("token"));
  const headers = { Authorization: `Bearer ${token}` };
 useEffect(() => {
    const loadProjects = async () => {
      try {
        const { data } = await fetchProject(headers);
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    loadProjects();
  }, []);

  // Fetch members when project changes
  useEffect(() => {
    const loadMembers = async () => {
      if (taskDetails.projectId) {
        console.log("Fetching members for project:", taskDetails.projectId);
        try {
          const { data } = await getProjectById(taskDetails.projectId, headers);
          setMembers(data.members || []);
        } catch (err) {
          console.error("Error fetching members:", err);
        }
      } else {
        setMembers([]);
      }
    };
    loadMembers();
  }, [taskDetails.projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskDetails.title || !taskDetails.projectId) {
      alert("Title and Project are required");
      return;
    }

    try {
      await addTask(taskDetails,headers);
      alert("Task created successfully!");
      setTaskDetails({
        title: "",
        description: "",
        projectId: "",
        assignedTo: "",
        dueDate: "",
      });
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Failed to create task");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="py-6 text-center">
          <h2 className="text-3xl font-bold">Add Task</h2>
          <p className="text-gray-500 text-sm mt-1">Assign a task to a project.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* Title */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={taskDetails.title}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, title: e.target.value })
              }
              className="w-full border rounded-lg p-2"
              placeholder="Task title"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={taskDetails.description}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, description: e.target.value })
              }
              className="w-full border rounded-lg p-2"
              placeholder="Task description"
            ></textarea>
          </div>

          {/* Project */}
           <div className="mb-4">
            {/* <label className="block mb-2 text-sm font-medium text-gray-700">
              Project
            </label>
            <select
              value={taskDetails.projectId}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, projectId: e.target.value })
              }
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select project</option>
              {projects.map((proj) => (
                <option key={proj._id} value={proj._id}>
                  {proj.title}
                </option>
              ))}
            </select> */}
           
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Project
            </label>
            <select
              value={taskDetails.projectId}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, projectId: e.target.value })
              }
              className="w-full border rounded-lg p-2"
            >
              <option value="">Select project</option>
              {/* Check if projects is an array and not empty before mapping */}
              {Array.isArray(projects) && projects.length > 0 && projects.map((proj) => (
                <option key={proj._id} value={proj._id}>
                  {proj.title}
                </option>
              ))}
            </select>
          </div> 

          {/* Assign To (members only) */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Assign To
            </label>
            <select
              value={taskDetails.assignedTo}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, assignedTo: e.target.value })
              }
              className="w-full border rounded-lg p-2"
              disabled={!members.length}
            >
              <option value="">Select member</option>
              {members.map((member) => (
                <option key={member._id} value={member._id}>
                  {member.name}
                </option>
              ))}
            </select>
            {!members.length && taskDetails.projectId && (
              <p className="text-xs text-gray-500">No members found for this project</p>
            )}
          </div>

          {/* Due Date */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              value={taskDetails.dueDate}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, dueDate: e.target.value })
              }
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
