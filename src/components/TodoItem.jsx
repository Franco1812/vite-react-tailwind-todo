import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/crossIcon";

const TodoItem = ({ todo, deleteTodo,updateTodo  }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4 ">
      <button className={`w-5 h-5 rounded-full border-2 flex-none ${completed
          ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
          : "  inline-block "
        }`}
        onClick={()  => updateTodo(id)}
        >
          {completed && <CheckIcon />}
      </button>
      <p className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-300 ${completed && "line-through"}`}>
        {title}
      </p>
      <button className=""
      onClick={()  => deleteTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};
export default TodoItem;


