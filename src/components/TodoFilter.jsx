const TodoFilter = ({ changeFiltered, filter }) => {
  return (
    <section className="container mx-auto3ww mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button
          className={`${filter === 'all' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={() => changeFiltered('all')}>all</button>
        <button
          className={`${filter === 'active' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500' }`}
          onClick={() => changeFiltered('active')}>active</button>
        <button
          className={`${filter === 'completed' ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'}`}
          onClick={() => changeFiltered('completed')}>completed</button>
      </div>
    </section>
  );
};
export default TodoFilter;