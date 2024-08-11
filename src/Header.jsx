// src/Header.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1 className=" border rounded-full border-red-500 p-2 m-2 ">{theme.charAt(0).toUpperCase() + theme.slice(1)}  Theme</h1>
      <button
        className="border rounded-full border-red-600 p-2 m-2 bg-slate-500"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
