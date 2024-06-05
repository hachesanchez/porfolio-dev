import './LinksDelta.css'
import { Container } from 'react-bootstrap'

const LinksDelta = ({ repository, link }) => {


  return (

    <div className="Delta-links-component">
      <Container >

        <div className='links-container' >
          <div className="Delta-web">
            <a
              className="Delta-weblink"
              href={link}
              target='blank'
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </div>
          <div className="Delta-repo">
            <p className='Delta-repo-title'>
              Repository:
            </p>
            <ul>
              <li>
                <a
                  className="Delta-webrepo"
                  href={repository}
                  target='blank'
                  rel="noopener noreferrer"
                >
                  {repository}
                </a>
              </li>
            </ul>
          </div >
        </div>

      </Container >
    </div>

  )
}

export default LinksDelta