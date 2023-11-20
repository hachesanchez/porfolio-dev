import { Container, Carousel } from 'react-bootstrap'
import OdysseyImg1 from '../../assets/images/_2023 Flat/Odyssey-1.jpg'
import OdysseyImg2 from '../../assets/images/_2023 Flat/Odyssey-2.png'
import OdysseyImg3 from '../../assets/images/_2023 Flat/Odyssey-3.png'
import OdysseyImg4 from '../../assets/images/_2023 Flat/Odyssey-4.png'
import OdysseyImg5 from '../../assets/images/_2023 Flat/Odyssey-5.png'
import './ImagesOdyssey.css'


const ImagesOdyssey = () => {

    const OdysseyImages = [
        OdysseyImg1, OdysseyImg2, OdysseyImg3, OdysseyImg4, OdysseyImg5
    ]

    return (

        <>
            <div className="Odyssey-images-component">
                <Container className='Odyssey-images-container'>

                    <Carousel>
                        {OdysseyImages.map((e, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={e} className='Odyssey-carousel-images img fluid' alt={`Slide ${idx + 1}`} />
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Container>
            </div>

        </>

    )
}

export default ImagesOdyssey