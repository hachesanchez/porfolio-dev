import { Container, Row, Col } from 'react-bootstrap'
import './Skills.css'

const Skills = () => {


    return (

        <>
            <div className='Skills'>
                <Container>

                    <div className="skill">

                        <h1 className="skill-title">
                            DEVOPS
                        </h1>
                        <p className="skill-text">
                            Linux | Azure | Docker | Kubernetes | Ansible | Terraform | Prometheus | Grafana
                        </p>
                    </div>
                    <div className="skill">
                        <h1 className="skill-title">
                            WEB
                        </h1>
                        <p className="skill-text">
                            JavaScript | Express | NodeJs | React | MongoDB | HTML | CSS | Git | Postman
                        </p>
                    </div>
                    <div className="skill">
                        <h1 className="skill-title">
                            PHOTO
                        </h1>
                        <p className="skill-text">
                            Adobe Premiere | Final Cut Pro | Photoshop | Lightroom | Capture One | InDesign
                        </p>
                    </div>
                    <div className="skill">
                        <h1 className="skill-title">
                            LANGUAGES
                        </h1>
                        <p className="skill-text">
                            Spanish (native) | English (professional) | French (advanced) | Italian (beginner) | Catalan (beginner)
                        </p>

                    </div>

                </Container>
            </div>
        </>


    )

}

export default Skills