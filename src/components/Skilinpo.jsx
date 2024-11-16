import React from "react";
import { FaCodepen } from "react-icons/fa";

const Skilinpo = () => {
  return (
    <div className="flex flex-col md:h-screen p-16" id="skill">
      <div className=" flex flex-col ">
        <div className="flex flex-col items-center gap-3">
          <h5 className="text-3xl font-bold">Skills and Expertise </h5>
          <p className="md:text-lg text-center">
            Explore some skills I'm proficient in to deliver high-quality
            solutions.
          </p>
        </div>
        <div className="my-12 flex justify-center gap-20">
          <div className="flex flex-col items-center gap-4">
            <FaCodepen className="text-6xl" />
            <div className="font-medium text-lg">Web Development</div>
          </div>
          {/* tambhan skill jika udah pro wkwkwk */}
        </div>
      </div>

      <div className="flex justify-center items-center p-12 gap-20 flex-wrap">
        <div className="flex flex-col justify-center items-center ">
          <h5 className="text-3xl font-normal text-gray-600">
            Language & Framework
          </h5>
          <p className="text-center p-10 text-sm md:text-lg tracking-widest ">
            <span className="text-black font-bold m-2">HTML</span>|
            <span className="text-black font-bold m-2">CSS</span>|
            <span className="text-black font-bold m-2">Javascript</span>|
            <span className="text-black font-bold m-2">React</span>|
            <span className="text-black font-bold m-2">TailwindCSS</span>|
            <br />
            <span className="text-black font-bold m-2">Bootstrap</span>|
            <span className="text-black font-bold m-2">MySQL</span>|
            <span className="text-black font-bold m-2">PHP</span>|
            <span className="text-black font-bold m-2">Laravel</span>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h5 className="text-3xl font-normal text-gray-600">Tools</h5>
          <p className="text-center p-10 text-sm md:text-lg tracking-widest">
            <span className="text-black font-bold m-2">Visual Studio Code</span>|
            <span className="text-black font-bold m-2">Git </span>|
            <span className="text-black font-bold m-2">Github </span>|
            <span className="text-black font-bold m-2">Figma </span>|
            <br />
            <span className="text-black font-bold m-2">doa mamah </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skilinpo;
