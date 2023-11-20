import './LinksIgaf.css'
import { Container } from 'react-bootstrap'

const LinksIgaf = ({ repository, link }) => {

    return (

        <div className="Igaf-links-component">
            <Container >

                <div className='links-container' >
                    <div className="Igaf-web">
                        <a
                            className="Igaf-weblink"
                            href={link}
                            target='blank'
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    </div>
                    <div className="Igaf-repo">
                        <p className='Igaf-repo-title'>
                            Repository:
                        </p>
                        <ul>
                            <li>
                                <a
                                    className="Igaf-webrepo"
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

export default LinksIgaf