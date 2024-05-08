import React from 'react'

const Stats = () => {
  return (
    <div className='  py-20 mb-20 bg-black flex justify-center items-center'>
      <div className="  bg-black gap-20 stats stats-vertical lg:stats-horizontal shadow ">
  
  <div className=" text-white stat ">
    <div className=" text-white stat-value md:pb-4 md:text-6xl">50+</div>
    <div className="stat-title text-white md:mb-1 md:text-2xl">Internships</div>

    <div className="stat-desc text-white">provided by Able</div>
  </div>
  
  <div className="stat ">
    <div className="text-white stat-value md:pb-4 md:text-6xl">20+</div>
    <div className="stat-title text-white md:mb-1 md:text-2xl">Community</div> 

    <div className="stat-desc text-white">users alongwith Able</div>
  </div>
  
  <div className="stat ">
    <div className="text-white stat-value md:pb-4 md:text-6xl">20+</div>
    <div className="stat-title text-white md:mb-1 md:text-2xl">Companies</div>
    <div className="stat-desc text-white">partnered with Able</div>
  </div>
</div>
    </div>
  )
}

export default Stats