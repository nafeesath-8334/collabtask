import Navbar from "../component/Navbar"




const Home=()=>{
    
   
    return(
        <><Navbar/>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Welcome to CollabTask</h1>
                <p className="text-gray-600 mb-6">Your one-stop solution for team collaboration and project management.</p>
                
            </div>
            
           
            </>
    )
}
export default Home