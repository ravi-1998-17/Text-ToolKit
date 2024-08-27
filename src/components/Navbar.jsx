import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="h-20 flex justify-between items-center px-20 rounded-b-2xl bg-pink-100 dark:bg-slate-800 dark:text-pink-50">
      <div className="text-3xl font-bold tracking-widest">Text ToolKit</div>
      <div className="text-2xl font-light tracking-wide">Word Counter</div>
      <div className="h-12 w-fit px-5 flex items-center justify-between gap-5">
        <ul className="flex items-center justify-center">
          <Link to='/' className="mx-4 text-2xl cursor-pointer">Home</Link>
          <Link to='/about' className="mx-4 text-2xl cursor-pointer">About</Link>
          <Link to='/contact' className="mx-4 text-2xl cursor-pointer">Contact</Link>
        </ul>

          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${darkMode ? "bg-slate-600" : "bg-pink-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>

      </div>
    </nav>
  );
};

export default Navbar;
