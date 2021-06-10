import React from 'react';
import Project from './project';

export default function Projects(props) {

    return(
        <div className="projects">
        {props.projects.map((item) => {
            return <Project {...item} key={item.name}/>
        })}
        </div>
    )
    
}