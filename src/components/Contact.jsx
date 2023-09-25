import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full flex justify-center items-center pt-10'>
        <form method='POST' action="https://getform.io/f/ff7ca9dc-44e1-4af2-a0ec-73efd32e87f8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#DBACFF] text-[#E8F3F1]'>Contact</p>
                <p className='text-[#E8F3F1] py-4'>// Submit the form below or shoot me an email - akinbilgin@akinbilginwriting.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:border-[#61dbfb] hover:text-[#61dbfb] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact