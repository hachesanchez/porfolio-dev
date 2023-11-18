import { Container, Row, Col } from 'react-bootstrap'
import './Education.css'

const Education = ({ data: { title, courses } }) => {



    return (

        <>
            <div className='Education'>
                <Container>

                    <Row>

                        <Col md={4} >
                            <h1 className='Education-title'>
                                {title}
                            </h1>
                        </Col>

                        <Col md={8}>
                            <div className='Education-text'>
                                {courses.map((e, idx) => (
                                    <p key={idx} className='course'>
                                        <span className='course-school'> {e.school} </span>
                                        <span className='course-title'> {e.courseTitle}</span>
                                        <br />
                                        <span className='course-info'>{e.info}</span>
                                    </p>
                                ))}
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>
        </>


    )

}

export default Education