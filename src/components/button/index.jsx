import React from "react";

// import './style.scss'

function Button({ children, theme, onClick }) {
  const ButtonTheme = {
    primary: "bg-red hover:scale-105 text-white rounded px-16 py-4",
    secondary: "bg-gray-dark hover:scale-105 text-red border-red border rounded px-16 py-4",
    default: "bg-gray-light hover:scale-105 text-red font-bold rounded px-6 py-3 bg-opacity-60",
  };
  
  return (
    <button
      className={`${ButtonTheme[theme]} uppercase relative text-xl`}
      type="button"
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>)
}

export default Button;
