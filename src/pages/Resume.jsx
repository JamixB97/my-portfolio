import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaNetworkWired, FaGithub } from 'react-icons/fa';
import { SiExpress, SiTypescript, SiPostgresql } from 'react-icons/si';
// import resumeFile from '../assets/files/resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a href='#' download className="resume-download">
        Download My Resume
      </a>
      <h2>Proficiencies</h2>
      <ul className="proficiencies-list">
        <li><FaGitAlt /> Git</li>
        <li><FaGithub /> GitHub</li>
        <li><FaHtml5 /> HTML</li>
        <li><FaCss3Alt /> CSS</li>
        <li><FaJs /> JavaScript</li>
        <li><SiTypescript /> TypeScript</li>
        <li><FaReact /> React</li>
        <li><FaNodeJs /> Node.js</li>
        <li><SiExpress /> Express.js</li>
        <li><SiPostgresql /> PostgreSQL</li>
        <li><FaNetworkWired /> REST APIs</li>
      </ul>
    </div>
  );
}

export default Resume;