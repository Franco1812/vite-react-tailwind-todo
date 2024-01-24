import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="bg-white rounded-t-md mt-8 overflow-hidden transition-all duration-1000 dark:bg-gray-800">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </div>
    );
};
export default TodoList;