

export let ItemTarea = ({propTarea, propBorrarTarea, propModificarTarea}) =>{

    let {id, title, description, state, priority} = propTarea

    return <li className="list-group-item">
                <div className="d-flex justify-content-between align-items-start">

                    <div>
                        <h5 className={state === true ? "text-decoration-line-through" : "" }>{title}</h5>
                        <p  className={state === true ? "text-decoration-line-through" : "" } >{description}</p>
                        
                        <div className="d-flex gap-2">
                            <button onClick={() => propModificarTarea(id)} className="btn btn-info">{state === true ? "Reabrir tarea" : "Completar" }</button>
                            <button onClick={() => propBorrarTarea(id)} className="btn btn-danger">Eliminar</button>
                        </div>
                    </div>
                    <span className="badge rounded-pill text-bg-primary">{priority && "Prioritario"}</span>

                </div>

            </li>
}