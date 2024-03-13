import IntroMamachama from '../../components/ProjectMamachama/IntroMamachama'
import DescriptionMamachama from '../../components/ProjectMamachama/DescriptionMamachama'
import LinksMamachama from '../../components/ProjectMamachama/LinksMamachama'
import ImagesMamachama from '../../components/ProjectMamachama/ImagesMamachama'
import React from 'react'
import './Mamachamapage.css'

function Mamachamapage({ data: { title, intro, description, link, repository } }) {

    return (
        <div className='MamachamaPage'>

            <div className="title-mamachama">
                <h1 className='MamachamaPage-title'>
                    {title}
                </h1>
            </div>
            <div className="intro-mamachama">
                <IntroMamachama intro={intro} />
            </div>
            <div className="links-mamachama">
                <LinksMamachama repository={repository} link={link} />
            </div>
            <div className="images-mamachama">
                <ImagesMamachama />
            </div>
            <div className="description-mamachama">
                <DescriptionMamachama description={description} />
            </div>

        </div>
    )
}

export default Mamachamapage
