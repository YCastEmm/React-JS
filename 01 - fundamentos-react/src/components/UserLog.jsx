import imagenCheckPath from "../img/check.png";
import imagenNoPath from "../img/no.png";


let userLog = "¿El usuario está logueado?"
let user = true

let ImagenCheck = ({size}) =>{
    return <img src={imagenCheckPath} alt="" style={{width: size}}/>
}

let ImagenNo = (prop) =>{
    return <img src={imagenNoPath} alt={prop.size}  style={{width: `${prop.size}`}} />
}

let TextoOk = (prop) =>{
    return <h3>{prop.text}</h3>
}



let UserLog = () =>{
    return <>
                <h2>{userLog}</h2>
                    
                {/* Pregunto si user es true y devuelvo una u otra imagen */}
                { user ? <ImagenCheck  size="50px" /> : <ImagenNo size="50px"></ImagenNo>  }

                {/* Pregunto si user es true sin else, solo me importa el valor true */}
                { user && <TextoOk text="El usuario se encuentra en línea"></TextoOk>  }

            </>
}

export default UserLog