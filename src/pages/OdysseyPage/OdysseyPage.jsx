import IntroOdyssey from '../../components/ProjectOdyssey/IntroOdyssey'
import DescriptionOdyssey from '../../components/ProjectOdyssey/DescriptionOdyssey'
import LinksOdyssey from '../../components/ProjectOdyssey/LinksOdyssey'
import ImagesOdyssey from '../../components/ProjectOdyssey/ImagesOdyssey'
import './OdysseyPage.css'

const OdysseyPage = ({ data: { title, intro, description, link, repository } }) => {


    return (

        <div className='OdysseyPage'>

            <div className="title-Odyssey">
                <h1 className='OdysseyPage-title'>
                    {title}
                </h1>
            </div>
            <div className="intro-Odyssey">
                <IntroOdyssey intro={intro} />
            </div>
            <div className="links-Odyssey">
                <LinksOdyssey repository={repository} link={link} />
            </div>
            <div className="images-Odyssey">
                <ImagesOdyssey />
            </div>
            <div className="description-Odyssey">
                <DescriptionOdyssey description={description} />
            </div>

        </div>


    )

}

export default OdysseyPage