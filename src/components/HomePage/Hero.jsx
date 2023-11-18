import { Container } from 'react-bootstrap'
import './Hero.css'

const Hero = ({ data }) => {



    return (

        <>
            <div className='hero'>
                <Container>
                    <h1 className='hero-title'>
                        web - dev - ops
                    </h1>
                    <p className='hero-text'>
                        hello! my name is {data.username} and I'm really excited to have you around!
                    </p>
                </Container>
            </div>
        </>


    )

}

export default Hero