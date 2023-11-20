import { Container } from 'react-bootstrap'
import './IntroIgaf.css'

const IntroIgaf = ({ intro }) => {

    return (

        <>
            <div className='Igaf-intro-component'>
                <Container>

                    {intro.map((e, idx) => (

                        <div key={idx}>
                            <p className="Igaf-intro-text"> {e.overview} </p>

                            {e.features && e.features.map((feature, featureIdx) => (
                                <div className="igaf-features" key={featureIdx}>
                                    <div className='igaf-features-description'>
                                        <p className="igaf-feature-title">{feature.title}</p>
                                        <span className="igaf-feature-description"> {feature.description}</span>
                                    </div>
                                    <br />
                                </div>
                            ))}

                        </div>

                    ))}

                </Container >
            </div >
        </>

    )
}

export default IntroIgaf