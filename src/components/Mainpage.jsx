import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
const Mainpage = () => {
  return (
    <div name="home" className='w-full h-screen'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#61dbfb]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#E8F3F1]'>Akın Bilgin</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#E8F3F1]'>I'm a Frontend <span className='text-[#61dbfb]'>React</span> Developer</h2>
        <p className='text-[#E8F3F1] py-4 max-w-[700px]'>Welcome to my portfolio website. You can check out my projects, and reach me from the contact form at the bottom of the page.</p>
          <div>
            <button className='text-[#E8F3F1] group border-2 px-6 py-3 my-2 flex items-center hover:border-[#61dbfb] hover:text-[#61dbfb]'>
            <Link to="work" smooth={true} duration={500}>
            My Projects 
        </Link>
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
            
          </div>
      </div>
    </div>
  )
}

export default Mainpage