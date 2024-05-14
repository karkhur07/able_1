import React from 'react'
import cell from './cell.png'

const Cell = () => {
  return (
    <div class="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 font-[sans-serif] mb-24 border-5xl">
    <img src={cell} class="w-full md:w-96 rounded-lg border" alt="description" />
    <div>
      <h1 class="text-4xl font-bold text-gray-800 ml-28">
        Able Internship Cell
      </h1>
      <button className='text-white w-32 h-8 mb-4 shadow-lg' style={{backgroundColor:"gray",borderRadius:"100px",marginTop:"400px",marginLeft:"190px"}}><b>Join Now</b></button>
    </div>
    </div>
  )
}

export default Cell
