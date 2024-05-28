import { useUserContext } from "../context/UserContext"

let Avatar = () =>{
    let {user} = useUserContext()

    let Imagen = () => <img className="rounded-full w-12" src={user.photoURL} alt="" />

    return user && <Imagen></Imagen>
}

export default Avatar