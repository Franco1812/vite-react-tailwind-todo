const TodoCreate = () => {
    return(
        <form className="bg-white rounded-md overflow-hidden py-4 flex items-center px-4 gap-4 mt-8" >
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type=""
            placeholder="Add new player..." />
        </form>
    );
};
export default TodoCreate;