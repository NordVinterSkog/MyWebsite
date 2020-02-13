import React, { Component } from "react";

class Project extends Component {
  state = {
    projects: [
      {
        id: 0,
        title: "FlagChallenge",
        description: "Simple API based flag quiz game.",
        link: "https://nordvinterskog.github.io/FlagChallenge/"
      },
      {
        id: 1,
        title: "Metronome",
<<<<<<< HEAD:src/Projects.js
        description: "My first React project.",
=======
        description: "My first project in React.",
>>>>>>> tmp:src/components/Projects.js
        link: "https://nordvinterskog.github.io/Metronome/"
      }
    ]
  };
  render() {
    let projects = this.state.projects;
    let previews = projects.map(project => (
      <div className="project" key={project.id}>
        <div className="image">
          <h1 className="title">
            {project.title}

            <i className="fab fa-github"></i>
          </h1>
          <a href={project.link}>
            {" "}
            <img
              alt={project.title}
              src={require(`../img/projects/${project.id}.jpg`)}
            />
          </a>
        </div>

        <p>{project.description}</p>
      </div>
    ));
    return (
      <>
        <div className="projects" id="projects">
          <div className="overlay">
            <h1 className="title">projects</h1>
            <div className="previews">{previews}</div>{" "}
          </div>
        </div>
      </>
    );
  }
}

export default Project;
