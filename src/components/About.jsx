import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-[#E8F3F1]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#DBACFF]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi. I'm <span className="text-[#61dbfb]">Akın Bilgin</span> nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>I am a senior English Language and Literature student in Turkey and I am also studying Management Information System. I have been doing Web Development for 2 years, and I am constantly improving myself.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
