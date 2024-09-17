/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


const Marquee = ({ imagesUrl, direction }) => {
    return (
        <div className="flex w-full  py-8 overflow-hidden gap-20  ">
        
                {imagesUrl.map((url, index) => (
                    <img key={index} src={url} className="w-[8vw]" />
                ))}
           
        </div>
    )
}


export default Marquee