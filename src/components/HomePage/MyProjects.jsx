import { Container } from 'react-bootstrap'
import MyProjectsCards from './MyProjectsCards'
import odysseyImg from '../../assets/images/_2023 Flat/Start_OK.jpg'
import megafonoImg from '../../assets/images/_El Megáfono_img/El Megágono-0.png'
import igafImg from '../../assets/images/_IGAF/Igaf-1.png'
import './MyProjects.css'

const MyProjects = ({ data }) => {

    const { elMegafono, flatRentOdyssey, igaf } = data

    return (

        <>
            <div className='MyProjects'>

                <Container>
                    <div className='myrojects-title'>
                        <h1 className='MyProjects-h1'>
                            my proyects
                        </h1>
                    </div>

                    <div className='MyProjectsCards'>
                        <MyProjectsCards
                            title={elMegafono.title}
                            imageSrc={megafonoImg}
                            technologies={elMegafono.technologies}
                            endpoint={'/el-megafono'}
                        />
                        <MyProjectsCards
                            title={flatRentOdyssey.title}
                            imageSrc={odysseyImg}
                            technologies={flatRentOdyssey.technologies}
                            endpoint={'/2023-a-flat-rent-odyssey'}
                        />
                        <MyProjectsCards
                            title={igaf.title}
                            imageSrc={igafImg}
                            technologies={igaf.technologies}
                            endpoint={'/igaf'}
                        />
                    </div>

                </Container>

            </div>
        </>


    )

}

export default MyProjects