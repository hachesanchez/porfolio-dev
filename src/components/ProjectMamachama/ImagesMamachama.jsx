import { Container, Carousel } from 'react-bootstrap'
import mamachamaImg0 from '/src/assets/images/_Mamachama/Mamachama-0.png'
import mamachamaImg1 from '/src/assets/images/_Mamachama/Mamachama-1.png'
import mamachamaImg2 from '/src/assets/images/_Mamachama/Mamachama-2.png'
import mamachamaImg3 from '/src/assets/images/_Mamachama/Mamachama-3.png'
import mamachamaImg4 from '/src/assets/images/_Mamachama/Mamachama-4.png'
import mamachamaImg5 from '/src/assets/images/_Mamachama/Mamachama-5.png'
import mamachamaImg6 from '/src/assets/images/_Mamachama/Mamachama-6.png'
import mamachamaImg7 from '/src/assets/images/_Mamachama/Mamachama-7.png'
import mamachamaImg8 from '/src/assets/images/_Mamachama/Mamachama-8.png'
import mamachamaImg9 from '/src/assets/images/_Mamachama/responsive-1.png'
import mamachamaImg10 from '/src/assets/images/_Mamachama/responsive-2.png'
import mamachamaImg11 from '/src/assets/images/_Mamachama/responsive-3.png'
import './ImagesMamachama.css'


const ImagesMamachama = () => {

    const mamachamaImages = [
        mamachamaImg9, mamachamaImg10, mamachamaImg11, mamachamaImg0, mamachamaImg1, mamachamaImg2, mamachamaImg3, mamachamaImg4, mamachamaImg5, mamachamaImg6, mamachamaImg7, mamachamaImg8
    ]

    return (

        <>
            <div className="mamachama-images-component">
                <Container className='mamachama-images-container'>

                    <Carousel>
                        {mamachamaImages.map((e, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={e} className='mamachama-carousel-images img fluid' alt={`Slide ${idx + 1}`} />
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Container>
            </div>

        </>

    )
}

export default ImagesMamachama