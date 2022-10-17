import React from 'react'
import '../styles/Footer.scss'
import FooterList from '../components/FooterList'

const socials = [{ image: 'Signal.png', color:'#F8BC2E'},
                 { image: 'Facebook.png', color: '#39599F'},
                 { image: 'twitter.png', color: '#45B0E3'},
                 { image: 'Ball.png', color: '#D97AA5'},
                 { image: 'in.png', color: '#65B7D2'},
                 { image: 'YouTube.png', color: '#E70031'},
                 { image: 'Skype.png', color: '#00C6FF'}]
const Footer = () => {
  return (
      <footer className='footer'>
        <div className="footerWrapper">

        <div className='footerStripe'/>
        <div className='footerContent'>
            <div className='footerSection'>
                <div className='titleDiv'>
                    <img src="/Vector Smart Objecta 1.png"/>
                    <h3 className='title'>Kenaz</h3>
                </div>
                  <p className='pTagGrey'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Vivamus leo ante.</p>
                  <div className='socialLinks'>
                  { socials?.map((social,index)=>{
                      return (
                            <div className="baseSquare" key={index}
                                 style={{background:`${social.color}`}}>
                                <img src={`${social.image}`} />
                            </div>   
                        )
                  })}
                  </div>
            </div>   
              <div className='footerSection'>
                  <h3>Newsletter</h3>
                  <p className='pTagGrey'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Vivamus leo ante.</p>
                 <form onSubmit={(e)=>e.preventDefault()}>
                    <div className='subscribeDiv'>
                        <input type="email" 
                               className="emailInput"
                               placeholder='Your Email'/>
                        <button className='subscribeBtn'
                                type="submit">
                                Subscribe
                        </button>
                    </div>
                 </form>
              </div>
              <div className='footerSection'>
                  <h3>Tags Widget</h3>
                  <div className="widgetsList">
                      <div className='widget'>assueverit</div>
                      <div className='widget'>utroquoe</div>
                      <div className='widget'>probo</div>
                      <div className='widget'>assuev</div>
                      <div className='widget'>probo</div>
                      <div className='widget'>assuevverit</div>
                      <div className='widget'>titl</div>
                      <div className='widget highlitedWidget'>assuevverit</div>
                      <div className='widget'>assuevverit</div>
                      <div className='widget'>utroquoe</div>
                      <div className='widget'>probo</div>
                      <div className='widget'>assuevverit</div>
                      <div className='widget'>utroquoe</div>
                  </div>
              </div>
              <div className='footerSection'>
                  <h3>Featured</h3>
                  <FooterList/>
              </div>
              <div className='footerSection'>
                  <h3>Random Posts</h3>
                  <FooterList/>
              </div>
              <div className='footerSection'>
                  <h3>Twitter Feed</h3>
              </div>
        </div>
     </div>
     <div className="copywright">
              <p>© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</p>
              <p>Typography  -  Templates  -  Contact Form  -  404 Page</p>
     </div>
    </footer>
  )
}

export default Footer