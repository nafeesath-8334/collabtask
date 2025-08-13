import { useState } from "react"
import Navbar from "../component/Navbar"




const Profile = () => {
   
    const [user, setUser] = useState({})
    const [img, setImg] = useState("")
    const [isLoading, setIsLoading] = useState(true)
 

    return (
    <>
   
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            {/* User Profile Section */}
          
                 <div className="py-6 text-center">
                    <h2 className="text-3xl font-bold">My Profile</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        View and edit your profile details</p>
                </div>
                
                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="h-36 w-36 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                                {img ? (
                                    <img
                                        src={`http://localhost:3000${img}`}
                                        alt={user?.FirstName || "User"}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* User Details */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-xl font-bold text-gray-500">{user?.FirstName || "User Name"}</h2>
                            <p className="text-gray-400 mb-2">{user?.email || "Email"}</p>
                            <p className="text-gray-400 mb-4">{user?.member || "Member"}</p>
                            
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <button 
                                    className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition shadow-sm"
                                    onClick={() => alert("Edit Profile Clicked")}
                                >
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Profile
                                </button>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
                            
       
    

    </>
    )}
    

export default Profile