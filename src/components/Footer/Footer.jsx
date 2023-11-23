import { Container, Row, Image } from "react-bootstrap";
import gitImg from "./../../assets/icons/icon-git.png";
import linkedinImg from "./../../assets/icons/icon-LinkedIn.png";

import "./Footer.css";

const Footer = ({ onDropALineClick }) => {

  const cvLink =
    "https://drive.google.com/file/d/1IXHS1W_jnVMHhCegZYarUaQmQfPpc1L6/view?usp=sharing";

  const estudioH = "https://estudio-h.es/";

  return (
    <>
      <div className="Footer">
        <Container>

          <Row>
            <p className="Footer-title">
              SAY HELLO
              <br />
              <br />
              helena.sangar@gmail.com
              <br />
              <span className="drop-a-line" onClick={onDropALineClick} >
                or drop a line here
              </span>
            </p>
            <hr className="hr" />
            <a
              className="cv"
              href={cvLink}
              target="blank"
              rel="noopener noreferrer"
            >
              Review CV
            </a>
            <a
              className="estudio-h"
              href={estudioH}
              target="blank"
              rel="noopener noreferrer"
            >
              Photo and video: ESTUDIO-H
            </a>

            <div className="media-icons rounded-pill d-flex justify-content-start">
              <a
                href="https://www.linkedin.com/in/helena-garcia-webdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="contact-icon-lin"
                  src={linkedinImg}
                  alt="linkedin-icon"
                />
              </a>
              <a
                href="https://github.com/hachesanchez?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="contact-icon-git"
                  src={gitImg}
                  alt="git-icon"
                />
              </a>
            </div>
          </Row>

        </Container>
      </div>
    </>
  );
};

export default Footer;
