import React from 'react'

const Heading = (props) => {
  return (
    <div className='snap-start'>
     <h1 className='mt-16 font-semibold text-black md:text-6xl text-4xl text-center'>{props.head}</h1>
    </div>
  )
}

export default Heading
