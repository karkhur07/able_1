import React from 'react'
import NumberAnimation from './NumberAnimation'
const Stats = () => {
  return (
    <div className="bg-[url(https://www.gmccanada.ca/bypass/master_tools/ddp/gmna/assets/CA/gmc/2024/sierra/sierra_2500hd/small_byo3/GBA.jpg)] md:h-[100vh] md:px-10 font-[sans-serif] text-[#333] md:pt-40 snap-start  bg-cover ">
      <div className="max-w-8xl mx-auto">
        <div className="grid md:grid-cols-3 gap-40 max-md:text-center rounded overflow-hidden max-md:max-w-md mx-auto">
          <div className=" text-white sm: sm:pt-60 sm:pb-16">
            <h3 className="flex text-7xl justify-center md:justify-start font-extrabold"><NumberAnimation targetNumber={50}  />+</h3>
            <div>
              <p className="text-6xl font-bold mt-5">Internships</p>
              <p className="text-lg mt-2">provided by Able</p>
            </div>
          </div>
          <div className=" text-white sm: sm:pt-60 sm:pb-16">
            <h3 className="flex text-7xl justify-center md:justify-start font-extrabold"><NumberAnimation targetNumber={1000} />+</h3>
            <div>
              <p className="text-6xl font-bold mt-5">Community</p>
              <p className="text-lg mt-2">members along with Able</p>
            </div>
          </div>
          <div className=" text-white sm: sm:pt-60 sm:pb-16">
            <h3 className="flex text-7xl justify-center md:justify-start font-extrabold"><NumberAnimation targetNumber={20} />+</h3>
            <div>
              <p className="text-6xl font-bold mt-5">Companies</p>
              <p className="text-lg mt-2">partnered with Able</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
