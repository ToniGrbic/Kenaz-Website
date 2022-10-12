import React from 'react'
import SingleItemCarousel from '../components/SingleItemCarousel';
import Header from '../components/Header'

const Home = () => {
  return (
      <div className="App">
          <Header />
          <div className="contentWrapper">
              <SingleItemCarousel />
          </div>

          <footer className="footer">

          </footer>

      </div>
  )
}

export default Home