import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


export let useRedirectActiveUser = (user, path ) =>{
    let navigate = useNavigate()

    useEffect(() =>{
        if(user){
            navigate(path)
        }
    },[user])
}