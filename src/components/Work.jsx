import React from "react";
import Calculator from "../assets/projects/calculator.png";
import WeatherApp from "../assets/projects/weatherapp.png";
import Plustechdemo from "../assets/projects/plustechdemo.png";
import Plustech from "../assets/projects/plustech.png";
import Gamingnewsscrapper from "../assets/projects/gamingnewsscrapper.png";
import ETCH from "../assets/projects/ETCH-A-SKETCH.png";
import Dizayncivata from "../assets/projects/dizayncivata.png";
import Netflixclone from "../assets/projects/netflixclone.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p className="py-6">My recent projects</p>
        </div>

        <div style={{backgroundImage: `url(${Netflixclone})`}}
        className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider"> React.js and Firebase Netflix Clone
                    </span>
                    <div>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
