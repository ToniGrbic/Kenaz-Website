import React from 'react'
const textItems = ['For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn', 'atriotsvv make cuts ... and Tim Tebow survives (so far)']
import { Link } from 'react-router-dom'
import '../styles/CategorySection.scss'

const CategorySection = ({title, color}) => {
  return (
    <div className="categoryDiv">
        <div className="stripe" style={{background:`${color}`}}></div>
        <h3>{title}</h3>
        <p className="categoryLink"><Link to="/category">See All</Link></p>
        <div className="items">
              { textItems.map((text)=>{
                return (
                 <div className="item">
                    <img src="Layer 59.png"/>
                    <div className="itemText"> 
                        <p className="date">August 26, 2013</p>
                        <p>{text}</p>
                    </div>
                </div>   
                )
              })}     
        </div>
    </div>
  )
}

export default CategorySection