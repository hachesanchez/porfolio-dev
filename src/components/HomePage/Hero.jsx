import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import arrowIcon from '../../assets/icons/icons8-down-100.png';
import bashIcon from '../../assets/icons/icons8-console-25.png';
import './Hero.css';

const Hero = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.style.cursor = `url('${bashIcon}') 12.5 12.5, auto`
    const ctx = canvas.getContext('2d');

    const draw = (x, y) => {

      const color = '#fff193';

      // const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, 0);
      // gradient.addColorStop(0, '#FFF193'); // Start color
      // gradient.addColorStop(0.3, '#CCC69F');
      // gradient.addColorStop(0.6, '#99957D');
      // gradient.addColorStop(1, '#66613F');

      ctx.lineWidth = 80;
      ctx.lineCap = 'round';
      //ctx.strokeStyle = gradient;  
      ctx.strokeStyle = color;
      ctx.shadowColor = "#D9CD7E";

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      draw(x, y);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-computer">
        <canvas
          ref={canvasRef}
          className="hero-canvas"
          id="paint"
          width={window.innerWidth}
          height={window.innerHeight}
        ></canvas>
        <div className="arrow-icon">
          <ScrollLink to="overTheYears-section" smooth={true} duration={100}>
            <img src={arrowIcon} alt="Arrow icon" />
          </ScrollLink>
        </div>
      </div>

      <div className="hero-mobile">
        <Container>
          <div className="hero-Container">
            <h1 className="hero-title">web - dev - ops</h1>
            <p className="hero-text">
              hello, my name is {data.username} and I'm really excited to have you around!
            </p>
          </div>
          <div className="arrow-icon">
            <ScrollLink to="overTheYears-section" smooth={true} duration={100}>
              <img src={arrowIcon} alt="Arrow icon" />
            </ScrollLink>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
