import { Container } from 'react-bootstrap'
import './IntroMamachama.css'

const IntroMamachama = ({ intro }) => {

    return (

        <>
            <div className='mamachama-intro-component'>
                <Container>

                    <p className="mamachama-intro-text">
                        {intro}
                    </p>

                </Container>
            </div>
        </>

    )
}

export default IntroMamachama