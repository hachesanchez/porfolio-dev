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
    let painting = false;

    const startPosition = (e) => {
      painting = true;
      draw(e);
    };

    const endPosition = () => {
      painting = false;
      ctx.beginPath();
    };

    const draw = (e) => {
      if (!painting) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const color = '#fff193';

      ctx.lineWidth = 40;
      ctx.lineCap = 'round';
      ctx.strokeStyle = color;

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', (e) => {
      draw(e);
    });

    return () => {
      canvas.removeEventListener('mousedown', startPosition);
      canvas.removeEventListener('mouseup', endPosition);
      canvas.removeEventListener('mousemove', draw);
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
          height={700}
        //style={{ cursor: 'crosshair' }}
        >
        </canvas>
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
    </div >
  );
};

export default Hero;




// import { Container } from "react-bootstrap";
// import backgroundVideo from '../../assets/videos/hero-2.mp4'
// import arrowIcon from '../../assets/icons/icons8-down-100.png'
// import { Link as ScrollLink } from "react-scroll"; // Importa Link de react-scroll
// import "./Hero.css";

// const Hero = ({ data }) => {


//   return (
//     <>
//       <div className="hero">
//         {/* <video
//           autoPlay
//           muted
//           playsInline
//           loop
//           className="hero-video">
//           <source src={backgroundVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video> */}
//         <Container >
//           <div className="hero-Container">
//             <h1 className="hero-title">web - dev - ops</h1>
//             <p className="hero-text">
//               hello, my name is {data.username} and I'm really excited to have you
//               around!
//             </p>
//           </div>
//           <div className="arrow-icon">
//             <ScrollLink to="overTheYears-section" smooth={true} duration={100}>
//               <img src={arrowIcon} alt="Arrow icon" />
//             </ScrollLink>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Hero;
