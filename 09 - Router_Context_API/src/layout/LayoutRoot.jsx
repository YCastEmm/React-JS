import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'

let LayoutRoot = () =>{
    return  <div className="container">
                <Navbar></Navbar>
                <h1>Header</h1>
                <Outlet></Outlet>
                <h1>Footer</h1>
            </div>
}

export default LayoutRoot