import React from 'react'
import { Link } from 'react-router-dom'

const Hire = () => {
  return (
    <div className=''style={{marginBottom:'100px'}}>
      <h1 class="text-center text-3xl max-sm:text-3xl font-semibold leading-tight mt-32 mb-12 py-12">FIND YOUR PERFECT MATCH WITH US</h1>
    <div className='flex justify-center'>
      
<div className='flex space-x-20 '>
<button type="button"
        class="px-7 py-5 rounded-xl text-black text-lg tracking-wider font-medium outline-none border-2 border-[#333] hover:bg-[#222] hover:text-white transition-all duration-300">
          FIND INTERNSHIPS</button>
      <button type="button"
        class="px-7 py-5 rounded-xl text-white text-lg tracking-wider font-medium outline-none border-2 border-[#333] bg-[#222] hover:bg-transparent hover:text-black transition-all duration-300">
          <Link to="/hire">HIRE INTERNS</Link></button>
          </div>
    </div>

    </div>
  )
}

export default Hire
