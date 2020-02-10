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
        description: "Enough said.",
        link: "#"
      }
    ]
  };
  render() {
    let projects = this.state.projects;
    let previews = projects.map(project => (
      <div className="project">
        <div className="image">
          <h1 className="title">
            {project.title}

            <i class="fab fa-github"></i>
          </h1>
          <a href={project.link}>
            {" "}
            <img
              alt={project.title}
              src={require(`./img/projects/${project.id}.jpg`)}
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
