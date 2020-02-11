import React from "react";
import { Link } from "react-router-dom";

const BlogArticle = props => {
  let article = props.article;
  console.log(props.article);
  return (
    <div
      className="singleArticle"
      style={{ backgroundImage: `url(img/articles/2.jpg)` }}
    >
      <h1>"{article.title}"</h1>
      <div className="textarea">{article.text}</div>
      <Link className="back" to="/" onClick={props.changeArrow}>
        <button onClick={props.changeArrow} className="up">
          <i className="fas fa-arrow-up"></i>
        </button>
      </Link>
    </div>
  );
};

export default BlogArticle;
