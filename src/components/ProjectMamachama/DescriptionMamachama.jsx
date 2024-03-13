import { Container, Row, Col } from 'react-bootstrap'
import './DescriptionMamachama.css'

const DescriptionMamachama = ({ description }) => {

    return (

        <>
            <div className="mamachama-description-component">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            {description.map((e, idx) => (
                                <div key={idx} >
                                    <p className="mamachama-subtitle">
                                        {e.subtitle}
                                    </p>
                                    <br />
                                    {e.content.map((e, idx) => (
                                        <p key={idx} className="mamachama-content">
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

export default DescriptionMamachama