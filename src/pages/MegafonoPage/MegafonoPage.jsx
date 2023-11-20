import IntroMegafono from '../../components/ProjectMegafono/IntroMegafono'
import DescriptionMegafono from '../../components/ProjectMegafono/DescriptionMegafono'
import LinksMegafono from '../../components/ProjectMegafono/LinksMegafono'
import ImagesMegafono from '../../components/ProjectMegafono/ImagesMegafono'
import './MegafonoPage.css'


const MegafonoPage = ({ data: { title, intro, description, link, repository } }) => {


    return (


        <div className='MegafonoPage'>

            <div className="title-megafono">
                <h1 className='MegafonoPage-title'>
                    {title}
                </h1>
            </div>
            <div className="intro-megafono">
                <IntroMegafono intro={intro} />
            </div>
            <div className="links-megafono">
                <LinksMegafono repository={repository} link={link} />
            </div>
            <div className="images-megafono">
                <ImagesMegafono />
            </div>
            <div className="description-megafono">
                <DescriptionMegafono description={description} />
            </div>

        </div>


    )

}

export default MegafonoPage