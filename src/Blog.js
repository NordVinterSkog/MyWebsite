import React, { Component } from "react";
import me from "./img/me.jpg";

class Blog extends Component {
  state = {
    articles: [
      {
        id: "0",
        title: "Top 10 concerts of the last decade",
        image: { me },
        text:
          "Last ten years saw a lot of changes in my perception of music. I've listened to a ton of records, attented too many shows to count",
        shortText: ""
      },
      {
        id: "1",
        title: "The thing about winter.",
        image: { me },
        text:
          "Isn't it ironic that the things which make us feel uncomfortable turn out to do the best for us in a longrun? That's one of the reasons, I think, I've grown to become madly in love with winter",
        shortText: ""
      },
      {
        id: "2",
        title: "Pagan basis of Tolkien's works.",
        image: { me },
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
        <h1>{article.title}</h1>
        <div className="image" style={{ backgroundImage: article.image }}></div>
        <p>"{shortTexts[article.id]}..."</p>
      </div>
    ));

    return (
      <>
        <div className="blog">
          {previews}{" "}
          <button>
            <a href="/blog">Archive.</a>
          </button>
        </div>
      </>
    );
  }
}

export default Blog;
