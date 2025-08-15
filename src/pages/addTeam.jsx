import React, { useState, useEffect } from "react";
import { createTeam, fetchUserDetails } from "../apiService/allApi";

const AddTeam = () => {
  const [teamDetails, setTeamDetails] = useState({
    teamName: "",
    teamDescription: "",
    teamMembers: [], // store array of selected IDs
  });

  const [users, setUsers] = useState([]);
const token = JSON.parse(localStorage.getItem("token"));
      const headers = {
        // "content-type": "application/json",
        authorization: `Bearer ${token}`,
         }
  // Fetch registered members
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetchUserDetails();
        console.log(res);
       
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);



const handleSubmit = async (event) => {
  event.preventDefault();

  if (
    !teamDetails.teamName ||
    !teamDetails.teamDescription ||
    teamDetails.teamMembers.length === 0
  ) {
    alert("Please fill in all fields");
    return;
  }

  try {
    
    const res = await createTeam(teamDetails,headers);
    console.log(res);
      
alert("Team created successfully");
    // alert(res.data.message);
    // console.log(res.data.team);
  } catch (error) {
    console.error(error);
    alert("Error creating team");
  }
};


  const handleMemberChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setTeamDetails({ ...teamDetails, teamMembers: selectedOptions });
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
        <form onSubmit={handleSubmit}>
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
              <select
                multiple
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={teamDetails.teamMembers}
                onChange={handleMemberChange}
              >
                {users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>

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
