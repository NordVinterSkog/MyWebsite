import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router";
import Bar from "./Bar";
import Header from "./Header";
import Blog from "./Blog";
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <Header />
        {/* 
        <Bar /> */}
      </div>
    );
  }
}

export default App;
