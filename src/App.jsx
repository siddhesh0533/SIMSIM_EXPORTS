import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default App
