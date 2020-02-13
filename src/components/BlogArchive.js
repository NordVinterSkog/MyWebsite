import React from "react";
import { Link } from "react-router-dom";

const BlogArchive = props => {
  let articles = props.articles;
  let archive = articles.map(article => (
    <p className="article" key={article.id}>
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
        <button className="up">
          <i className="fas fa-arrow-up"></i>
        </button>
      </Link>
    </>
  );
};

export default BlogArchive;
