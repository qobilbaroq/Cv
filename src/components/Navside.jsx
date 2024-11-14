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
      {/* Sidebar untuk layar besar */}
      <div className="hidden lg:flex flex-col justify-center h-96 w-14 mt-52 p-4 bg-slate-700 rounded-r-3xl fixed">
        <a href="# " className="text-2xl text-slate-100 my-5"><AiFillHome /></a>
        <a href="#about_me " className="text-2xl text-slate-100 my-5"><FaUser /></a>
        <a href="#skill " className="text-2xl text-slate-100 my-5"><FaFolderOpen /></a>
        <a href="# " className="text-2xl text-slate-100 my-5"><FaEnvelope /></a>
      </div>

      {/* Navbar bawah untuk layar kecil */}
      <div className="lg:hidden flex justify-around items-center h-14 w-full bg-slate-700 fixed bottom-0">
        <a href="# " className="text-2xl text-slate-100"><AiFillHome /></a>
        <a href="#about_me " className="text-2xl text-slate-100"><FaUser /></a>
        <a href="#skill " className="text-2xl text-slate-100"><FaFolderOpen /></a>
        <a href="# " className="text-2xl text-slate-100"><FaEnvelope /></a>
      </div>
    </>
  );
};

export default Navside;
