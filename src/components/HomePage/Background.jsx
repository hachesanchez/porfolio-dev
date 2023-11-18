import { Container } from 'react-bootstrap'
import './Background.css'

const Background = ({ data: { title, intro, skills } }) => {


    return (

        <>
            <div className='Background'>
                <Container>

                    <h1 className='Background-title'>
                        {title}
                    </h1>
                    <p className="Background-intro">
                        {intro}
                    </p>
                    {skills.map((e, idx) => (
                        <ul className="Background-skills" key={idx}>
                            <li className='Background-list'>
                                {e}
                            </li>
                        </ul>
                    ))}

                </Container>
            </div>
        </>


    )

}

export default Background