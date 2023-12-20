import { Container } from 'react-bootstrap'
import './IntroDevOps.css'

const IntroDevOps = ({ intro }) => {

    return (

        <>
            <div className='DevOps-intro-component'>
                <Container>

                    <p className="DevOps-intro-text">
                        {intro}
                    </p>
                </Container>

            </div>

        </>
    )
}

export default IntroDevOps