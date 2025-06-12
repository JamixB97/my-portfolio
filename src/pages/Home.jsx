import image from '../assets/images/profile.jpg';

// This is the home component that displays the about me section
export default function Home() {
  return (
    <div className="home">
      <h1>About Me</h1>
      <div className="home-content">
        <img src={image} alt="Image of me" className="img" />
        <p>
          My name is James Boulden, and I currently reside in Southern Oregon. I am an enthusiastic individual with skills in working in both team-based and independent
          capacities, bringing strong work ethic and excellent team building skills to any setting.
          I am newly certified and have experience with developing comprehensive web solutions using modern frameworks
          and languages, utilizing both front-end and back-end skills to create seamless and
          responsive applications. I have knowledge of debugging and optimizing code to ensure high
          performance and user satisfaction. Check out my work on the Portfolio page!
        </p>
      </div>
    </div>
  );
}