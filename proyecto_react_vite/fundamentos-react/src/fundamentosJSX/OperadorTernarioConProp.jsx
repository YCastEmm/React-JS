import { Fragment } from "react";

let userLog = "¿El usuario está online?"
let claseSection = "seccion"
let user = true



let TextoUser = ({userStatus}) => {
    return userStatus ? <h3>User online</h3> : <h3>User Offline</h3>
}



export let OperadorTernarioConProp = () =>{
    return <Fragment>
                <section className={claseSection}>
                    <h2>{userLog}</h2>
                    
                    <TextoUser userStatus={user}></TextoUser>

                </section>

            </Fragment>
}