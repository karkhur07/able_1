import React from 'react'
import "../styles/Able.css"
import  acc from '../assets/acc.png'
import amazon from'../assets/amazon.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'

const Able = () => {
  return (
    <div className='container'>
      <img src={acc} datatype='-5' alt="" className='object' />
      <img src={amazon} datatype='5' alt="" className='object'/>
      <img src={fb} datatype='5' alt="" className='object'/>
      <img src={google} datatype='6'alt="" className='object'/>
      <h1 className='object'>able</h1>
    </div>
  )
}

export default Able
