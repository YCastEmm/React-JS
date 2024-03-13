import TareaItem from "./tareaItem";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

let TareaList = ({ tareasProp, borrarTareasProp, updateTareaProp, handleDragEnd }) => {
    
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="idToDos">
                {(droppableProvider) => (
                    <div
                        className="mt-8 rounded-t-md bg-white transition-all duration-300 dark:bg-gray-800"
                        ref={droppableProvider.innerRef}
                        {...droppableProvider.droppableProps}
                    >
                        {tareasProp.map((tarea, index) => (
                            <Draggable index={index} key={tarea.id} draggableId={`${tarea.id}`}>
                                {(draggableProvider) => (
                                    <TareaItem
                                        key={tarea.id}
                                        tareaProp={tarea}
                                        borrarTareasProp={borrarTareasProp}
                                        updateTareaProp={updateTareaProp}
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.dragHandleProps}
                                        {...draggableProvider.draggableProps}
                                    />
                                )}
                            </Draggable>
                        ))}
                        {droppableProvider.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TareaList;
