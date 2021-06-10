import './App.css';
import React from 'react';
import {useEffect, useState} from 'react'; 
import Projects from './projects';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])
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
        <img data-aos="fade-right" className="profilephoto" loading="lazy" src={process.env.PUBLIC_URL + "/images/profile.png"} alt="portait of Julia Swidron, standing in front of colorfull wall" />
        <div data-aos="fade-left" className="sectioninfo" >
          <h1>hi, I'm <strong>Julia</strong></h1>
          <p>
          I have 5 years of experience in <i>web development / web design</i>. During this time I was a hard-working team member. Because of my international background I'm adaptable and flexible.  {<br/>}{<br/>}I am always looking for opportunities where I can use my technical and creative skills to create user concentrated digital solutions. 
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
            <a target="_blank" href="https://github.com/juliaswidron10">
            <img  src={process.env.PUBLIC_URL + "/images/github.svg"} alt="github logo" />
            <p>GitHub</p>
              </a></li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/julia-swidron-b5642a172/">
              <img src={process.env.PUBLIC_URL + "/images/linkedin.svg"} alt="linkedIn logo" />
              <p>LinkedIn</p>
            </a></li>
        </ul>
      </div>
      <div className="background"></div>
      <Projects projects={projects} />

      <footer data-aos="fade-down"><h1>Thank you!</h1><p>Feel free to contact me at: juliaswidron10@gmail.com</p></footer>
    </div>
  );
}

export default App;
