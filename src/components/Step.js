import React from 'react'
import start from '../assets/start.png'

const Step = () => {
  return (
    <div class="snap-start md:h-[60vh] md:px-12 md:mb-40 mb-20 grid md:grid-cols-2  md:gap-4 gap-8  text-[#333]">
            <div className='relative '>
                    <button type="button"
                        className=" z-50 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 sm:px-12 sm:py-4 rounded text-black text-lg sm:text-2xl font-semibold  bg-[#fff] hover:text-white hover:bg-black ">Get started</button>
                    <img src={start} className="w-full h-full object-cover relative rounded-3xl" alt="Able" />
                </div>
                <div class=" text-center md:w-[40vw]">
                    <h3 class="md:text-8xl font-semibold md:text-right text-4xl  ">A Step  Towards Change</h3>
                    
                </div>
                
</div>
  )
}

export default Step
