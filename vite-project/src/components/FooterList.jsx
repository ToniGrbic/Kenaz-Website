import React from 'react'

const FooterList = () => {
  return (
    <div className='listContainer'>

        { ['1', '2', '3'].map((item,index)=>{
            return (
                <div className='listItem' key={index}>
            
                    <div className="listItemText">
                        
                        <p>August 26, 2013</p>
                        <p>Palestinians call off
                        peace talks after clash</p>
                        <div className="viewsNum">5</div>
                    </div>
                    <img src="Layer 63.png" />
                </div>
            )
        })}
       
    </div>
  )
}

export default FooterList