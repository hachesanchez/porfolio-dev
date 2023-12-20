import IntroPorfolio from '../../components/ProjectPorfolio/IntroPorfolio'
import DescriptionPorfolio from '../../components/ProjectPorfolio/DescriptionPorfolio'
import LinksPorfolio from '../../components/ProjectPorfolio/LinksPorfolio'
//import ImagesPorfolio from '../../components/ProjectPorfolio/ImagesPorfolio'

import './PorfolioPage.css'

const PorfolioPage = ({ data: { title, intro, description, link, repository } }) => {

    return (

        <>

            <div className='PorfolioPage'>

                <div className="title-Porfolio">
                    <h1 className='PorfolioPage-title'>
                        {title}
                    </h1>
                </div>
                <div className="intro-Porfolio">
                    <IntroPorfolio intro={intro} />
                </div>
                <div className="links-Porfolio">
                    <LinksPorfolio repository={repository} link={link} />
                </div>
                <div className="description-Porfolio">
                    <DescriptionPorfolio description={description} />
                </div>

                {/*      <div className="images-Porfolio">
                    <ImagesPorfolio />
                </div>
                */}

            </div>

        </>
    )
}

export default PorfolioPage