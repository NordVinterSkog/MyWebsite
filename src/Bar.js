import React, { Component } from "react";

class Bar extends Component {
  state = {};

  render() {
    return (
      <div className="bar">
        <button>About me</button>
        <button>Blog</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    );
  }
}

export default Bar;
