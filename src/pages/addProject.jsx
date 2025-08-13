import React, { useState } from "react";

const AddProject = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    description: "", 
    member: "",
    deadline: "",
    owner: "",
    team: "",
    task: "",
    status: "",
  });

  const handle = (event) => {
    event.preventDefault();

    if (
      !projectDetails.title||
      !projectDetails.description ||
      !projectDetails.member ||
      !projectDetails.deadline ||
      !projectDetails.owner ||
      !projectDetails.team ||
      !projectDetails.task ||
      !projectDetails.status
      
    ) {
      alert("Please fill in all fields");
      return;
    }

    alert(
      `Project Title:${projectDetails.title}\n` +
      `Description:${projectDetails.description}\n` +
      `Member:${projectDetails.member}\n` +   
      `Deadline:${projectDetails.deadline}\n` +
      `Owner:${projectDetails.owner}\n` +

      `Team:${projectDetails.team}\n` +
      `Task:${projectDetails.task}\n` +
      `Status:${projectDetails.status}`

    );
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
            {/* Team Name */}
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

            {/* Team Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                 Description
              </label>
              <textarea
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your projrct"
                value={projectDetails.description}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Member */}
            <div className="mb-6">  
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Member
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Member Name"
                value={projectDetails.member}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    member: e.target.value,
                  })
                }
              />
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
            {/* Owner */}
            <div className="mb-6">
                
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Owner
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Owner Name"
                value={projectDetails.owner}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    owner: e.target.value,
                  })
                }

              />
            </div>
            {/* Team */}
            <div className="mb-6">
                
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Team
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Team Name"
                value={projectDetails.team}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    team: e.target.value,
                  })
                }
              />
            </div>
            {/* Task */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Task
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Task Name"
                value={projectDetails.task}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    task: e.target.value,
                  })
                }
              />
            </div>
            {/* Status */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Status
              </label>
              <select
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={projectDetails.status}
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    status: e.target.value,
                  })
                }
              >
                <option value="">Select Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
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
