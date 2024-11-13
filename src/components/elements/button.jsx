import React from 'react'

const Button = (prompt) => {
    const { children = "...? ", classname = "bg-slate-100 hover:text-slate-50 hover:bg-slate-700"} = prompt;
  return (
    <div className='my-8'> 
        <button className={` px-6 py-2 border-2 border-slate-700 ${classname}  text-lg rounded-2xl shadow-md  hover:shadow-lg  transition-all duration-300 `} >
        {children}
        </button>
        </div>
  )
}

export default Button