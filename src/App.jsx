import Navbar from "./component/Navbar"
import EditProfile from "./pages/editProfile"
import Login from "./pages/login"
import Profile from "./pages/profile"
import AddTeam from "./pages/addTeam"
import Register from "./pages/register"
import AddProject from "./pages/addProject"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ForgotPassword from "./pages/forgotPassword"
import ResetPassword from "./pages/resetPassword"
import { store } from "./reduxTool/store"
import UpdateProject from "./pages/updateProject"
import UpdateTask from "./pages/updateTask"
import AddTask from "./pages/addTask"
import { Provider } from "react-redux"
import ViewAllProjects from "./pages/viewAllProjects"


function App() {
  

  return (
    <>
   <BrowserRouter>
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/resetPassword/:token" element={< ResetPassword/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/addteam" element={<AddTeam />} />
      <Route path="/addproject" element={<AddProject/>} />
      <Route path="/updateproject" element={<UpdateProject/>} />
      <Route path="/updatetask" element={<UpdateTask/>} />
      <Route path="/addtask" element={<AddTask/>} />
<Route path="/viewAllProjects" element={<ViewAllProjects/>} />
      </Routes>
   </Provider>
    
    </BrowserRouter>
  
    </>
  )
}

export default App
