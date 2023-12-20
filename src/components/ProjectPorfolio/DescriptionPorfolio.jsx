import { Container, Row, Col } from 'react-bootstrap'
import './DescriptionPorfolio.css'

const DescriptionPorfolio = ({ description }) => {

    return (

        <>
            <div className="Porfolio-description-component">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            {description.map((e, idx) => (
                                <div key={idx} >
                                    <p className="Porfolio-subtitle">
                                        {e.subtitle}
                                    </p>
                                    <br />
                                    {e.content.map((e, idx) => (
                                        <p key={idx} className="Porfolio-content">
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

export default DescriptionPorfolio