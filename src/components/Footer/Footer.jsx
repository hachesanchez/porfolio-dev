import { Container, Col, Image } from 'react-bootstrap'
import gitImg from './../../assets/icons/icon-git.png'
import linkedinImg from './../../assets/icons/icon-LinkedIn.png'

import './Footer.css'

const Footer = () => {

    const cvLink = 'https://drive.google.com/file/d/1IXHS1W_jnVMHhCegZYarUaQmQfPpc1L6/view?usp=sharing'

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


                    <div className="media-icons rounded-pill d-flex justify-content-start">
                        <a
                            href="https://www.linkedin.com/in/helena-garcia-webdev/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image className="contact-icon" src={linkedinImg} alt="linkedin-icon" />
                        </a>
                        <a
                            href="https://github.com/hachesanchez?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image className="contact-icon" src={gitImg} alt="git-icon" />
                        </a>
                    </div>


                </Container>
            </div>
        </>


    )

}

export default Footer