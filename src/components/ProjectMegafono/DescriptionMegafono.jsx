import { Container, Row, Col } from 'react-bootstrap'
import './DescriptionMegafono.css'

const DescriptionMegafono = ({ description }) => {

    return (

        <>
            <div className="megafono-description-component">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            {description.map((e, idx) => (
                                <div key={idx} >
                                    <p className="megafono-subtitle">
                                        {e.subtitle}
                                    </p>
                                    <br />
                                    {e.content.map((e, idx) => (
                                        <p key={idx} className="megafono-content">
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

export default DescriptionMegafono