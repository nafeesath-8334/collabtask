import React, { useEffect, useState } from "react";
import { addProject } from "../apiService/allApi";

const AddProject = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const [team, setTeam] = useState([]);
  const [users, setUsers] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const headers = {
    authorization: `Bearer ${token}`,
  };

  

 


  const handle = async(event) => {
    event.preventDefault();

    if (!projectDetails.title || !projectDetails.description || !projectDetails.deadline) {
      alert("Please fill in all fields");
      return;
    }

    alert(
      `Project Title: ${projectDetails.title}\n` +
        `Description: ${projectDetails.description}\n` +
        `Deadline: ${projectDetails.deadline}`
    );
    try {
      // Call API to add project
      const result= await addProject(projectDetails, headers);
      console.log(result);
      alert("Project created successfully");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Error creating project");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="py-6 text-center">
          <h2 className="text-3xl font-bold">Add Project</h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details below to create a new project.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handle}>
          <div className="p-8">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Title
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Title"
                value={projectDetails.title}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    title: e.target.value,
                  })
                }
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Description
              </label>
              <textarea
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project"
                value={projectDetails.description}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Deadline */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Deadline
              </label>
              <input
                type="date"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={projectDetails.deadline}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    deadline: e.target.value,
                  })
                }
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;

