import { useState } from "react";

const TodoCreate = ({ todoCreate }) => {
    const [ title, setTitle ]= useState("")
    const handleSubmitAddTodo = (e) => {

        e.preventDefault();
       if(!title.trim()){
        return setTitle("");
       };
        todoCreate(title)
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex items-center px-4 gap-4 transition-all duration-1000 dark:bg-gray-800" >
            <span className="rounded-full border-2 inline-block w-5 h-5"></span>
            <input
                className="w-full text-gray-400 outline-none transition-all duration-1000 dark:bg-gray-800"
                type="text"
                placeholder="Create a new todo..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
        </form>
    );
};
export default TodoCreate;