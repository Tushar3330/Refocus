/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

function Product({val}) {
  return (
    <div>
       <div className='w-full py-20 text-white '>
      <div className='flex  max-w-screen-xl mx-auto items-center justify-between'>
        <h1 className='text-6xl  capatalize font-medium '>{val.title}</h1>
        <div className='dets w-1/3'>
        <p>{val.description}</p>
        <div className="flex items-center gap-5 mt-8">
                        {val.live && <Button />}
                        {val.case && <Button title="Case Study" />}
                    </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Product