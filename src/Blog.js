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
        text: (
          <div>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
          </div>
        ),
        date: "07/02/2020"
      },
      {
        id: "1",
        title: "The thing about winter.",
        text: (
          <div>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
          </div>
        ),
        date: "07/02/2020"
      },
      {
        id: "2",
        title: "Pagan basis of Tolkien's works.",
        text: (
          <div>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
            <p>just checking stuff out</p>
          </div>
        ),

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
