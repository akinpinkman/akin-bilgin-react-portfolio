import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi. I'm Akın Bilgin nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima natus, 
                tempore eius cumque rem amet aliquid culpa magnam perspiciatis, 
                omnis voluptatem. Dolorem veniam temporibus ipsum aliquam enim ut 
                reiciendis labore laboriosam, enim cumque corrupti voluptatum!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
