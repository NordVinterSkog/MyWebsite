import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const BlogNewEntries = props => {
  let articles = props.articles;
  let shortTexts = [];
  for (let i = 0; i < articles.length; i++) {
    console.log(articles[i].text);
    console.log(articles[i].text.props.children[0].props.children);
    let shortText = articles[i].text.props.children[0].props.children.slice(
      0,
      150
    );
    shortText = shortText.slice(
      0,
      Math.min(shortText.length, shortText.lastIndexOf(" "))
    );
    shortTexts.push(shortText);
  }
  let previews = articles.map(article => (
    <div className="article">
      <div className="image">
        <h1 className="title">
          {article.title}
          <h1>Click to read.</h1>
        </h1>

        <Link
          id={article.id}
          to={`/blog/article/${article.id}`}
          className="article"
        >
          <img
            alt={article.title}
            src={require(`./img/articles/${article.id}.jpg`)}
          />
        </Link>
      </div>
      <p>"{shortTexts[article.id]}..."</p>
    </div>
  ));
  return (
    <div>
      <h1 className="title">blog - newest entries</h1>
      <div className="articles">{previews}</div>
      <Link to="/blog/archive" className="archive">
        archive
      </Link>
    </div>
  );
};

export default BlogNewEntries;
