import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(DroppableProvided) => (
                <div ref={DroppableProvided.innerRef} {...DroppableProvided.droppableProps} className="bg-white rounded-t-md mt-8 overflow-hidden transition-all duration-1000 dark:bg-gray-800">
                    {todos.map((todo, index) => (

                        <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                            {
                                (draggableProvided) => (
                                    <TodoItem
                                        todo={todo}
                                        deleteTodo={deleteTodo}
                                        updateTodo={updateTodo}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        {...draggableProvided.draggableProps}
                                    />
                                )
                            }
                        </Draggable>
                    ))}
                    {DroppableProvided.placeholder}
                </div>
            )}
        </Droppable >

    );
};
export default TodoList;