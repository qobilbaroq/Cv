import React from "react";
import Button from "./elements/button";
import pp1 from "../assets/image1.jpg";

const About = () => {
  return (
    <div
      className="flex flex-col gap-8 px-5 md:px-10 lg:px-44 md:h-screen"
      id="about_me"
    >
      <div className="mt-16 md:mt-24 ">
        <h5 className="text-3xl  lg:text-5xl font-medium text-gray-900 dark:text-white">
          About Me
        </h5>
        <hr className="border-2 my-3 w-24  lg:w-52 rounded-lg border-slate-600" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <img
          alt="Profile"
          className=" w-44 h-44 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-3xl shadow-xl"
          src={pp1}
        />

        <div className="text-lg text-slate-900 px-3 lg:px-12 py-4">
          <p className="text-justify text-gray-700 md:leading-7 md:text-xl">
            Hey there, I’m <strong>Moch Nabil Al Mubaroq</strong>, a{" "}
            <strong>tech enthusiast</strong> and{" "}
            <strong>aspiring Web Developer</strong>. Hailing from Bandung, West
            Java, Indonesia, I am currently on an exciting journey at{" "}
            <strong>SMK Prakarya Internasional</strong>, where I am pursuing a
            major in <strong>Informatics Engineering</strong>. My passion for
            technology and coding knows no bounds. Beyond coding, I am deeply
            interested in design, Game Development, and the captivating world of
            AI. I believe that in today’s rapidly evolving digital era, being a
            <strong> lifelong learner</strong> is not just a choice but a
            necessity. Let’s connect and explore the ever-changing world of
            technology together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
