import React from 'react'
// import '../styles/Able.css'
import  acc from '../assets/acc.png'
import amazon from'../assets/amazon.png'
import fb from '../assets/fb.png'
import google from '../assets/google.png'

// const parallax = document.querySelector('.parallax');
// const front = document.querySelector('.front-layer');

// const sFront = 150;

// parallax.addEventListener('mousemove', e=> {
//   const x = e.clientX;
//   const y = e.clientY;

//   front.style.transform = `
//   translate(
//     ${x / sFront}%,
//     ${y / sFront}%
//   )`;
// })

const Able = () => {
  return (
    <>
    <section className='parallax'>
      <h1>able</h1>
    <div className='front-layer'>
      <img src={acc} alt="" />
      <img src={amazon} alt="" />
      <img src={fb} alt="" />
      <img src={google} alt="" />
    </div>
    </section>
    </>
  )
}

export default Able
