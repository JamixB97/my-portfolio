import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Replace with your logo image path

// This is the navigation component that contains the links to the different pages
function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          ABOUT ME
        </Link>
        <Link
          to="/portfolio"
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        >
          PORTFOLIO
        </Link>
      </div>
      <div className="nav-center">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>
      <div className="nav-right">
        <Link
          to="/contact"
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          CONTACT
        </Link>
        <Link
          to="/resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          RESUME
        </Link>
      </div>
    </div>
  );
}

export default Nav;