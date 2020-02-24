import React, { Component } from "react";
import Bar from "./components/Bar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <Header />

        <Bar />
        <div className="page">
          <button className="up">
            <ScrollIntoView selector="#header">
              <i className="fas fa-arrow-up active"></i>
            </ScrollIntoView>
          </button>
          <Contact />
          <Skills />
          <Projects />
          <footer id="footer">
            All pictures taken by me. Icons by FontAwesome.
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
