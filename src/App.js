import './App.css';
import React from 'react';
import {useEffect, useState} from 'react'; 
import Projects from './projects'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
   fetch( "https://portfolio-f43b.restdb.io/rest/portfolio2021" , {
      method: "get",
      dataType: 'json',
      headers: {
        "Content-Type": "application/json; charset=uft-8" ,
        "x-apikey": "60c1462df2a01c34b8ed36f8" ,
        "cache-control": "no-catche"
  }
})
.then(response => response.json())
.then(response => { 
  setProjects(response);
})
  }, []);

  console.log(projects)
  return (
    <div className="App">
      <header>
        <h1>JuliaZofia</h1>
      </header>
      <section className="aboutme">
        <img className="profilephoto" src={process.env.PUBLIC_URL + "/images/profile.png"} alt="portait of Julia Swidron, standing in front of colorfull wall" />
        <div className="sectioninfo" >
          <h1>hi, I'm <strong>Julia</strong></h1>
          <p>
          5 years of experience in <i>web development / web design</i>. During this time I was a hard-working team member. Because of my international background I'm adaptable and flexible.  {<br/>}{<br/>}I am looking for a position where I can use my technical and creative skills to create user concentrated digital solutions. 
          </p>
        </div>
      </section>
      <div className="scrolldown">
        <h1>Scroll</h1>
        <p>to discover my projects!</p>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://github.com/juliaswidron10">
            <img  src={process.env.PUBLIC_URL + "/images/github.svg"} alt="github logo" />
            <p>GitHub</p>
              </a></li>
          <li>
            <a href="https://www.linkedin.com/in/julia-swidron-b5642a172/">
              <img src={process.env.PUBLIC_URL + "/images/linkedin.svg"} alt="linkedIn logo" />
              <p>LinkedIn</p>
            </a></li>
        </ul>
      </div>
      <div className="background"></div>
      <Projects projects={projects} />
    </div>
  );
}

export default App;
