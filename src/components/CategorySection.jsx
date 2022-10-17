import React from 'react'

import { Link } from 'react-router-dom'
import '../styles/CategorySection.scss'

const CategorySection = ({title, color, textItems}) => {
  return (
    <div className="categoryDiv">
        <div className="stripe" 
             style={{background:`${color}`}}></div>
        <h3>{title}</h3>
        <p className="categoryLink">
          <Link to={`/${title}`}>See All</Link>
        </p>
        
              { textItems.length <= 3 && 
                <div className='items'> 
                {textItems?.map((text,index)=>{
                return (
                 <div className="item" key={index}>
                    <img src="Layer 59.png"/>
                    <div className="itemText"> 
                        <p className="date">August 26, 2013</p>
                        <p>{text}</p>
                    </div>
                </div>   
                )}
               )}
              </div>}

              { textItems.length > 3 && 
                <div className="itemsTwoRows">
                {textItems?.map((text,index)=>{
                return (
                 <div className="itemTwoRows" key={index}>
                    <img src="Layer 56.png" />
                    <div className="itemText">
                    <p className="date">August 26, 2013</p>
                    <p>{text}</p>
                  </div>
                </div>)}
                )}
               </div>} 
        </div>
  )
}

export default CategorySection