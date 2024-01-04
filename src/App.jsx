import CrossIcon from "./components/icons/crossIcon";
import MoonIcon from "./components/icons/moonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]"> Todo </h1>
          <button> 
            <MoonIcon className="fill-red-500"/>
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex items-center px-4 gap-4 mt-8" >
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type=""
            placeholder="Add new player..." />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8" >
        <div className="bg-white rounded-md">

          <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className=" flex-none rounded-full border-2 inline-block w-5 h-5"> </button>
            <p className="text-gray-600 grow">Leo Messi</p>
            <button className="flex-none"> <CrossIcon /></button>
          </article>

          <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className=" flex-none rounded-full border-2 inline-block w-5 h-5"> </button>
            <p className="text-gray-600 grow">Leo Messi</p>
            <button className="flex-none"> <CrossIcon /></button>
          </article>

          <article className="flex gap-4 py-4 border-b-gray-300 border-b px-4">
            <button className=" flex-none rounded-full border-2 inline-block w-5 h-5"> </button>
            <p className="text-gray-600 grow">Leo Messi</p>
            <button className="flex-none"> <CrossIcon /></button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-300">5 item left</span>
            <button className="text-gray-300">clear completed</button>
          </section>
        </div>

      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
           <button className="text-blue-600">all</button>
           <button className="hover:text-blue-600">active</button>
           <button className="hover:text-blue-600">completed</button>
        </div>  
      </section>

      <p className="text-center mt-8">drag and drop to reorder </p>
    </div>
  )
};
export default App;
