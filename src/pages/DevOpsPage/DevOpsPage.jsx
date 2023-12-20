import DescriptionDevOps from '../../components/ProjectDevOps/DescriptionDevops'
import IntroDevOps from '../../components/ProjectDevOps/IntroDevops'
import LinksDevOps from '../../components/ProjectDevOps/LinksDevops'
import ImagesDevOps from '../../components/ProjectDevOps/ImagesDevOps'

import './DevOpsPage.css'


const DevOpsPage = ({ data: { title, intro, description, link, repository } }) => {

    return (

        <>
            <div className='DevOpsPage'>

                <div className="title-DevOps">
                    <h1 className="DevOpsPage-title">
                        {title}
                    </h1>
                </div>
                <div className="intro-DevOps">
                    <IntroDevOps intro={intro} />
                </div>
                <div className="links-DevOps">
                    <LinksDevOps repository={repository} />
                </div>
                <div className="images-DevOps">
                    <ImagesDevOps />
                </div>
                <div className="description-DevOps">
                    <DescriptionDevOps description={description} />
                </div>


            </div>
        </>
    )
}

export default DevOpsPage