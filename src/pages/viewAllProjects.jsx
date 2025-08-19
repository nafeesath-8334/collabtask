import { useState, useEffect } from "react";
import { fetchProject } from "../apiService/allApi";
import AddTeam from "./addTeam";
import AddTask from "./addTask";


const ViewAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // "team" or "task"
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const headers = { authorization: `Bearer ${token}` };
      const res = await fetchProject(headers);
      setProjects(res.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (projectId, type) => {
    setSelectedProjectId(projectId);
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProjectId(null);
    setModalType(null);
    getProjects(); // refresh after closing modal
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-600">Owner: {project.owner?.name}</p>

              {/* ✅ Show Team */}
              {project.team ? (
                <div className="mt-2">
                  <h3 className="text-md font-semibold">Team:</h3>
                  <p className="text-gray-700">{project.team.name}</p>
                </div>
              ) : (
                <p className="text-gray-500">No team added yet.</p>
              )}

              {/* ✅ Show Tasks */}
              {project.tasks && project.tasks.length > 0 ? (
                <div className="mt-2">
                  <h3 className="text-md font-semibold">Tasks:</h3>
                  <ul className="list-disc pl-5">
                    {project.tasks.map((task) => (
                      <li key={task._id} className="text-gray-700">
                        <span className="font-medium">{task.title}</span> –
                        <span className="text-sm text-gray-500">{task.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-500">No tasks added yet.</p>
              )}


              <p className="text-gray-600">
                Deadline: {new Date(project.deadline).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                Created At: {new Date(project.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Status: {project.status}</p>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleOpenModal(project._id, "team")}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add Team
                </button>
                <button
                  onClick={() => handleOpenModal(project._id, "task")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No projects found.</p>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            {modalType === "team" && (
              <AddTeam projectId={selectedProjectId} onClose={handleCloseModal} />
            )}
            {modalType === "task" && (
              <AddTask projectId={selectedProjectId} onClose={handleCloseModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAllProjects;
