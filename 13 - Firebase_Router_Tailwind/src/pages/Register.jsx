import { useState } from "react";
import { register } from "../config/firebase";
import {useRedirectActiveUser} from '../hooks/useRedirectActiveUser'
import { useUserContext } from "../context/UserContext";
import {useForm} from 'react-hook-form'

const Register = () => {


    let {user} = useUserContext()
    useRedirectActiveUser(user, "/dashboard")

    const {register, handleSubmit, formState: {errors}} = useForm()


    let onSubmit = (data) => console.log(data);

    // let handleSubmit = async (e) =>{
    //     e.preventDefault()
    //     try {
    //         let credencialUser = await register({email, password});
    //         console.log(credencialUser);        
    //     } catch (error) {            
    //         console.log(error);
    //     }
    // }

    return <>
                <h2>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        {...register("email", {required: true})}/>                        
                        {errors.email && <p>Campo obligatorio</p>}
                    <input
                        type="text" 
                        {...register("password", {required: true})}/>
                        {errors.password && <p>Campo obligatorio</p>}

                    <input
                    type="text" 
                    {...register("repassword", {required: true})}/>
                        {errors.repassword && <p>Campo obligatorio</p>}

                    <button type="submit">Register</button>
                </form>
            </>
};

export default Register;
