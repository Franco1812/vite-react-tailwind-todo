import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/crossIcon";

const TodoItem = ({ todo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
      {/* <button className=" flex-none rounded-full border-2 inline-block w-5 h-5"></button> */}
      <button className={`w-5 h-5 rounded-full border-2 flex-none ${completed
          ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
          : "  inline-block "
        }`}>
          {completed && <CheckIcon />}
      </button>
      <p className="text-gray-600 grow">
        {title}
      </p>
      <button className="">
        <CrossIcon />
      </button>
    </article>
  );
};
export default TodoItem;


