import { Container, Carousel } from 'react-bootstrap'
// import IgafImg1 from '/_IGAF/Igaf-1.png'
// import IgafImg2 from '/_IGAF/Igaf-2.png'
// import IgafImg3 from '/_IGAF/Igaf-3.png'
// import IgafImg4 from '/_IGAF/Igaf-4.png'
// import IgafImg5 from '/_IGAF/Igaf-5.png'
// import IgafImg6 from '/_IGAF/Igaf-6.png'
// import IgafImg7 from '/_IGAF/Igaf-7.png'
// import IgafImg8 from '/_IGAF/Igaf-8.png'
// import IgafImg9 from '/_IGAF/Igaf-9.png'
// import IgafImg10 from '/_IGAF/Igaf-10.png'
// import IgafImg11 from '/_IGAF/Igaf-11.png'
import IgafImg1 from '/src/assets/images/_IGAF/Igaf-1.png'
import IgafImg2 from '/src/assets/images/_IGAF/Igaf-2.png'
import IgafImg3 from '/src/assets/images/_IGAF/Igaf-3.png'
import IgafImg4 from '/src/assets/images/_IGAF/Igaf-4.png'
import IgafImg5 from '/src/assets/images/_IGAF/Igaf-5.png'
import IgafImg6 from '/src/assets/images/_IGAF/Igaf-6.png'
import IgafImg7 from '/src/assets/images/_IGAF/Igaf-7.png'
import IgafImg8 from '/src/assets/images/_IGAF/Igaf-8.png'
import IgafImg9 from '/src/assets/images/_IGAF/Igaf-9.png'
import IgafImg10 from '/src/assets/images/_IGAF/Igaf-10.png'
import IgafImg11 from '/src/assets/images/_IGAF/Igaf-11.png'

import './ImagesIgaf.css'


const ImagesIgaf = () => {

    const IgafImages = [
        IgafImg1, IgafImg2, IgafImg3, IgafImg4, IgafImg5, IgafImg6, IgafImg7, IgafImg8, IgafImg9, IgafImg10, IgafImg11
    ]

    return (

        <>
            <div className="Igaf-images-component">
                <Container className='Igaf-images-container'>

                    <Carousel>
                        {IgafImages.map((e, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={e} className='Igaf-carousel-images img fluid' alt={`Slide ${idx + 1}`} />
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Container>
            </div>

        </>

    )
}

export default ImagesIgaf