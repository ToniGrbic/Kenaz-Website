import React, { useState } from "react";
import "../../styles/ArticlePageContent.scss";
const CommentsSection = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, comment } = formData;
    if (name && email && comment) {
      setformData({ name: "", email: "", comment: "" });
    } else alert("fill in all the fields");
  };

  return (
    <>
      <h3>Comments</h3>
      <img src="/Comments.png" alt="comments"/>
      <h3>Add Your Comment</h3>
      <p>
        Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec
        hac ultrices nulla non netus. Placerat vehicula donec non suscipit
        egestas, augue vel suspendisse. Et felis venenatis blandit sed est
        ultrices, adipiscing urna.
      </p>
      <form className="commentForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          value={formData.name}
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          placeholder="Name"
          className="textInput"
        />
        <input
          value={formData.email}
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          placeholder="Email Addres"
          className="textInput"
        />

        <textarea
          value={formData.comment}
          onChange={(e) => handleChange(e)}
          name="comment"
          rows="15"
          cols="40"
          placeholder="Comment"
          className="textAreaComment"
        />
        <button type="submit" className="purpleBg">
          Submit
        </button>
      </form>
    </>
  );
};

export default CommentsSection;
