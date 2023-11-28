import React from "react";
import Hero from '../../components/HomePage/Hero';
import Education from "../../components/HomePage/Education";
import OverTheYears from "../../components/HomePage/OverTheYears";
import Skills from "../../components/HomePage/Skills";
import Background from "../../components/HomePage/Background";
import MyProjects from "../../components/HomePage/MyProjects";
import { Row, Col } from "react-bootstrap";

import "./HomePage.css";

const HomePage = ({ data: { personalInfo, education, background, overTheYears, skills, projects }, }) => {

  return (
    <>
      <div className="home-page">
        <Row>
          <div id='hero-section'>
            <Hero data={personalInfo} />
          </div>
        </Row>
        <Row>
          <div id='overTheYears-section'>
            <OverTheYears data={overTheYears} />
          </div>
        </Row>
        <Row>
          <div id='education-section'>
            <Education data={education} />
          </div>
        </Row>
        <Row className="skills-background" id='skills-background-section'  >
          <Col md={6} className="skills-col">
            <Skills data={skills} />
          </Col>
          <Col md={6}>
            <Background data={background} />
          </Col>
        </Row>
        <Row>
          <div id='projects-section'>
            <MyProjects data={projects} />
          </div>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
