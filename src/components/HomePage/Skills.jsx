import { Container, Row, Col } from 'react-bootstrap'
import './Skills.css'

const Skills = ({ data }) => {


    return (

        <>
            <div className='Skills'>
                <Container>

                    <div className="skill">

                        {data.map((e, idx) => (
                            <div key={idx}>
                                <h1 key={idx} className="skill-title">
                                    {e.title}
                                </h1>
                                <p className="skill-text">
                                    {e.text}
                                </p>
                            </div>
                        ))}

                    </div>

                </Container>
            </div>
        </>


    )

}

export default Skills