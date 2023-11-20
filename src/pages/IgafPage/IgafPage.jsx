import IntroIgaf from '../../components/ProjectIgaf/IntroIgaf'
import DescriptionIgaf from '../../components/ProjectIgaf/DescriptionIgaf'
import LinksIgaf from '../../components/ProjectIgaf/LinksIgaf'
import ImagesIgaf from '../../components/ProjectIgaf/ImagesIgaf'
import './IgafPage.css'

const IgafPage = ({ data: { title, intro, description, link, repository } }) => {


    return (

        <div className='IgafPage'>

            <div className="title-Igaf">
                <h1 className='IgafPage-title'>
                    {title}
                </h1>
            </div>
            <div className="intro-Igaf">
                <IntroIgaf intro={intro} />
            </div>
            <div className="links-Igaf">
                <LinksIgaf repository={repository} link={link} />
            </div>
            <div className="images-Igaf">
                <ImagesIgaf />
            </div>
            <div className="description-Igaf">
                <DescriptionIgaf description={description} />
            </div>

        </div>


    )

}

export default IgafPage