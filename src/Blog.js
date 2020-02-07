import React, { Component } from "react";
import BlogArchive from "./BlogArchive.js";
import BlogNewEntries from "./BlogNewEntries.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BlogArticle from "./BlogArticle.js";

class Blog extends Component {
  state = {
    articles: [
      {
        id: "0",
        title: "Bands you need to see live.",
        text:
          "Last ten years saw a lot of changes in my perception of music. I've listened to a ton of records, attented too many shows to count",
        date: "07/02/2020"
      },
      {
        id: "1",
        title: "The thing about winter.",
        text:
          "Isn't it ironic that the things which make us feel uncomfortable turn out to do the best for us in a longrun? That's one of the reasons, I think, I've grown to become madly in love with winter",
        date: "07/02/2020"
      },
      {
        id: "2",
        title: "Pagan basis of Tolkien's works.",
        text:
          "I guess it's pretty safe to assume that most of my generation had at least heard about Lord of the Rings, it also wouldn't be exaggeration that millions of people of all ages are obssessed by the works of J.R.R. Tolkien.",
        date: "07/02/2020"
      }
    ]
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Router>
          <div className="blog" id="blog">
            <div className="overlay">
              <Route
                exact
                path="/"
                component={() => (
                  <BlogNewEntries articles={this.state.articles} />
                )}
              />
              <Route
                path="/blog/article/:id"
                component={params => (
                  <BlogArticle
                    article={this.state.articles[params.match.params.id]}
                  />
                )}
              />

              <Route
                path="/blog/archive"
                component={() => <BlogArchive articles={this.state.articles} />}
              />
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default Blog;
