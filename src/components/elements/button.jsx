import React from "react";

const Button = (prompt) => {
  const {
    children = "...? ",
    classname = "bg-slate-100 hover:text-slate-50 hover:bg-slate-700 py-2 px-6",
    my = "my-4",
  } = prompt;
  return (
    <div className={` ${my} `}>
      <button
        className={` ${classname}  border-2 border-slate-700 text-lg rounded-2xl shadow-md  hover:shadow-lg  transition-all duration-300 `}
        >
        {children}
      </button>
    </div>
  );
};

export default Button;
