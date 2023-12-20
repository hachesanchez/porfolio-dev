import './LinksPorfolio.css'
import { Container } from 'react-bootstrap'

const LinksPorfolio = ({ repository, link }) => {


    return (

        <div className="Porfolio-links-component">
            <Container >

                <div className='links-container' >
                    <div className="Porfolio-web">
                        <a
                            className="Porfolio-weblink"
                            href={link}
                            target='blank'
                            rel="noopener noreferrer"
                        >
                            {repository}
                        </a>
                    </div>
                    <div className="Porfolio-repo">
                        <p className='Porfolio-repo-title'>
                            Repository:
                        </p>
                        <ul>
                            <li>
                                <a
                                    className="Porfolio-webrepo"
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

export default LinksPorfolio