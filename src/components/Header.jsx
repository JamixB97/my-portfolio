import Nav from './Nav';

// This is the header component that will be used on all pages
// It contains the name and the navigation bar
export default function Header() {
  return (
    <div className="h-container">
      <div className="header">
        <h1>James Boulden</h1>
          <Nav />
      </div>
    </div>
  );
}
