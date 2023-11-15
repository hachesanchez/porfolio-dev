import { Container } from 'react-bootstrap'
import './Background.css'

const Background = () => {


    return (

        <>
            <div className='Background'>
                <Container>

                    <h1 className='Background-title'>
                        There won't be success without diversity.
                    </h1>
                    <p className="Background-intro">
                        I strongly believe that progress involves collective learning and that value can be contributed from various places. This is what photography has given me:
                    </p>
                    <ul className="Background-skills">
                        <li className='Background-list'>Sense of responsibility</li>
                        <li className='Background-list'> Organized workflow </li>
                        <li className='Background-list'> Creativity </li>
                        <li className='Background-list'> Leadership</li>
                        <li className='Background-list'> Troubleshooting capacities </li >
                        <li className='Background-list'>Versatility and continuous learning attitude </ li>
                    </ul>

                </Container>
            </div>
        </>


    )

}

export default Background