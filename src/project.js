import React from 'react';

export default function Project(props) {
    return(
        <section className="projectsection" >
        <img className="projectphoto" src={process.env.PUBLIC_URL + `/images/${props.coverImage}`} alt="minature of the project" />
        <div className="projectinfo" >
          <h1><strong>{props.name}</strong></h1>
          <h2>{props.place} | {props.timePeriod}</h2>
          <p>{props.description}</p>
          <p className="technologies">Technologies Used: {props.technologies}</p>
          <a href={props.link} >Go to the solution</a>
        </div>
      </section>
    )
    
}