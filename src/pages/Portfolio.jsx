import React from 'react';
import Project from '../components/Project';
import project1Image from '../assets/images/image1.png';
import project2Image from '../assets/images/image2.png';
import project3Image from '../assets/images/image3.png';
import project4Image from '../assets/images/image4.png';
import project5Image from '../assets/images/image5.png';
import project6Image from '../assets/images/image6.png';

// This is the portfolio component that displays the projects
function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <Project
          image={project1Image}
          title="Tic Tac Toe"
          appLink="https://jamixb97.github.io/tic-tac-toe/"
          repoLink="https://github.com/JamixB97/tic-tac-toe"
        />
        <Project
          image={project2Image}
          title="Weather Dashboard"
          appLink="https://weather-dashboard-tt3y.onrender.com/"
          repoLink="https://github.com/JamixB97/weather-dashboard"
        />
        <Project
          image={project3Image}
          title="Employee Tracker"
          appLink="https://drive.google.com/file/d/1kttU8trywQQhlW6lplvpPc5YxH6OA5uo/view?usp=sharing"
          repoLink="https://github.com/JamixB97/employee-tracker"
        />
        <Project
          image={project4Image}
          title="Vehicle Builder"
          appLink="https://drive.google.com/file/d/1ex9MfAXx3TeeFldD9ydGkOH9dWoN8l33/view?usp=sharing"
          repoLink="https://github.com/JamixB97/vehicle-builder"
        />
        <Project
          image={project5Image}
          title="README Generator"
          appLink="https://drive.google.com/file/d/10ZOSQl6H78NoiHqLLVuhDjcQvjVzKdUe/view?usp=sharing"
          repoLink="https://github.com/JamixB97/readme-generator"
        />
        <Project
          image={project6Image}
          title="CSS Code Snippets"
          appLink="https://jamixb97.github.io/css-code-snippets/"
          repoLink="https://github.com/JamixB97/css-code-snippets"
        />
      </div>
    </div>
  );
}

export default Portfolio;