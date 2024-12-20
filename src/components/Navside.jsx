import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { 
  FaUser, 
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";


const Navside = () => {
  return (
    <>
      {/* nav side */}
      <div className="hidden lg:flex flex-col justify-center h-96 w-14 mt-52 p-4 bg-slate-700 rounded-r-3xl fixed" data-aos="zoom-out-right">
        <a href="# " className="text-2xl text-slate-100 my-5"><AiFillHome /></a>
        <a href="#about_me " className="text-2xl text-slate-100 my-5"><FaUser /></a>
        <a href="#skill " className="text-2xl text-slate-100 my-5"><FaFolderOpen /></a>
        <a href="#Contact " className="text-2xl text-slate-100 my-5"><FaEnvelope /></a>
      </div>

      {/* nav bawah */}
      <div className="z-10 lg:hidden flex justify-around items-center h-14 w-full bg-slate-700 fixed bottom-0">
        <a href="# " className="text-2xl text-slate-100"><AiFillHome /></a>
        <a href="#about_me " className="text-2xl text-slate-100"><FaUser /></a>
        <a href="#skill " className="text-2xl text-slate-100"><FaFolderOpen /></a>
        <a href="#Contact " className="text-2xl text-slate-100"><FaEnvelope /></a>
      </div>
    </>
  );
};

export default Navside;
