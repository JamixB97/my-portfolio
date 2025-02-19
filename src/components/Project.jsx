import React from 'react';

function Project({ image, title, appLink, repoLink }) {
  return (
    <div className="project">
      <div className="project-image-container">
        <img src={image} alt={`${title} screenshot`} className="project-image" />
        <div className="project-info">
          <h2>{title}</h2>
          <div className="project-links">
            <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;