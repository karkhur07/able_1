import React from 'react'

const Stats = () => {
  return (
    <div class="bg-black px-4 font-[sans-serif] text-[#333]">
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-3 gap-40 max-md:text-center rounded overflow-hidden max-md:max-w-md mx-auto">
          <div class="bg-black text-white px-6 py-60">
            <h3 class="text-5xl font-extrabold">50+</h3>
            <div>
              <p class="text-4xl font-bold mt-5">Internships</p>
              <p class="text-sm mt-2">provided by Able</p>
            </div>
          </div>
          <div class="bg-black text-white px-6 py-60">
            <h3 class="text-5xl font-extrabold">1000+</h3>
            <div>
              <p class="text-4xl font-bold mt-5">Community</p>
              <p class="text-sm mt-2">members along with Able</p>
            </div>
          </div>
          <div class="bg-black text-white px-6 py-60">
            <h3 class="text-5xl font-extrabold">20+</h3>
            <div>
              <p class="text-4xl font-bold mt-5">Companies</p>
              <p class="text-sm mt-2">partnered with Able</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
