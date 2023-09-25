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
    <div name="work" className="w-full text-[#E8F3F1]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#DBACFF]">
            Work
          </p>
          <p className="py-6">// Check out some of my latest projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid 1*/}
          <div
            style={{ backgroundImage: `url(${Netflixclone})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                {" "}
                <span className="line-clamp-1 text-[20px]">
                  Full-Stack Netflix Clone
                </span>
                <ul className="list-disc text-[15px]">
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Firebase</li>
                </ul>
              </span>
              <div>
                <a href ="https://akinbilgin-netflix.web.app" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid 2*/}
          <div
            style={{ backgroundImage: `url(${Gamingnewsscrapper})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">
                  Gaming News Scrapper
                </span>
                <ul className="list-disc text-[15px]">
                  <li>HTML/CSS/Javascript</li>
                  <li>Cheerio</li>
                  <li>Express</li>
                  <li>Axios</li>
                </ul>
              </span>
              <div>
                <a href="https://akinpinkman.github.io/gaming-news-scrapper/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/akinpinkman/gaming-news-scrapper" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid 3*/}
          <div
            style={{ backgroundImage: `url(${WeatherApp})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">Weather APP</span>
                <ul className="list-disc text-[15px]">
                  <li>HTML/CSS/Javascript</li>
                  <li>Unsplash API</li>
                </ul>
              </span>
              <div>
                <a href="https://akinpinkman.github.io/weather-app/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/akinpinkman/weather-app" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid 4*/}
          <div
            style={{ backgroundImage: `url(${Plustech})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">
                  Live Wordpress Website
                </span>
                <ul className="list-disc text-[15px]">
                  <li>HTML/CSS/Javascript</li>
                  <li>Elementor</li>
                  <li>Bootstrap</li>
                </ul>
              </span>
              <div>
                <a href="https://plustechkalip.com.tr" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid 5*/}
          <div
            style={{ backgroundImage: `url(${ETCH})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">Etch-A-Sketch</span>
                <ul className="list-disc text-[15px]">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </span>
              <div>
                <a href="https://akinpinkman.github.io/Etch-A-Sketch/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/akinpinkman/Etch-A-Sketch" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid 6*/}
          <div
            style={{ backgroundImage: `url(${Dizayncivata})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">
                  Live Wordpress Website
                </span>
                <ul className="list-disc text-[15px]">
                  <li>HTML/CSS/Javascript</li>
                  <li>Elementor</li>
                  <li>Bootstrap</li>
                </ul>
              </span>

              <div>
                <a href="https://dizayncivata.com" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid 7*/}
          <div
            style={{ backgroundImage: `url(${Plustechdemo})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">Demo Website</span>
                <ul className="list-disc text-[15px]">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </span>
              <div>
                <a href="https://akinpinkman.github.io/plustech-demo-landing-page/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/akinpinkman/plustech-demo-landing-page" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid 8*/}
          <div
            style={{ backgroundImage: `url(${Calculator})` }}
            className="px-5 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                <span className="line-clamp-1 text-[20px]">
                  Javascript Calculator
                </span>
                <ul className="list-disc text-[15px]">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                </ul>
              </span>
              <div>
                <a href="https://akinpinkman.github.io/calculator/" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/akinpinkman/calculator" rel="noopener noreferrer" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
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
