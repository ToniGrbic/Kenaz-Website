import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import Sidebar from '../components/sections/Sidebar'
import '../styles/ArticlePageContent.scss'
import CommentsSection from '../components/sections/CommentsSection'
const SingleArticle = () => {

  return (
    <>
      <div className="articlePageImgDiv">
        <img src="/Layer 65.png" />
        <img src="/Layer 66.png" className="wrapperArticleImg" />
        <div className="articlePageTitleDiv">
          <p>August 26 2013</p>
          <h1>
            August 26, 2013'Margot' breathlessly reimagines Anne Frank's sister
          </h1>
        </div>
      </div>
      <div className="mainContent">
        <div>
          <section className="articlePageText">
            <p>
              Vestibulum id ligula porta felis euismod semper. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Aenean lacinia
              bibendum nulla sed consectetur.Sed posuere consectetur est at
              lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed
              consectetur. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae
              elit libero, a pharetra augue. Curabitur blandit tempus porttitor.
              Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget
              urna mollis ornare vel eu leo.
            </p>
            <img src="/Layer 67.png" />
            <p>
              Molestias ultricies, ante quam urna ut volutpat, egestas dolor
              dui, nec hac ultrices nulla non netus. Placerat vehicula donec non
              suscipit egestas, augue vel suspendisse. Et felis venenatis
              blandit sed est ultrices, adipiscing urna, at aliquam nullam
              facilisis aliquet sapien, eget duis consectetuer tristique nunc
              vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate
              vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam
              tellus laoreet congue a. Rhoncus maecenas, sit suspendisse,
              condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum
              odio nulla, mi turpis diam tellus laoreet congue.
            </p>
            <img src="/Layer 69.png" />
          </section>
          <Banner width={620} height={120} />
          <section className="aboutTheAuthor">
            <h3>About the Author</h3>
            <div className="authorText">
              <img src="/Layer 68.png" />
              <p>
                Molestias ultricies, ante quam urna ut volutpat, egestas dolor
                dui, nec hac ultrices nulla non netus. Placerat vehicula donec
                non suscipit egestas, augue vel suspendisse. Et felis venenatis
                blandit sed est ultrices, adipiscing urna, at aliquam nullam
                facilisis aliquet sapien, eget duis consectetuer tristique nunc
                vitae erat, mi purus nisl lorem.
              </p>
            </div>
          </section>
          <section className="commentsSection">
            <CommentsSection/>
          </section>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default SingleArticle