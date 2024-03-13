import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Definición del componente principal
let App = () => {
    // Estado inicial de los todos, recuperando desde el almacenamiento local si existe
    let InitialState = JSON.parse(localStorage.getItem("toDos")) || [
        { id: 1, text: "Aprender react" },
        { id: 2, text: "Aprender drag & drop" },
        { id: 3, text: "Practicar" },
    ]

    // Estado de los toDos utilizando useState
    let [toDos, setToDos] = useState(InitialState);

    // Efecto para guardar los toDos en el almacenamiento local cuando cambian
    useEffect(() =>{
        localStorage.setItem("toDos", JSON.stringify(toDos))
    },[toDos])

    // Función para manejar el final del arrastre de elementos
    let handleDragEnd = result =>{
        if (result.destination !== null) {
            console.log(result);
            let dragStart = result.source.index
            let dragEnd = result.destination.index

            // Crear una copia de los toDos
            let toDosCopia = [...toDos]

            // Extraer el elemento arrastrado
            let [reorderToDos] = toDosCopia.splice(dragStart, 1)
            console.log(reorderToDos)

            // Insertar el elemento en su nueva posición
            toDosCopia.splice(dragEnd, 0, reorderToDos)
            console.log(toDosCopia)

            // Actualizar el estado de los toDos
            setToDos(toDosCopia)
        }
    }

    // Renderizado del componente
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h1>Drag & Drop</h1>
            <Droppable droppableId="idToDos">
                {(droppableProvider) => (
                    <ul
                        ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                    >
                        {/* Mapear todos los elementos y hacerlos arrastrables */}
                        {toDos.map((toDo, index) => (
                            <Draggable
                                index={index}
                                key={toDo.id}
                                draggableId={`${toDo.id}`}
                            >
                                {(draggableProvider) => (
                                    <li
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.draggableProps}
                                        {...draggableProvider.dragHandleProps}
                                    >
                                        {toDo.text}
                                    </li>
                                )}
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default App;
