import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

// This is the footer component that contains social media icons
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/JamixB97" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
}