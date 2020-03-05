import React, { Component } from "react";

class Project extends Component {
  state = {
    projects: [
      {
        id: 0,
        title: "FlagChallenge",
        description: "A flag quiz game.",
        link: "https://nordvinterskog.github.io/FlagChallenge/"
      },
      {
        id: 1,
        title: "WeatherApp",
        description: "Simple weather app based on three APIs.",
        link: "https://nordvinterskog.github.io/WeatherApp/"
      },
      {
        id: 2,
        title: "OrcSoundboard",
        description: "Soundboard of Peon from Polish version of Warcraft III.",
        link: "https://nordvinterskog.github.io/OrcSoundboard/"
      },
      {
        id: 3,
        title: "IcelandicSchool",
        description:
          "Signup screen for fake Icelandic school, with language selection.",
        link: "https://nordvinterskog.github.io/IcelandicSchool/"
      }
    ]
  };
  render() {
    let projects = this.state.projects;
    let previews = projects.map(project => (
      <div className="project" key={project.id}>
        <a href={project.link}>
          <h1 className="title">{project.title}</h1>
          <p className="description">{project.description}</p>
        </a>
      </div>
    ));
    return (
      <>
        <div className="projects" id="projects">
          <div className="overlay">
            <div className="previews">{previews}</div>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default Project;
