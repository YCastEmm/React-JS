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
            <button onClick={handleLogout}>Logout</button>
        </>;
};

export default Dashboard;
