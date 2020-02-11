import React, { Component } from "react";
import Bar from "./Bar";
import Header from "./Header";
import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";
import ScrollIntoView from "react-scroll-into-view";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {};

  changeArrow = () => {
    this.setState({
      arrowActive: !this.state.arrowActive
    });
  };

  lightningAnimation = () => {};

  render() {
    return (
      <div className="wrapper">
        <Header />

        <Bar />
        <div className="page">
          {window.location.pathname === "/" ? (
            <button className="up">
              <ScrollIntoView selector="#header">
                <i class="fas fa-arrow-up active"></i>
              </ScrollIntoView>
            </button>
          ) : null}
          <Blog changeArrow={this.changeArrow} />
          <Projects />
          <Contact />
          <footer id="footer"></footer>
        </div>
      </div>
    );
  }
}

export default App;
