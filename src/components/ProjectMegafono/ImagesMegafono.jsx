import { Container, Carousel } from 'react-bootstrap'
import megafonoImg1 from '../../assets/images/_El Megáfono_img/El Megágono-1.png'
import megafonoImg2 from '../../assets/images/_El Megáfono_img/El Megágono-2.png'
import megafonoImg3 from '../../assets/images/_El Megáfono_img/El Megágono-3.png'
import megafonoImg4 from '../../assets/images/_El Megáfono_img/El Megágono-4.png'
import megafonoImg5 from '../../assets/images/_El Megáfono_img/El Megágono-5.png'
import megafonoImg6 from '../../assets/images/_El Megáfono_img/El Megágono-6.png'
import megafonoImg7 from '../../assets/images/_El Megáfono_img/El Megágono-7.png'
import megafonoImg8 from '../../assets/images/_El Megáfono_img/El Megágono-8.png'
import megafonoImg9 from '../../assets/images/_El Megáfono_img/El Megágono-9.png'
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