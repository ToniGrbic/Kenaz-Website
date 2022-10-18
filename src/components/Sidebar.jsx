import React from 'react'
import '../styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebarItems">

    <div className="purpleDiv">
      <div className="options">
        <p style={{color:'#FCC44D'}}>Popular</p>
        <p>Top Rated</p>
        <p>Comments</p>
      </div>
      <div className='itemsListSidebar'>
        { ['1','2','3','4','5'].map((item)=>{
          return (
          <div className='itemContent' key={item}>
            <div className='itemTextSidebar'>
              <p className='date'>August 26, 2013</p>
              <p>
                Palestinians call off peace talks after clash
              </p>
            </div>
            <img src="/Layer 5.png"/>
            <div className='comments'>
                <img src="comment copy 3.png"/><div><p>5</p></div>
            </div>
          </div>
          )
        })}
      </div>
      </div>
      <div className="social">
        <h3>Socials</h3>
        <div className="links">
          <div className="linkItem">
            <img src="/Facebook40x40.png"/>
            <div className="like"><p>Like</p></div>
            <div className='following'><p>25041 Fans</p> </div>
          </div>
          <div className="linkItem">
            <img src="/Twitter40x40.png" />
            <div className="like"><p>Follow</p></div>
            <div className='following'><p>25041 Fans</p> </div>
          </div>
          <div className="linkItem">
            <img src="/Youtube40x40.png" />
            <div className="like"><p>Subscribe</p></div>
            <div className='following'><p>25041 Fans</p> </div>
          </div>
        </div>
      </div>
    
    </div>

  )
}

export default Sidebar