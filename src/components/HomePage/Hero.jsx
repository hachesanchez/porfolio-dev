import { Container } from "react-bootstrap";
import backgroundVideo from '../../assets/videos/hero-test-1.mp4'
import "./Hero.css";

const Hero = ({ data }) => {
  return (
    <>
      <div className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container>
          <h1 className="hero-title">web - dev - ops</h1>
          <p className="hero-text">
            hello, my name is {data.username} and I'm really excited to have you
            around!
          </p>
        </Container>
      </div>
    </>
  );
};

export default Hero;
