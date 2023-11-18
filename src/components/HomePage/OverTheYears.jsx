import { Container } from 'react-bootstrap'
import './OverTheYears.css'

const OverTheYears = ({ data: { title, text } }) => {



    return (

        <>
            <div className='overTheYears'>
                <Container>
                    <h1 className='overTheYears-title'>
                        {title}
                    </h1>
                    {text.map((e, idx) =>
                        <p key={idx} className='overTheYears-text'>
                            {e}
                        </p>)}
                </Container>
            </div>
        </>


    )

}

export default OverTheYears