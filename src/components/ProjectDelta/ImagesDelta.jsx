import { Container, Carousel } from 'react-bootstrap'
import deltaImg0 from '/src/assets/images/_Delta/Delta-0.png'
import deltaImg1 from '/src/assets/images/_Delta/Delta-1.png'
import deltaImg2 from '/src/assets/images/_Delta/Delta-2.png'
import deltaImg3 from '/src/assets/images/_Delta/Delta-3.png'
import deltaImg4 from '/src/assets/images/_Delta/Delta-4.png'
import deltaImg5 from '/src/assets/images/_Delta/delta-responsive-1.png'
import deltaImg6 from '/src/assets/images/_Delta/delta-responsive-2.png'
import deltaImg7 from '/src/assets/images/_Delta/delta-responsive-3.png'
import deltaImg8 from '/src/assets/images/_Delta/delta-responsive-4.png'
import './ImagesDelta.css'


const ImagesDelta = () => {

    const deltaImages = [
        deltaImg0, deltaImg1, deltaImg2, deltaImg3, deltaImg4, deltaImg5, deltaImg6, deltaImg7, deltaImg8
    ]

    return (

        <>
            <div className="delta-images-component">
                <Container className='delta-images-container'>

                    <Carousel>
                        {deltaImages.map((e, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={e} className='delta-carousel-images img fluid' alt={`Slide ${idx + 1}`} />
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Container>
            </div>

        </>

    )
}

export default ImagesDelta