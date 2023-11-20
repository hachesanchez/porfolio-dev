import './LinksOdyssey.css'
import { Container } from 'react-bootstrap'

const LinksOdyssey = ({ repository, link }) => {

    return (

        <div className="Odyssey-links-component">
            <Container >

                <div className='links-container' >
                    <div className="Odyssey-web">
                        <a
                            className="Odyssey-weblink"
                            href={link}
                            target='blank'
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    </div>
                    <div className="Odyssey-repo">
                        <p className='Odyssey-repo-title'>
                            Repository:
                        </p>
                        <ul>
                            <li>
                                <a
                                    className="Odyssey-webrepo"
                                    href={repository}
                                    target='blank'
                                    rel="noopener noreferrer"
                                >
                                    {repository}
                                </a>
                            </li>
                        </ul>
                    </div >
                </div>

            </Container >
        </div>

    )
}

export default LinksOdyssey