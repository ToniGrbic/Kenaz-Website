import React from 'react'

const Banner = ({width, height}) => {
  return (
      <div className="bannerDiv"
            style={{width:`${width}px`, 
                    height: `${height}px`}}>
        <p>banner</p>
        <p>{width}x{height}</p>
      </div>
  )
}

export default Banner