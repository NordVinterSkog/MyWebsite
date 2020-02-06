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
    scroll: 0
  };

  scrollWindow = () => {
    console.log(window.scrollX);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="wrapper">
        <Header />

        <Bar />
        <div className="page">
          <button onClick={this.scrollWindow} className="up">
            <i class="fas fa-arrow-up"></i>
          </button>
          <Blog />
          <Projects />
          <Contact />
          <footer id="footer"></footer>
        </div>
      </div>
    );
  }
}

export default App;
