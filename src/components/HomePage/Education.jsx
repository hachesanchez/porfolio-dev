import { Container, Row, Col } from 'react-bootstrap'
import './Education.css'

const Education = () => {


    return (

        <>
            <div className='Education'>
                <Container>

                    <Row>

                        <Col md={4} >
                            <h1 className='Education-title'>
                                education
                            </h1>
                        </Col>

                        <Col md={8}>
                            <div className='Education-text'>

                                <p className='course'>
                                    <span className='course-school'>Ironhack </span>
                                    <span className='course-title'> Bootcamp - DevOps</span>
                                    <br />
                                    <div className='course-info'>Oct 2023 - Dec 2023</div>
                                </p>
                                <p className='course'>
                                    <span className='course-school'>Academind </span>
                                    <span className='course-title'>Course - Docker & Kubernetes</span>
                                    <br />
                                    <div className='course-info'>Jul 2023 - Oct 2023</div>
                                </p>
                                <p className='course'>
                                    <span className='course-school'>Ironhack </span>
                                    <span className='course-title'> Bootcamp - Fullstack Web Developer</span>
                                    <br />
                                    <div className='course-info'>Apr 2023 - Jun 2023</div>
                                </p>
                                <p className='course'>
                                    <span className='course-school'>Google </span>
                                    <span className='course-title'> Course - Professional IT support certifications</span>
                                    <br />
                                    <div className='course-info'>2022</div>
                                </p>
                                <p className='course'>
                                    <span className='course-school'>Edit </span>
                                    <span className='course-title'> Master - Design Thinking for business innovation</span>
                                    <br />
                                    <div className='course-info'>2017-2018</div>
                                </p>
                                <p className='course'>
                                    <span className='course-school'>Rey Juan Carlos I University of Madrid </span>
                                    <span className='course-title'> Double degree - Journalism and Media </span>
                                    <br />
                                    <div className='course-info'>2007-2012</div>
                                </p>

                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>


    )

}

export default Education