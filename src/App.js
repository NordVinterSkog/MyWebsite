import React, { Component } from "react";
import Bar from "./Bar";
import Header from "./Header";
import Blog from "./Blog";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <Header />

        <Bar />
        <div className="page">
          <button className="up">GO UP</button>
          <Blog />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
