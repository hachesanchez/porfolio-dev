import IntroDelta from '../../components/ProjectDelta/IntroDelta'
import DescriptionDelta from '../../components/ProjectDelta/DescriptionDelta'
import LinksDelta from '../../components/ProjectDelta/LinksDelta'
import ImagesDelta from '../../components/ProjectDelta/ImagesDelta'
import React from 'react'
import './DeltaPage.css'

function DeltaPage({ data: { title, intro, description, link, repository } }) {

    return (
        <div className='DeltaPage'>

            <div className="title-delta">
                <h1 className='DeltaPage-title'>
                    {title}
                </h1>
            </div>
            <div className="intro-delta">
                <IntroDelta intro={intro} />
            </div>
            <div className="links-delta">
                <LinksDelta repository={repository} link={link} />
            </div>
            <div className="images-delta">
                <ImagesDelta />
            </div>
            <div className="description-Delta">
                <DescriptionDelta description={description} />
            </div>

        </div>
    )
}

export default DeltaPage
