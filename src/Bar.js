import React, { Component } from "react";
import ScrollIntoView from "react-scroll-into-view";

class Bar extends Component {
  state = {};

  render() {
    return (
      <div className="bar">
        <ScrollIntoView selector="#blog" className="scrollButton">
          <p>blog</p>
        </ScrollIntoView>
        <ScrollIntoView selector="#projects">
          <p>projects</p>
        </ScrollIntoView>
        <ScrollIntoView selector="#contact">
          <p>about me</p>
        </ScrollIntoView>
      </div>
    );
  }
}

export default Bar;
