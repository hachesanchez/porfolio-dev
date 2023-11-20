import { Container, Row, Col } from 'react-bootstrap'
import './DescriptionIgaf.css'

const DescriptionIgaf = ({ description }) => {

    return (

        <>
            <div className="Igaf-description-component">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            {description.map((e, idx) => (
                                <div key={idx} >
                                    <p className="Igaf-subtitle">
                                        {e.subtitle}
                                    </p>
                                    <br />
                                    {e.content.map((e, idx) => (
                                        <p key={idx} className="Igaf-content">
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

export default DescriptionIgaf