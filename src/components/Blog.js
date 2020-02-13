import React, { Component } from "react";
import BlogArchive from "./BlogArchive.js";
import BlogNewEntries from "./BlogNewEntries.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogArticle from "./BlogArticle.js";

class Blog extends Component {
  state = {
    articles: []
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Router>
          <div className="blog" id="blog">
            <div className="overlay">
              <h1>Nothing to see here yet. </h1>
              <Route
                exact
                path="/MyWebsite/"
                component={() => (
                  <BlogNewEntries articles={this.state.articles} />
                )}
              />
              <Route
                path="/MyWebsite/blog/article/:id"
                component={params => (
                  <BlogArticle
                    article={this.state.articles[params.match.params.id]}
                  />
                )}
              />

              <Route
                path="/MyWebsite/blog/archive"
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
