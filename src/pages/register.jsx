import React, { useState } from "react";
import { register } from "../apiService/allApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        role:"",
    });

    const handle = async (event) => {
        event.preventDefault();

        // Validation for all fields
        if (
            !userDetails.name ||
             !userDetails.email ||
            !userDetails.password ||
            !userDetails.role
        ) {
            alert("Please fill in all fields");
            return;
        }

        // Display form data
        alert(
            `First Name: ${userDetails.name}\n` +
            `Email: ${userDetails.email}\n` +
            `Password: ${userDetails.password}\n` +
            `Member: ${userDetails.role}`
        );
         try {
      const result = await register(userDetails);
      if (result.status === 201) {
        alert("Registration successful");
        navigate("/login");
      }
    } catch (error) {
        console.error("Registration failed:", error);
      return error;
    }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="py-6 text-center">
                    <h2 className="text-3xl font-bold"> Registration Form</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        Create your account to get started
                    </p>
                </div>



                {/* Form */}
                <form onSubmit={handle}>
                    <div className="p-8">
                        {/* Name fields in two columns */}
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="flex-1">
                                <label className="block text-gray-700 font-medium text-sm mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first"
                                    className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="John"
                                    value={userDetails.nameame}
                                    onChange={(e) =>
                                        setUserDetails({ ...userDetails, name: e.target.value })
                                    }
                                />
                            </div>

                            
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="your@email.com"
                                value={userDetails.email}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, email: e.target.value })
                                }
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    name="pswrd"
                                    maxLength="10"
                                    className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="••••••••"
                                    value={userDetails.password}
                                    onChange={(e) =>
                                        setUserDetails({ ...userDetails, password: e.target.value })
                                    }
                                />
                                <div className="absolute right-3 text-xs text-gray-400 top-1/2 transform -translate-y-1/2">
                                    Max 10 characters
                                </div>
                            </div>
                        </div>

                        {/* Member Select */}
                        <div className="mb-8">
                            <label className="block text-gray-700 font-medium text-sm mb-2">
                                Member
                            </label>
                            <select
                                name="member"
                                className="w-full pl-3 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={userDetails.role}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, role: e.target.value })
                                }
                            >
                                <option value="">Select Member</option>
                                <option value="Admin">Admin</option>
                                <option value="Member">Member</option>

                            </select>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 shadow-md hover:shadow-lg"
                        >
                            Create Account
                        </button>

                        {/* Login link */}
                        <div className="mt-4 text-center text-sm text-gray-600">
                            Already have an account?
                            <a
                                href="login"
                                className="ml-1 text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Sign in
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
