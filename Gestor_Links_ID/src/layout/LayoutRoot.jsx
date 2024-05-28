import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

let LayoutRoot = () =>{
    return  <>
                <Navbar />
                <Outlet />
                <Footer></Footer>
            </>
}

export default LayoutRoot