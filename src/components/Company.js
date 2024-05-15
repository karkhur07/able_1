import React from 'react'
import Marquee from 'react-fast-marquee'
import  acc from '../assets/acc.png'
import amazon from'../assets/amazon.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'

const Company = () => {
    
  return (
    <div className='text-white bg-black'>
      <h1 className="text-center text-3xl max-sm:text-3xl font-bold leading-tight mt-32 mb-12 py-12">COMPANIES WITH ABLE</h1>
    <div className='h-48 py-10 my-20 flex justify-center bg-black'>
      
    <div className='my-6 max-w-[70%] '>
        

      <Marquee  className=''>
       <div className='flex gap-20'>
        <img src={acc} alt="acc" width={90}/>
      <img src={amazon} alt="" width={90}/> 
       <img src={fb} alt="" width={90}/>
        <img src={google} alt=""width={90} /></div>
      </Marquee>
    </div></div>
    </div>
  )
}

export default Company
