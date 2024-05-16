import React from 'react'
import Marquee from 'react-fast-marquee'
import  acc from '../assets/acc.png'
import amazon from'../assets/amazon.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'

const Company = () => {
    
  return (
    <div className='text-white bg-black snap-start'>
      <h1 className="text-center text-3xl max-sm:text-3xl font-bold leading-tight py-12">COMPANIES WITH ABLE</h1>
    <div className='h-48 pb-24 my-20 flex justify-center bg-black'>
      
    <div className='my-6 max-w-[70%] '>
        

      <Marquee  className=''>
       <div className='flex sm:gap-20 gap-16'>
        <img src={acc} alt="acc" className='sm:w-24 w-16'/>
      <img src={amazon} alt="" className='sm:w-24 w-16'/> 
       <img src={fb} alt="" className='sm:w-24 w-16'/>
        <img src={google} alt=""className='sm:w-24 w-16' /></div>
      </Marquee>
    </div></div>
    </div>
  )
}

export default Company
