import React from 'react'
import SingleItemCarouselMain from '../components/SingleItemCarouselMain';
import Header from '../components/Header'
import CategorySection from '../components/CategorySection';
import Banner from '../components/Banner'
import CategoryCarousel from '../components/CategoryCarousel';
import ZoomCarousel from '../components/ZoomCarousel';

const Home = () => {
  return (
      <div className="App">
          <Header />
            <div className="contentWrapper">
                <div className="mainContent">
                    <Banner width={940} 
                            height={120}/>
                    <SingleItemCarouselMain />
                    <CategorySection title="News" color="#3677B5"/>
                    <CategorySection title="Sport" color="#84C14F"/>
                    <Banner width={620} 
                            height={120}/>
                    <CategorySection title="Business" color="#EE6151"/>
                    <Banner width={620} 
                            height={120} />
                    <CategoryCarousel 
                        title="News Carousel" 
                        color="#FCC44D"
                        slidesToScroll={2}
                        slidesToShow={2}
                    />
                    <div className="singleItemCarousel">
                      <CategoryCarousel
                        title="Editorials"
                        color="#A99765"
                      />
                      <CategoryCarousel
                        title="Local News"
                        color="#A99765"
                      />
                    </div>
                    <Banner width={940} 
                            height={120}/>
                    <ZoomCarousel/>
                </div>
            </div>
          <footer className="footer">

          </footer>

      </div>
  )
}

export default Home