import { useRef } from "react"

let CreateLink = ({agregarTarjeta}) =>{

    let titleRef = useRef()
    let linkRef = useRef()

    let handleSubmit = (e) =>{
        e.preventDefault()
        agregarTarjeta(titleRef.current.value, linkRef.current.value)
        console.log(titleRef.current.value);
        console.log(linkRef.current.value);


    }
    return  <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={titleRef} />
                <input type="text" ref={linkRef} />
                <button type="submit">Agregar Link</button>
            </form>
}

export default CreateLink