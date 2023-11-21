import { Container, Carousel } from 'react-bootstrap'
// import megafonoImg1 from '/_El Megáfono_img/El Megágono-1.png'
// import megafonoImg2 from '/_El Megáfono_img/El Megágono-2.png'
// import megafonoImg3 from '/_El Megáfono_img/El Megágono-3.png'
// import megafonoImg4 from '/_El Megáfono_img/El Megágono-4.png'
// import megafonoImg5 from '/_El Megáfono_img/El Megágono-5.png'
// import megafonoImg6 from '/_El Megáfono_img/El Megágono-6.png'
// import megafonoImg7 from '/_El Megáfono_img/El Megágono-7.png'
// import megafonoImg8 from '/_El Megáfono_img/El Megágono-8.png'
// import megafonoImg9 from '/_El Megáfono_img/El Megágono-9.png'
import megafonoImg1 from '/src/assets/images/_ElMegafono/ElMegafono-1.png'
import megafonoImg2 from '/src/assets/images/_ElMegafono/ElMegafono-2.png'
import megafonoImg3 from '/src/assets/images/_ElMegafono/ElMegafono-3.png'
import megafonoImg4 from '/src/assets/images/_ElMegafono/ElMegafono-4.png'
import megafonoImg5 from '/src/assets/images/_ElMegafono/ElMegafono-5.png'
import megafonoImg6 from '/src/assets/images/_ElMegafono/ElMegafono-6.png'
import megafonoImg7 from '/src/assets/images/_ElMegafono/ElMegafono-7.png'
import megafonoImg8 from '/src/assets/images/_ElMegafono/ElMegafono-8.png'
import megafonoImg9 from '/src/assets/images/_ElMegafono/ElMegafono-9.png'
import './ImagesMegafono.css'


const ImagesMegafono = () => {

    const megafonoImages = [
        megafonoImg1, megafonoImg2, megafonoImg3, megafonoImg4, megafonoImg5, megafonoImg6, megafonoImg7, megafonoImg8, megafonoImg9
    ]

    return (

        <>
            <div className="megafono-images-component">
                <Container className='megafono-images-container'>

                    <Carousel>
                        {megafonoImages.map((e, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={e} className='megafono-carousel-images img fluid' alt={`Slide ${idx + 1}`} />
                            </Carousel.Item>
                        ))}

                    </Carousel>
                </Container>
            </div>

        </>

    )
}

export default ImagesMegafono