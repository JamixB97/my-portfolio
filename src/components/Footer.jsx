import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/JamixB97" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/your-stackoverflow-id" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
}