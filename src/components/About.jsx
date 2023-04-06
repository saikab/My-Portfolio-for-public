import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-white text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a frontend developer with over 1 years of experience. I specialize in building responsive and interactive web applications using React.js, JavaScript, HTML, and CSS.


        </p>

        <br />

        <p className="text-xl">
        In my free time, I enjoy learning new technologies and working on personal projects.
        </p>
      </div>
    </div>
  );
};

export default About;
