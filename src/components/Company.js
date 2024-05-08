import React from 'react'
import Marquee from 'react-fast-marquee'
import  acc from '../assets/acc.png'
import amazon from'../assets/amazon.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'

const Company = () => {
    
  return (
    <div className=' py-10 my-20 flex justify-center'>
    <div className='max-w-[70%] '>
        

      <Marquee  className=''>
       <div className='flex gap-20'><img src={acc} alt="acc" width={90}/>
      <img src={amazon} alt="" width={90}/> 
       <img src={fb} alt="" width={90}/>
        <img src={google} alt=""width={90} /></div>
      </Marquee>
    </div></div>
  )
}

export default Company
