import { useState } from "react";
import MoonIcon from "./icons/moonIcon";
import SunIcon from "./icons/SunIcon";
import { useEffect } from "react";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => { 
  
  const [darkMode, setDarkmode ] = useState(inicialStateDarkMode);

  useEffect(() => {
        if(darkMode){
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }else{
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
  }, [darkMode]);


    return(
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]"> Todo </h1>
          <button onClick={() => setDarkmode(!darkMode) }>
            {
              darkMode ? <SunIcon /> : <MoonIcon />
            }
          </button>
        </div>
      </header>
    );
};
 export default Header;