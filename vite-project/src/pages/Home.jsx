import React from 'react'
import SingleItemMainCarousel from '../components/SingleItemMainCarousel';
import Header from '../components/Header'
import CategorySection from '../components/CategorySection';
import Banner from '../components/Banner'
import TwoItemCategoryCarousel from '../components/TwoItemCategoryCarousel';
import SingleItemCategoryCarousel from '../components/SingleItemCategoryCarousel'
import ZoomCarousel from '../components/ZoomCarousel';
import Footer from '../components/Footer'
const textItems1 = ['For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn', 'atriotsvv make cuts ... and Tim Tebow survives (so far)']
const textItems2 = ['For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn', 'atriotsvv make cuts ... and Tim Tebow survives (so far)', 'For Obama, MLKs shadow looms large ahead of sp']

const Home = () => {
  return (
      <div className="App">
          <Header />
            <div className="contentWrapper">
                <div className="mainContent">
                    <Banner width={940} 
                            height={120}/>
                    <SingleItemMainCarousel />
                    <CategorySection 
                            title="News" 
                            color="#3677B5"
                            textItems={textItems1}/>
                    <CategorySection 
                            title="Sport" 
                            color="#84C14F"
                            textItems={textItems1}/>
                    <Banner 
                            width={620} 
                            height={120}/>
                    <CategorySection 
                            title="Business" 
                            color="#EE6151"
                            textItems={textItems2}/>
                    <Banner 
                            width={620} 
                            height={120} />
                    <TwoItemCategoryCarousel 
                            title="News Carousel" 
                            color="#FCC44D"
                            textItems={textItems2}
                    />
                    <div className="singleItemCarousel">
                      <SingleItemCategoryCarousel
                        title="Editorials"
                        color="#A99765"
                        textItems={textItems2}
                      />
                      <SingleItemCategoryCarousel
                        title="Local News"
                        color="#A99765"
                        textItems={textItems2}
                      />
                    </div>
                    <Banner width={940} 
                            height={120}/>
                    <ZoomCarousel/>
                   
                </div> 
            </div>
            <Footer/>
      </div>
  )
}

export default Home