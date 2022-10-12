import React from 'react'

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src="/Shape 1 copy.png"/>
     </div>
    )
}

export default SampleNextArrow