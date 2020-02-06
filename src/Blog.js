import React, { Component } from "react";

class Blog extends Component {
  state = {
    articles: [
      {
        id: "0",
        title: "Bands you need to see live.",
        text:
          "Last ten years saw a lot of changes in my perception of music. I've listened to a ton of records, attented too many shows to count",
        shortText: ""
      },
      {
        id: "1",
        title: "The thing about winter.",
        text:
          "Isn't it ironic that the things which make us feel uncomfortable turn out to do the best for us in a longrun? That's one of the reasons, I think, I've grown to become madly in love with winter",
        shortText: ""
      },
      {
        id: "2",
        title: "Pagan basis of Tolkien's works.",
        text:
          "I guess it's pretty safe to assume that most of my generation had at least heard about Lord of the Rings, it also wouldn't be exaggeration that millions of people of all ages are obssessed by the works of J.R.R. Tolkien.",
        shortText: ""
      }
    ]
  };

  componentDidMount() {}

  render() {
    let articles = this.state.articles;
    let shortTexts = [];
    for (let i = 0; i < articles.length; i++) {
      console.log(articles[i].text);
      let shortText = articles[i].text.slice(0, 150);
      console.log(shortText);
      shortText = shortText.slice(
        0,
        Math.min(shortText.length, shortText.lastIndexOf(" "))
      );
      shortTexts.push(shortText);
    }
    console.log(shortTexts);
    let previews = articles.map(article => (
      <div className="article">
        <div className="image">
          <h1 className="title">
            {article.title}
            <h1>Click to read.</h1>
          </h1>
          <a href={`/blog/archive/${article.id}`}>
            {" "}
            <img
              alt={article.title}
              src={require(`./img/articles/${article.id}.jpg`)}
            />
          </a>
        </div>

        <p>"{shortTexts[article.id]}..."</p>
      </div>
    ));

    return (
      <>
        <div className="blog" id="blog">
          <div className="overlay">
            <h1 className="title">blog - newest entries</h1>
            <div className="articles">{previews}</div>{" "}
            <h1 className="title">
              <a href="/blog/archive" className="archive">
                archive
              </a>
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
