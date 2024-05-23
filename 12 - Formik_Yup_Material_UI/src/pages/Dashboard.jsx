import { Button } from "@mui/material";
import { logout } from "../config/firebase";

const Dashboard = () => {

    let handleLogout = async () =>{
        try {
            await logout()
        } catch (error) {
            console.log(error);
        }
    }

    return <>
            <h2>Dashboard</h2>
            <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </>;
};

export default Dashboard;
