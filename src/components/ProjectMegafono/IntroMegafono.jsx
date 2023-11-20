import { Container } from 'react-bootstrap'
import './IntroMegafono.css'

const IntroMegafono = ({ intro }) => {

    return (

        <>
            <div className='megafono-intro-component'>
                <Container>

                    <p className="megafono-intro-text">
                        {intro}
                    </p>

                </Container>
            </div>
        </>

    )
}

export default IntroMegafono