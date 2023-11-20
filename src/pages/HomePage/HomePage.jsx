import Hero from "../../components/HomePage/Hero"
//import Word from "../../components/HomePage/Word"
import Education from "../../components/HomePage/Education"
import OverTheYears from "../../components/HomePage/OverTheYears"
import Skills from "../../components/HomePage/Skills"
import Background from "../../components/HomePage/Background"
import MyProjects from "../../components/HomePage/MyProjects"
import { Row, Col } from 'react-bootstrap'

import './HomePage.css'



const HomePage = ({ data: { personalInfo, education, background, overTheYears, skills, projects } }) => {



    return (

        <>

            <div className="home-page">

                <Hero data={personalInfo} />
                {/* <Word /> */}
                <OverTheYears data={overTheYears} />
                <Education data={education} />
                <Row className="skills-background">
                    <Col md={6} className="skills-col">
                        <Skills data={skills} />
                    </Col>
                    <Col md={6}>
                        <Background data={background} />
                    </Col>
                </Row>
                <MyProjects data={projects} />

            </div>

        </>
    )
}

export default HomePage