import React from 'react'

const Stats = () => {
  return (
    <div className=' pb-20 py-48 mb-20 bg-black flex justify-center items-center'>
      <div className="  bg-black gap-20 stats stats-vertical lg:stats-horizontal shadow ">
  
  <div className="px-20 text-white stat ">
    <div className=" text-white stat-value md:pb-4 md:text-8xl">50+</div>
    <div className=" stat-title text-white md:mb-1 md:text-4xl">Internships</div>

    <div className="stat-desc text-white md:text-xl">provided by Able</div>
  </div>
  
  <div className="stat px-20">
    <div className="text-white stat-value md:pb-4 md:text-8xl">1000+</div>
    <div className="stat-title text-white md:mb-1 md:text-4xl">Community</div> 

    <div className="stat-desc text-white md:text-xl">users alongwith Able</div>
  </div>
  
  <div className="stat">
    <div className="text-white stat-value md:pb-4 md:text-8xl">20+</div>
    <div className="stat-title text-white md:mb-1 md:text-4xl">Companies</div>
    <div className="stat-desc text-white md:text-xl">partnered with Able</div>
  </div>
</div>
    </div>
  )
}

export default Stats
