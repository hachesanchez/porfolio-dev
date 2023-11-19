import { Container } from 'react-bootstrap'
import './IntroMegafono.css'

const IntroMegafono = ({ intro }) => {

    return (

        <>
            <Container>
                <p className="megafono-intro-text">
                    {intro}
                </p>
            </Container>
        </>

    )
}

export default IntroMegafono