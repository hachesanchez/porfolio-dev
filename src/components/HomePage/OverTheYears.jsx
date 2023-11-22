import { Container } from "react-bootstrap";
import "./OverTheYears.css";
import { useState } from "react";

const OverTheYears = ({ data: { title, text } }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
      <div
        className={`overTheYears ${showFullContent ? "show" : ""}`}
        onClick={toggleContent}
        style={{ cursor: "pointer" }}
      >
        <Container>
          <h1 className="overTheYears-title">{title}</h1>
          <div
            className={`expandingContainer ${showFullContent ? "show" : ""}`}
          >
            {text.map((e, idx) => (
              <p key={idx} className="overTheYears-text">
                {e}
              </p>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OverTheYears;
