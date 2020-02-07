import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BlogArchive = props => {
  let articles = props.articles;
  let archive = articles.map(article => (
    <p className="article">
      <Link id={article.id} to={`/blog/article/${article.id}`}>
        "{article.title}" - {article.date}
      </Link>
    </p>
  ));
  return (
    <>
      <h1 className="title">blog - archive</h1>
      <div className="articlesArchive">{archive}</div>
      <Link className="back" to="/">
        back
      </Link>
    </>
  );
};

export default BlogArchive;
