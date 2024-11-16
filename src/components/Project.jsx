import React from "react";
import pp from '../assets/poto.jpeg'
import Button from './elements/button'


const Project = () => {
  return (
    <div
      className="flex justify-evenly flex-col gap-16 py-28 md:h-screen"
      id="project"
    >
      <div className="flex flex-col items-center">
        <h5 className="md:text-[50px] text-4xl font-bold">My Projects</h5>
        <hr className="w-14 border-2 md:block hidden border-slate-700 m-5 -ms-52" />
        <hr className="w-14 border-2 md:block hidden border-slate-700  -mt-3 -ms-40" />
        <p className="mt-8 text-lg w-72 md:w-auto">
          List of my projects that I have done and currently working on.
        </p>
      </div>
      <div className=" flex flex-col gap-8 md:gap-0 md:flex-row md:justify-evenly m-auto md:m-0">
        <div className=" w-[300px] md:w-[550px] h-[425px] shadow-lg border-2 border-neutral-500 rounded-b-xl">
          <img
          src={pp}
          className="h-72 w-[550px]"
          />
          <div className="p-2 h-[111px] ">
            <h5 className="text-xl font-medium ">nama project</h5>
            <p className="text-wrap text-lg ">decsripsi projek</p>
            <Button classname='bg-slate-700 text-slate-50 hover:bg-slate-50 hover:text-slate-700 py-1 px-5'>show more</Button>
          </div>
        </div>
        <div className=" w-[300px] md:w-[550px] h-[425px] shadow-lg border-2 border-neutral-500 rounded-b-xl">
          <img
          src={pp}
          className="h-72 w-[550px]"
          />
          <div className="p-2 h-[111px] ">
            <h5 className="text-xl font-medium ">nama project</h5>
            <p className="text-wrap text-lg ">decsripsi projek</p>
            <Button classname='bg-slate-700 text-slate-50 hover:bg-slate-50 hover:text-slate-700 py-1 px-5'>show more</Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
