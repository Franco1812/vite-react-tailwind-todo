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
  { id: 4, title: "Complete todo app on front-end mentor", completed: true, },
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
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
     )
    );
  };

const computedItemLeft = todos.filter((todo) => !todo.completed).length;

const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};

const [filter, setFilter]=useState("all")

const changeFiltered = (filter) => setFilter(filter);

const filteredTodos =() => {
  switch(filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => !todo.completed);  
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};


  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />
      <main className="container mx-auto px-4 mt-8" >
        <TodoCreate todoCreate={todoCreate} />

        <TodoList todos={filteredTodos()} deleteTodo={deleteTodo} updateTodo={updateTodo} />

        <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted} />

        <TodoFilter changeFiltered={changeFiltered} filter={filter} />
      </main>

      <footer className="text-center mt-8 dark:text-gray-400">Drag and drop to reorder </footer>
    </div>
  )
};
export default App;
