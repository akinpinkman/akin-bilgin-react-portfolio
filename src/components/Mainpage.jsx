import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Mainpage = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Akın Bilgin</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend React Developer</h2>
        <p className='text-[#8892b8] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Debitis delectus culpa esse non, ducimus ut ratione 
          facere quaerat iusto, quae, temporibus modi.</p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>My Projects <HiArrowNarrowRight /></button>
          </div>
      </div>
    </div>
  )
}

export default Mainpage