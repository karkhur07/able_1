import React from 'react'
import start from './start.png'

const Step = () => {
  return (
    <div className='flex justify-evenly'>
      <div className='flex m-20'>
        <div className='w-32 h-8 flex justify-center bg-black rounded text-white'>
        <button>Get Started</button>
        </div>
        <img src={start} alt="" className='relative w-96' />
      </div>
      <div className='m-20 p-8 text-7xl'>
        <p>A Step Towards <br />Change</p>
      </div>
    </div>
  )
}

export default Step
