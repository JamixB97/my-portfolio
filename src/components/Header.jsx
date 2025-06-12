import Nav from './Nav';
import image from '../assets/images/logo.png';

// This is the header component that will be used on all pages
// It contains the name and the navigation bar
export default function Header() {
  return (
    <div className="h-container">
      <div className="header">
          <Nav />
      </div>
    </div>
  );
}
