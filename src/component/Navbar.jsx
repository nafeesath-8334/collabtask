
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const handleLogout = () => {
    // Clear auth (example)
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              CollabTask
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/addProject" className="hover:text-indigo-400">Poject</Link>
            <Link to="/AddTask" className="hover:text-indigo-400">Tasks</Link>
            <Link to="/AddTeam" className="hover:text-indigo-400">Teams</Link>
            <Link to="/profile" className="hover:text-indigo-400">Profile</Link>
             <Link to="/viewAllProjects" className="hover:text-indigo-400">View</Link>
            <Link to="/login" className="hover:text-indigo-400">Logout</Link>
          </div>

          {/* Right: Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              
              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </Link>
                <button
                   onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700">
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="block px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Tasks
          </Link>
          <Link
            to="/teams"
            className="block px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Teams
          </Link>
          <Link
            to="/profile"
            className="block px-4 py-2 text-white hover:bg-gray-600"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-white hover:bg-gray-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
