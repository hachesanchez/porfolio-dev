import { Link } from 'react-router-dom'
import './LinksMegafono.css'
import { Container } from 'react-bootstrap'

const LinksMegafono = ({ repository, link }) => {

    return (

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
                    <h5>
                        Repository:
                    </h5>
                    <ul>
                        <li>Client: {repository.client} </li>
                        <li>Server: {repository.server} </li>

                    </ul>
                </div >
            </div>
        </Container >

    )
}

export default LinksMegafono