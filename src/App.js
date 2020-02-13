import React, { Component } from "react";
import Bar from "./components/Bar";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

class App extends Component {
  state = {};

  changeArrow = () => {
    console.log(this.state.arrowActive);
    this.setState({
      arrowActive: !this.state.arrowActive
    });
    console.log(this.state.arrowActive);
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
