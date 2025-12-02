"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme globally
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-sm fixed top-0 left-0 z-50">

      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-600 text-white 
                        flex items-center justify-center font-bold">
          <a href="#Hero">AM</a>
        </div>
        <span className="text-lg font-semibold text-black dark:text-white">
          Akanksha Mohite
        </span>
      </div>

      {/* Menu + Theme Toggle Inside List */}
      <ul className="flex gap-6 font-medium 
                     text-gray-700 dark:text-black-300 items-center">

        <li><a href="#about">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Contact">Contact</a></li>

        {/* Theme toggle inside the same row */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-purple-600 
                       text-black dark:text-white transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>

    </nav>
  );
}
