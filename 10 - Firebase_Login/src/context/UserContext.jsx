import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";


const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);

    useEffect(() =>{
        let unsuscribe = onAuthStateChanged(auth, (user) =>{
            console.log(user);
            setUser(user)
        })
        return unsuscribe
    },[])

    if(user === false) return <h3>Loading app</h3>

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
