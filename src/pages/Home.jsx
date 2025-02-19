import image from '../assets/images/profile.jpg';

export default function Home() {
  return (
    <div className='home'>
      <h1>About Me</h1>
      <img src={image} alt="Image of me" className='img'></img>
      <p>
        My name is James Boulden, and I currently reside in Southern Oregon.
        I love to design and create with videoapgraphy, photography, and now with
        web development. Check out my work on the Portfolio page!
      </p>
    </div>
  );
}
