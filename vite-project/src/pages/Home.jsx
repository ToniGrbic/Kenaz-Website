import React from 'react'
import SingleItemCarousel from '../components/SingleItemCarousel';
import Header from '../components/Header'
import CategorySection from '../components/CategorySection';
import Banner from '../components/Banner'
const Home = () => {
  return (
      <div className="App">
          <Header />
          <div className="contentWrapper">
              <SingleItemCarousel />
              <Banner width={'620'} height={'120'}/>
              <CategorySection title="News" color="#3677B5"/>
              <CategorySection title="Sport" color="#84C14F"/>
"
          </div>
          <footer className="footer">

          </footer>

      </div>
  )
}

export default Home