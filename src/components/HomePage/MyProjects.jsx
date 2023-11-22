import { Container } from "react-bootstrap";
import MyProjectsCards from "./MyProjectsCards";
import odysseyImg from "../../assets/images/_2023-Flat/Odyssey-1.jpg";
import megafonoImg from "../../assets/images/_ElMegafono/ElMegafono-0.png";
import igafImg from "../../assets/images/_IGAF/Igaf-1.png";
import porfolioImg from "../../assets/images/_Porfolio/Porfolio-1.png";
import "./MyProjects.css";
import { useState } from "react";

const MyProjects = ({ data }) => {
  const { elMegafono, flatRentOdyssey, igaf, helenadev } = data;

  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <div
        className={`MyProjects ${showFullContent ? "show" : ""}`}
        onClick={toggleContent}
        style={{ cursor: "pointer" }}
      >
        <Container>
          <div className="myrojects-title">
            <h1 className="MyProjects-h1">my projects</h1>
          </div>
          <div
            className={`expandingContainer ${showFullContent ? "show" : ""}`}
          >
            <div className="MyProjectsCards">
              <MyProjectsCards
                title={elMegafono.title}
                imageSrc={megafonoImg}
                technologies={elMegafono.technologies}
                endpoint={"/el-megafono"}
              />
              <MyProjectsCards
                title={flatRentOdyssey.title}
                imageSrc={odysseyImg}
                technologies={flatRentOdyssey.technologies}
                endpoint={"/2023-a-flat-rent-odyssey"}
              />
              <MyProjectsCards
                title={igaf.title}
                imageSrc={igafImg}
                technologies={igaf.technologies}
                endpoint={"/igaf"}
              />
              <MyProjectsCards
                title={helenadev.title}
                imageSrc={porfolioImg}
                technologies={helenadev.technologies}
                endpoint={"/"}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyProjects;
