import { Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './MyProjectsCards.css'


const MyProjectsCards = ({ title, imageSrc, technologies, endpoint }) => {


    return (

        <>

            <Link className='link' to={endpoint} >
                <Card className='card'>
                    <Card.Img variant="top" className='card-image' src={imageSrc} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {technologies && technologies.map((e, idx) => (
                                <Badge pill bg="secondary badge-custom m-1" key={idx}>
                                    {e}
                                </Badge>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </>


    )

}

export default MyProjectsCards