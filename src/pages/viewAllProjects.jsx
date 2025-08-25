import { useState, useEffect } from "react";
import { fetchProject } from "../apiService/allApi";
import AddTeam from "./addTeam";
import AddTask from "./addTask";
import UpdateProject from "./updateProject";
import UpdateTask from "./updateTask";
import { CiEdit } from "react-icons/ci";
import { GoPersonFill } from "react-icons/go";
import { GrGroup } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { FiClock } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { AiTwotoneFileAdd } from "react-icons/ai";
import { VscPersonAdd } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import UpdateTeam from "./updateTeam";

const ViewAllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
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

  const handleOpenModal = (id, type) => {
    setSelectedProjectId(id);
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProjectId(null);
    setModalType(null);
    getProjects();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📂 All Projects</h1><button><IoAddCircleOutline className="w-6 h-5" />Add Projects</button>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading projects...</p>
      ) : projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
            >
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  {project.title}
                  <button
                    onClick={() => handleOpenModal(project._id, "project")}
                    className="text-gray-600 hover:text-gray-900"
                    aria-label="Edit Project"
                  >
                    <CiEdit className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleOpenModal(project._id, "project")}
                    className="text-gray-600 hover:text-gray-900"
                    aria-label="Edit Project"
                  >
                    <MdDelete className="w-6 h-5" />
                  </button>
                </h2>
              </div>
              <p className="text-gray-600 mt-1">{project.description}</p>

              <div className="flex items-center space-x-2 mt-2">
                <GoPersonFill className="w-5 h-5 text-gray-500" />
                <p className="text-sm text-gray-500">{project.owner?.name}</p>
              </div>

              {/* Team */}
              <div className="mt-4 ">
               
                 <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-1"> <GrGroup className="w-6 h-6 text-gray-700" />Team <button
                  onClick={() => handleOpenModal(project._id, "addteam")}
                  className="   px-4 py-2 rounded-lg shadow"
                >
                 <VscPersonAdd className="w-6 h-5" />
                </button>  <button
                    onClick={() => handleOpenModal(project._id, "updateteam")}
                    className="text-gray-600 hover:text-gray-900"
                    aria-label="Edit team"
                  >
                    <CiEdit className="w-6 h-6" />
                  </button><button
                    onClick={() => handleOpenModal(project._id, "project")}
                    className="text-gray-600 hover:text-gray-900"
                    aria-label="deleteteam"
                  >
                    <MdDelete className="w-6 h-5" />
                  </button> </h3>
                <div className="ml-2 ">
                  {project.team ? (
                    <div className="bg-gray-50 p-3 rounded-md mt-1">
                      <p className="text-gray-700 font-medium">
                        {project.team.name} – <span className="text-sm">{project.team.description}</span>
                      </p>
                      {project.team.members?.length > 0 ? (
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          {project.team.members.map((m) => (
                            <li key={m._id} className="text-gray-700">
                              {m.user?.name}
                              <span className="ml-2 px-2 py-0.5 text-xs rounded bg-gray-200 text-gray-600">
                                {m.role}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 text-sm">No team members yet.</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No team added yet.</p>
                  )}
                </div>
              </div>

              {/* Tasks */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-1">
                  <BiTask /> Tasks<button
                  onClick={() => handleOpenModal(project._id, "addTask")}
                  className=" px-4 py-2 rounded-lg shadow"
                >
                  <AiTwotoneFileAdd className="w-6 h-5" />
                </button>
                </h3>
                {project.tasks?.length > 0 ? (
                  <ul className="space-y-2 mt-2">
                    {project.tasks.map((task) => (
                      <li
                        key={task._id}
                        className="bg-gray-50 p-3 rounded-md flex justify-between items-center hover:bg-gray-100"
                      >
                        <span>
                          <span className="font-medium text-gray-800">{task.title}</span>{" "}
                          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-gray-200 text-gray-700">
                            {task.status}
                          </span>
                          <div className="text-sm text-gray-500">
                            Assigned: {task.assignedTo?.name || "Unassigned"}
                          </div>
                        </span>
                        <button
                          onClick={() => handleOpenModal(task._id, "updateTask")}
                          className="ml-2 px-3 py-1 rounded-md shadow hover:bg-yellow-100"
                          aria-label="Edit Task"
                        >
                          <CiEdit className="w-5 h-5 text-yellow-600" />
                        </button><button
                    onClick={() => handleOpenModal(project._id, "project")}
                    className="text-gray-600 hover:text-gray-900"
                    aria-label="deletetask"
                  >
                    <MdDelete className="w-6 h-5" />
                  </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm mt-1">No tasks yet.</p>
                )}
              </div>

              {/* Dates & Status */}
              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p className="flex items-center gap-2">
                  <CgCalendarDates className="w-5 h-6" /> Deadline: {new Date(project.deadline).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                  <FiClock className="w-5 h-6" /> Created: {new Date(project.createdAt).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                  <FaRegBookmark className="w-5 h-5" /> Status:{" "}
                  <span className="ml-2 px-2 py-0.5 text-xs rounded bg-gray-200 text-gray-700">
                    {project.status}
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-5 flex-wrap">
               

                
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No projects found.</p>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg relative p-6">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
              aria-label="Close modal"
            >
              ✕
            </button>
            {modalType === "addteam" && <AddTeam projectId={selectedProjectId} onClose={handleCloseModal} />}
            {modalType === "updateteam" && <UpdateTeam projectId={selectedProjectId} onClose={handleCloseModal} />}
            {modalType === "addTask" && <AddTask projectId={selectedProjectId} onClose={handleCloseModal} />}
            {modalType === "project" && <UpdateProject projectId={selectedProjectId} onClose={handleCloseModal} />}
            {modalType === "updateTask" && <UpdateTask taskId={selectedProjectId} onClose={handleCloseModal} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAllProjects;
