import React from "react";

function PageCard(props) {
  return (
    <div className="row justify-content-center container">
      {props.projects.reverse().map(project => (
      <div className="card1 col-lg-3 col-md-5 col-sm-12 shadow-lg p-1 m-3 rounded" key={project.id}>
        <div className="card-body text-center m-0 p-0 card1">
          <a href={project.url} target="_blank" rel="noreferrer" className="card-link text-reset cardlinks">{project.title}
          <img src={project.image} className ="card-img-top" rel="noreferrer" alt={project.title} width="350px" /></a>
        </div>
        <div className="card-body text-center m-0 pb-0 align-text-bottom">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="card-link cardlinks">github</a>}
          {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="card-link cardlinks">live</a>}
        </div>
      </div>
        ))}
    </div>
  );
}

export default PageCard;
