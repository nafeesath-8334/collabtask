import React, { useState } from "react";

const AddTeam = () => {
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    teamDescription: "",
    teamMembers: "",
  });

  const handle = (event) => {
    event.preventDefault();

    if (
      !teamDetails.teamName ||
      !teamDetails.teamDescription ||
      !teamDetails.teamMembers
    ) {
      alert("Please fill in all fields");
      return;
    }

    alert(
      `Team Name: ${teamDetails.teamName}\n` +
        `Team Description: ${teamDetails.teamDescription}\n` +
        `Team Members: ${teamDetails.teamMembers}`
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="py-6 text-center">
          <h2 className="text-3xl font-bold">Add Team</h2>
          <p className="text-gray-500 text-sm mt-1">
            Create a new team to collaborate on tasks
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handle}>
          <div className="p-8">
            {/* Team Name */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Team Name
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter team name"
                value={teamDetails.teamName}
                onChange={(e) =>
                  setTeamDetails({ ...teamDetails, teamName: e.target.value })
                }
              />
            </div>

            {/* Team Description */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Team Description
              </label>
              <textarea
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your team"
                value={teamDetails.teamDescription}
                onChange={(e) =>
                  setTeamDetails({
                    ...teamDetails,
                    teamDescription: e.target.value,
                  })
                }
              ></textarea>
            </div>

            {/* Team Members */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium text-sm mb-2">
                Team Members
              </label>
              <input
                type="text"
                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Comma-separated member names"
                value={teamDetails.teamMembers}
                onChange={(e) =>
                  setTeamDetails({
                    ...teamDetails,
                    teamMembers: e.target.value,
                  })
                }
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
            >
              Create Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTeam;
