import { useState } from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const Register = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    let { user } = useUserContext();
    useRedirectActiveUser(user, "/dashboard");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let credencialUser = await register({ email, password });
            console.log(credencialUser);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box sx={{ mt: "1rem", maxWidth: "400px", mx: "auto", textAlign: "center" }}>
            <Avatar>
                <PermIdentityIcon></PermIdentityIcon>
            </Avatar>
            <Typography variant="h5" component="h1" sx={{ textAlign: "left", my: "24px" }}>
                Register
            </Typography>{" "}



            <Box sx={{mt:"1"}} component="form" onSubmit={handleSubmit}>  

                <TextField 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    id="email"
                    fullWidth
                    sx={{mb:"14px"}}
                />
                <TextField 
                    type="text" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    id="password"
                    fullWidth
                    sx={{mb:"14px"}}
                />

                <LoadingButton variant="contained" type="submit"  fullWidth sx={{mb:"14px"}}>Registrarse</LoadingButton>


            </Box>
        </Box>
    );
};

export default Register;
