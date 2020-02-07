import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BlogArticle = props => {
  let article = props.article;
  console.log(props.article);
  return (
    <div className="singleArticle">
      <h1>"{article.title}"</h1>
      <p>{article.text}</p>{" "}
      <Link className="back" to="/">
        back
      </Link>
    </div>
  );
};

export default BlogArticle;
