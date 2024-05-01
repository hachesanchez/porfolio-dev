import { Container, Row, Col } from 'react-bootstrap'
import './DescriptionDelta.css'

const DescriptionDelta = ({ description }) => {

    return (

        <>
            <div className="delta-description-component">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            {description.map((e, idx) => (
                                <div key={idx} >
                                    <p className="delta-subtitle">
                                        {e.subtitle}
                                    </p>
                                    <br />
                                    {e.content.map((e, idx) => (
                                        <p key={idx} className="delta-content">
                                            {e}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </Col>
                    </Row>

                </Container>
            </div>
        </>

    )
}

export default DescriptionDelta