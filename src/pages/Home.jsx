import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CategorySection from "../components/CategorySection";
import SingleItemMainCarousel from "../components/carousels/SingleItemMainCarousel";
import TwoItemCategoryCarousel from "../components/carousels/TwoItemCategoryCarousel";
import SingleItemCategoryCarousel from "../components/carousels/SingleItemCategoryCarousel";
import ZoomCarousel from "../components/carousels/ZoomCarousel";

const textItems1 = ['For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn', 'atriotsvv make cuts ... and Tim Tebow survives (so far)']
const textItems2 = ['For Obama, MLKs shadow looms large ahead of sp', 'NASA releases portrait of a planet waving at Saturn', 'atriotsvv make cuts ... and Tim Tebow survives (so far)', 'For Obama, MLKs shadow looms large ahead of sp']

const Home = () => {
  return (
    <>
        <div>
          
          <SingleItemMainCarousel />
          <div className="mainContent">
            <div>
              <CategorySection
                title="News"
                color="#3677B5"
                textItems={textItems1}
              />
              <CategorySection
                title="Sport"
                color="#84C14F"
                textItems={textItems1}
              />
              <Banner width={620} height={120} />
              <CategorySection
                title="Business"
                color="#EE6151"
                textItems={textItems2}
              />
              <Banner width={620} height={120} />
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
            </div>
            <Sidebar />
          </div>

          <Banner width={940} height={120} />
          <ZoomCarousel />
        </div>
    </>
  );
};

export default Home;
