import { Container, Row, Col } from 'react-bootstrap'
import './DescriptionDevOps.css'

const DescriptionDevOps = ({ description }) => {

    return (

        <>
            <div className="DevOps-description-component">
                <Container>
                    <Row>

                        <Col sm={12} md={12} lg={8} xl={8}>
                            {description.map((e, idx) => (
                                <div key={idx}>
                                    <p className='DevOps-subtitle'>
                                        {e.subtitle}
                                    </p>
                                    <br />
                                    <p className='DevOps-content'>
                                        {e.content}
                                    </p>
                                </div>
                            ))}
                        </Col>

                    </Row>
                </Container>
            </div>
        </>

    )
}

export default DescriptionDevOps