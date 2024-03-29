const TodoComputed = ({ computedItemLeft, clearCompleted}) => {
    return(
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md transition-all duration-1000 dark:bg-gray-800">
        <span className="text-gray-300 dark:text-gray-300">{computedItemLeft} item left</span>
        <button className="text-gray-300 dark:text-gray-300" onClick={clearCompleted}>clear completed</button>
      </section>
    );
};

export default TodoComputed;