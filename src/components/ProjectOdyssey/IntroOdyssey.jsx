import { Container } from 'react-bootstrap'
import './IntroOdyssey.css'

const IntroOdyssey = ({ intro }) => {

    return (

        <>
            <div className='Odyssey-intro-component'>
                <Container>

                    <div className="Odyssey-intro-text">
                        {intro && intro.map((e, idx) => (
                            <p key={idx} className='Odyssey-intro-text'>{e}</p>
                        ))}
                    </div>

                </Container>
            </div>
        </>

    )
}

export default IntroOdyssey