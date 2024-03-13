import "./LinksMamachama.css";
import { Container } from "react-bootstrap";

const LinksMamachama = ({ repository, link }) => {
  return (
    <div className="mamachama-links-component">
      <Container>
        <div className="links-container">
          <div className="Mamachama-web">
            <a
              className="Mamachama-weblink"
              href={link}
              target='blank'
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </div>
          <div className="mamachama-repo">
            <p className="mamachama-repo-title">Repository:</p>
            <ul>
              <li>
                <a
                  className="mamachama-webrepo"
                  href={repository.client}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Client
                </a>
              </li>
              <li>
                <a
                  className="mamachama-webrepo"
                  href={repository.server}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Server
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LinksMamachama;
