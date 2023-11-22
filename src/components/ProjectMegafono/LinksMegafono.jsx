import "./LinksMegafono.css";
import { Container } from "react-bootstrap";

const LinksMegafono = ({ repository, link: { dns, credentials } }) => {
  return (
    <div className="megafono-links-component">
      <Container>
        <div className="links-container">
          <div className="megafono-web">
            <a
              className="megafono-weblink"
              href={dns}
              target="blank"
              rel="noopener noreferrer"
            >
              {dns}
            </a>
            <p className="megafono-credentials">{credentials}</p>
          </div>
          <div className="megafono-repo">
            <p className="megafono-repo-title">Repository:</p>
            <ul>
              <li>
                <a
                  className="megafono-webrepo"
                  href={repository.client}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Client
                </a>
              </li>
              <li>
                <a
                  className="megafono-webrepo"
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

export default LinksMegafono;
