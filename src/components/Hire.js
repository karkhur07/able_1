import React from 'react'
import { Link } from 'react-router-dom'

const Hire = () => {
  return (
    <div className=' px-5 snap-start md:mb-44 md:pt-16'>
      <h1 className="text-center text-4xl sm:text-6xl font-semibold leading-tight mt-32 mb-28">FIND YOUR PERFECT MATCH WITH US</h1>
    <div className='flex justify-center'>
      
<div className='flex space-x-9 '>
<button type="button"
        className=" md:py-10 md:px-16 p-6 rounded-3xl md:text-2xl  outline-none border-2 border-[#333] hover:bg-[#222] hover:text-white transition-all duration-300">
          FIND INTERNSHIPS</button>
      <button type="button"
        className="md:py-10 md:px-16 p-6 rounded-3xl md:text-2xl  outline-none border-2 border-[#333] bg-[#222] hover:bg-transparent hover:text-black text-white transition-all duration-300">
          <Link to="/hire">HIRE INTERNS</Link></button>
          </div>
    </div>

    </div>
  )
}

export default Hire
