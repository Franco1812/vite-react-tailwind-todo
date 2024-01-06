const TodoFilter = () => {
    return(
        <section className="container mx-auto3ww mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">all</button>
          <button className="hover:text-blue-600">active</button>
          <button className="hover:text-blue-600">completed</button>
        </div>
      </section>
    );
};
export default TodoFilter;