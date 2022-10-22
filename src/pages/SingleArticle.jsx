import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner'
import Sidebar from '../components/sections/Sidebar'
import '../styles/ArticlePageContent.scss'

const SingleArticle = () => {
  const [formData, setformData] = useState({
    name: '',
    email:'',
    comment:''
  })

const handleChange = (e)=>{
  const {name, value} = e.target
  setformData({...formData, [name]:value})
}

const handleSubmit = (e)=>{
    e.preventDefault()
    setformData({ name: "", email: "", comment: "" });
}

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
            <h3>Comments</h3>
            <img src="/Comments.png" />
            <h3>Add Your Comment</h3>
            <p>
              Molestias ultricies, ante quam urna ut volutpat, egestas dolor
              dui, nec hac ultrices nulla non netus. Placerat vehicula donec non
              suscipit egestas, augue vel suspendisse. Et felis venenatis
              blandit sed est ultrices, adipiscing urna.
            </p>
            <form className="commentForm" 
                  onSubmit={(e) => handleSubmit(e)}>
              <input
                value={formData.name}
                onChange={(e)=>handleChange(e)}
                type="text"
                name="name"
                placeholder="Name"
                className="textInput"
              />
              <input
                value={formData.email}
                onChange={(e)=>handleChange(e)}
                type="email"
                name="email"
                placeholder="Email Addres"
                className="textInput"
              />

              <textarea
                value={formData.comment}
                onChange={(e)=>handleChange(e)}
                name="comment"
                rows="15"
                cols="40"
                placeholder="Comment"
                className="textAreaComment"
              />
              <button type="submit" className="purpleBtn">
                Submit
              </button>
            </form>
          </section>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default SingleArticle