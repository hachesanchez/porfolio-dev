import { Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {

    const cvLink = 'https://drive.google.com/file/d/1YmPbe4XKqypA8FAxprPJM4ihZrXfvslL/view?usp=sharing'

    return (

        <>
            <div className='Footer'>
                <Container>

                    <p className='Footer-title'>
                        SAY HELLO
                        <br />
                        <br />
                        helena.sangar@gmail.com
                    </p>
                    <hr className='hr' />
                    <a
                        className="cv"
                        href={cvLink}
                        target='blank'
                        rel="noopener noreferrer"
                    >
                        Review CV
                    </a>

                </Container>
            </div>
        </>


    )

}

export default Footer