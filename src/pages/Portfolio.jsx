import React from 'react';
import Project from '../components/Project';
import project1Image from '../assets/images/image1.png';
import project2Image from '../assets/images/image2.png';
import project3Image from '../assets/images/image3.png';
import project4Image from '../assets/images/image4.png';

// This is the portfolio component that displays the projects
function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <Project
          image={project1Image}
          title="Respawn Room"
          appLink="https://respawnroom-client.onrender.com/"
          repoLink="https://github.com/Schanze117/RespawnRoom"
        />
        <Project
          image={project2Image}
          title="Weather Dashboard"
          appLink="https://weather-dashboard-tt3y.onrender.com/"
          repoLink="https://github.com/JamixB97/weather-dashboard"
        />
        <Project
          image={project3Image}
          title="Book Search Engine"
          appLink="https://book-search-engine-1xq1.onrender.com/"
          repoLink="https://github.com/JamixB97/book-search-engine"
        />
        <Project
          image={project4Image}
          title="Kanban Board"
          appLink="https://kanban-board-gq3u.onrender.com/"
          repoLink="https://github.com/JamixB97/Kanban-Board"
        />
      </div>
    </div>
  );
}

export default Portfolio;