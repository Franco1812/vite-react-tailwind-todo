import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const InitialStateTodos = [
  { id: 1, title: "complete online JavaScript course", completed: true, },
  { id: 2, title: "Meditating 10 minutes", completed: false, },
  { id: 3, title: "Pick up groseries", completed: false, },
  { id: 4, title: "Complete todo app on front-end mentor", completed: false, },
  { id: 5, title: "Drink 3l water", completed: false, },
];

const App = () => {
  const [todos, setTodos] = useState(InitialStateTodos);

  const todoCreate = (title) => {
    const newTodo = {
      id: Date.now(), 
      title: title.trim(),
      completed: false,
    };
    setTodos([...todos,newTodo]);
  };

    return (
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
        <Header />
        <main className="container mx-auto px-4 mt-8" >
          <TodoCreate todoCreate={todoCreate} />

          <TodoList todos={todos} />

          <TodoComputed />

          <TodoFilter />
        </main>

        <footer className="text-center mt-8">drag and drop to reorder </footer>
      </div>
    )
  };
  export default App;
