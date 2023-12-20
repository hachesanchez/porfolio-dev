import { Container } from 'react-bootstrap'
import './LinksDevOps.css'

const LinksDevOps = ({ repository }) => {

    return (


        <div className="DevOps-links-component">
            <Container>

                <div className="links-container">
                    <div className="Devops-repo">
                        <p className="DevOps-repo-title">
                            Repository:
                        </p>
                        <ul>
                            <li>
                                <a
                                    href={repository}
                                    className="DevOps-webrepo"
                                    target='blank'
                                    rel='noopener noreferrer'
                                >
                                    {repository}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
        </div>

    )
}

export default LinksDevOps