import React, { Component } from "react";
import Bar from "./Bar";
import Header from "./Header";
import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

class App extends Component {
  state = {
    arrowActive: true
  };

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
          {this.state.arrowActive ? (
            <button className="up">
              <ScrollIntoView selector="#header">
                <i className="fas fa-arrow-up"> </i>
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
