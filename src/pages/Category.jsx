import React, {useState}from "react";
import { useParams, Link } from "react-router-dom";
import SingleItemMainCarousel from "../components/carousels/SingleItemMainCarousel";
import Sidebar from "../components/sections/Sidebar";
import Banner from "../components/Banner";
import '../styles/CategoryPageContent.scss'
const articles = Array(5).join(".").split(".");
const pagesSelect = Array.from(Array(10).keys());

const Category = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = (pageSelect)=>{
    setCurrentPage(pageSelect +1)
  }

  return (
    <>
      <SingleItemMainCarousel />
      <div className="mainContent">
        <div className="categoryArticles">
          <h2>{category}</h2>
          {articles?.map((article, index) => {
            return (
              <div className="categoryArticle" key={index}>
                <div className="articleTitle">
                  <h3>
                    Patriotsvv make cuts ... and Tim Tebow survives (so far)
                  </h3>
                </div>
                <div className="dateAndAuthor">
                  <p>
                    <img src="calendar.png" />
                    August 26, 2013
                  </p>
                  <p>Author: Matej Sudar</p>
                  <p>12 Comments</p>
                </div>
                <div className="articleContent">
                  <img src="/Layer 57.png" />
                  <div className="articleText">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad
                      minim veniam, quis nostrud exerci tation ullamcorper
                      suscipit lobortis nisl ut aliquip ex ea commodo.
                    </p>
                    <button className="readArticleBtn purpleBg">
                      <Link to={`/articles/${index}`}>Read Article</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pageCountDiv">
            {pagesSelect?.map((pageSelect) => {
              return (
                <div className={currentPage === (pageSelect+1)?
                               `pageSelectDiv pageSelected`
                               :'pageSelectDiv'}
                     key={pageSelect}
                     onClick={()=>handleClick(pageSelect)}>
                  <p>{pageSelect + 1}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Sidebar />
      </div>
      <Banner width={620} height={120} />
    </>
  );
};

export default Category;
