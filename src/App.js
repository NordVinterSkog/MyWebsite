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
        <Bar />
        <div className="page">
          {" "}
          <Header />
          <Blog />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
