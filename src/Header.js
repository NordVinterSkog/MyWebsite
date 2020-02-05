import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Blog from "./Blog";
import Projects from "./Projects";
import Aboutme from "./Aboutme";
import Contact from "./Contact";

const Header = () => {
  return (
    <div className="header">
      <Router>
        <div className="bar">
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

          <a href="/aboutme">
            <button>About</button>
          </a>
          <a href="/blog">
            <button>Blog</button>
          </a>

          <a href="/projects">
            <button>Projects</button>
          </a>

          <a href="/contact">
            <button>Contact</button>
          </a>
        </div>
      </Router>
      <div className="page"></div>
    </div>
  );
};

export default Header;
