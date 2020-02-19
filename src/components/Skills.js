import React from "react";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="overlay">
        {" "}
        <h1>
          I've finished few courses on Udemy and I'm fairly confident about
          using the following:
        </h1>
        <div className="pics">
          <img
            src={require(`./icons/html-5.svg`)}
            alt="HTML-5"
            title="HTML-5"
          />
          <img src={require(`./icons/css-3.svg`)} alt="CSS-3" title="CSS-3" />
          <img
            src={require(`./icons/javascript.svg`)}
            alt="JavaScript"
            title="JavaScript"
          />
          <img
            src={require(`./icons/react.svg`)}
            alt="React.js"
            title="React.js"
          />
          <img
            src={require(`./icons/react-router.svg`)}
            alt="React Router"
            title="React Router"
          />
          <img
            src={require(`./icons/sass.svg`)}
            alt="SASS/SCSS"
            title="SASS/SCSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
