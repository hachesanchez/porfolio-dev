import { Container } from 'react-bootstrap'
import './IntroDelta.css'

const IntroDelta = ({ intro }) => {

    return (

        <>
            <div className='delta-intro-component'>
                <Container>

                    <p className="delta-intro-text">
                        {intro}
                    </p>

                </Container>
            </div>
        </>

    )
}

export default IntroDelta