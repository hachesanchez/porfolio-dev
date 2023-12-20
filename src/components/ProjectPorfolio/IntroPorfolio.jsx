import { Container } from 'react-bootstrap'
import './IntroPorfolio.css'

const IntroPorfolio = ({ intro }) => {

    return (

        <>
            <div className='Porfolio-intro-component'>
                <Container>

                    <p className="Porfolio-intro-text">
                        {intro}
                    </p>

                </Container>
            </div>
        </>

    )
}

export default IntroPorfolio