import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './OverTheYears.css';

const OverTheYears = ({ data: { title, text } }) => {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <>
            <div className='overTheYears' onClick={toggleContent} style={{ cursor: 'pointer' }}>
                <Container>

                    <h1 className='overTheYears-title'>
                        {title}
                    </h1>
                    {showFullContent && text.map((e, idx) =>
                        <p key={idx} className='overTheYears-text'>
                            {e}
                        </p>)}

                </Container>
            </div>
        </>
    );
};

export default OverTheYears;
