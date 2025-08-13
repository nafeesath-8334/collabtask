import React, { useState } from "react";

const UpdateTask = () => {
  const [updateTaskDetails, setupdateTaskDetails] = useState({
    title: "",
    description: "",
    project: "",
    assignto: "",
    createdby: "",
    status: "",
    priority: "",
    duedate: "",
  });

  const handle = (event) => {
    event.preventDefault();

    if (
      !updateTaskDetails.title ||
      !updateTaskDetails.description ||
      !updateTaskDetails.project ||
      !updateTaskDetails.assignto ||
      !updateTaskDetails.createdby ||
      !updateTaskDetails.status ||
      !updateTaskDetails.priority ||
      !updateTaskDetails.duedate

      




    ) {
      alert("Please fill in all fields");
      return;
    }

    alert(
      `Project Title:${updateTaskDetails.title}\n` +
      `Description:${updateTaskDetails.description}\n` +
      `Project:${updateTaskDetails.project}\n` +
      `Assignto:${updateTaskDetails.assignto}\n` +
      `Createdby:${updateTaskDetails.createdby}\n` +
      `Status:${updateTaskDetails.status}\n` +
      `Priority:${updateTaskDetails.priority}\n` +
      `Duedate:${updateTaskDetails.duedate}`

    


    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="py-6 text-center">
          <h2 className="text-3xl font-bold">Update Task</h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill in the details below to update the task.
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
                value={updateTaskDetails.title}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
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
                value={updateTaskDetails.description}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Assignto */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                AssignTo
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Member Name"
                value={updateTaskDetails.assignto}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
                    assignto: e.target.value,
                  })
                }
              />
            </div>
            {/* Createdby */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                CreatedBy
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Member Name"
                value={updateTaskDetails.createdby}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
                    createdby: e.target.value,
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
                value={updateTaskDetails.status}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
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
            {/* Priority */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Priority
              </label>
              <select
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={updateTaskDetails.priority}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
                    priority: e.target.value,
                  })
                }
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            {/* Due Date */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Due Date
              </label>
              <input
                type="date"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={updateTaskDetails.duedate}
                onChange={(e) =>
                  setupdateTaskDetails({
                    ...updateTaskDetails,
                    duedate: e.target.value,
                  })
                }
              />
            </div>
 {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
