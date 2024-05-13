


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import acc from '../assets/acc.png'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import '../styles/Card.css'
import BasicModal from './Modal';


function Home() {
  return (
    <div className="container">
      
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
       
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <div className='w-96' >
      

      <div className=" h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-96' >
      

      <div className=" h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-96' >
      

      <div className="h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-96' >
      

      <div className="h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-96' >
      

      <div className="h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-96' >
      

      <div className="h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-96' >
      

      <div className="h-[60vh] flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-white dark:border-white">
          <a href="/">
              <img className="mt-6 mb-3 rounded-t-lg " src={acc} alt="" />
          </a>
          <div className=" flex flex-col items-center ustify-center p-5">
              <a href="/">
                  <h5 className="mb-8 text-3xl font-bold tracking-tight text-black dark:text-black">Accenture</h5>
              </a><div>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'>Stipend:</span>  ₹4000</p>
              <p className="mb-4 text-black font-normal "><span className='text-black font-semibold'> Experience:</span> Freshers</p>
              <p className="mb-4  text-black font-normal "><span className='text-black font-semibold'>Location:</span> Banglore (Hybrid)</p>
              </div>
              <button className="my-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <BasicModal/>
                   
              </button>
          </div>
      </div>
      
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;