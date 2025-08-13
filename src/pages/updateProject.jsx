import React, { useState } from "react";

const UpdateProject = () => {
  const [updatetDetails, setUpdateDetails] = useState({
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
      !updatetDetails.title||
      !updatetDetails.description ||
      !updatetDetails.member ||
      !updatetDetails.deadline ||
      !updatetDetails.owner ||
      !updatetDetails.team ||
      !updatetDetails.task ||
      !updatetDetails.status

      
      
    ) {
      alert("Please fill in all fields");
      return;
    }

    alert(
      `Project Title:${updatetDetails.title}\n` +
      `Description:${updatetDetails.description}\n` + 
       `Member:${updatetDetails.member}\n` +
      `Deadline:${updatetDetails.deadline}\n` +
      `Owner:${updatetDetails.owner}\n` +
      `Team:${updatetDetails.team}\n` +
      `Task:${updatetDetails.task}\n` +
      `Status:${updatetDetails.status}`


    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="py-6 text-center">
          <h2 className="text-3xl font-bold">Update Project</h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details below to update the project.
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
                value={updatetDetails.title}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.description}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.member}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.deadline}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.owner}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.team}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.task}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
                value={updatetDetails.status}
                onChange={(e) =>
                  setUpdateDetails({
                    ...updatetDetails,
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
             Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
