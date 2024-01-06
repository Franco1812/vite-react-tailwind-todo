import CrossIcon from "./icons/crossIcon";

const TodoItem = () => {
    return(
        <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
        <button className=" flex-none rounded-full border-2 inline-block w-5 h-5"> </button>
        <p className="text-gray-600 grow">Leo Messi</p>
        <button className="flex-none"> <CrossIcon /></button>
      </article>
    );
};
export default TodoItem;