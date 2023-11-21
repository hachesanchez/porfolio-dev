import { Container, Row, Col } from 'react-bootstrap'
import './Education.css'
import { useState } from 'react'

const Education = ({ data: { title, courses } }) => {

    const [showFullContent, setShowFullContent] = useState(false)

    const toogleContent = () => {
        setShowFullContent(!showFullContent)
    }

    return (

        <>
            <div className='Education' onClick={toogleContent} style={{ cursor: 'pointer' }}>
                <Container>

                    <Row className='align-items-center row-Education'>

                        <Col md={4} className='Education-title-col'>
                            <h1 className='Education-title' >
                                {title}
                            </h1>
                        </Col>

                        <Col md={8} className='align-items-center Education-text-col'>
                            <div className='Education-text'>
                                {showFullContent && courses.map((e, idx) => (
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