import React, { Component } from "react";
import $ from "jquery";
import Bar from "./components/Bar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./App.css";
import ScrollIntoView from "react-scroll-into-view";

class App extends Component {
  state = {};

  componentDidMount() {
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 0.85 * window.innerHeight) {
        $(".aboutme, .contactme").fadeIn(800);
      } else {
        $(".aboutme, .contactme").fadeOut();
      }
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 2 * window.innerHeight) {
        $(".skills h1, .pics").fadeIn(1200);
      } else {
        $(".skills h1, .pics").fadeOut();
      }
    });
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      console.log(y);
      if (y > 3 * window.innerHeight) {
        $(".previews").fadeIn(1200);
      } else {
        $(".previews").fadeOut();
      }
    });
  }

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
