import React, { Component } from "react";
import Bar from "./components/Bar";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
