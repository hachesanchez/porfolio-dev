import './LinksMegafono.css'
import { Container } from 'react-bootstrap'

const LinksMegafono = ({ repository, link }) => {

    return (

        <div className="megafono-links-component">
            <Container >

                <div className='links-container' >
                    <div className="megafono-web">
                        <a
                            className="megafono-weblink"
                            href={link}
                            target='blank'
                            rel="noopener noreferrer"
                        >
                            {link}
                        </a>
                    </div>
                    <div className="megafono-repo">
                        <p className='megafono-repo-title'>
                            Repository:
                        </p>
                        <ul>
                            <li>
                                Client:
                                <a
                                    className="megafono-webrepo"
                                    href={repository.client}
                                    target='blank'
                                    rel="noopener noreferrer"
                                >
                                    {repository.client}
                                </a>
                            </li>
                            <li>
                                Server:
                                <a
                                    className="megafono-webrepo"
                                    href={repository.server}
                                    target='blank'
                                    rel="noopener noreferrer"
                                >
                                    {repository.server}
                                </a>
                            </li>

                        </ul>
                    </div >
                </div>

            </Container >
        </div>

    )
}

export default LinksMegafono