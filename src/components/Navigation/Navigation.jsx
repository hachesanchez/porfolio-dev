import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.css'


const Navigation = () => {

    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)



    return (

        <Navbar
            expand="lg"
            className={`navbar-custom${scrolled ? ' navbar-scrolled' : ''}`}
            fixed='top'>

            <Container>

                <Navbar.Brand as={Link} to={'/'} >helena garcía </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`toggle${scrolled ? '-scrolled' : ''}`} />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to={'/'}>home</Nav.Link>
                        {/* <Nav.Link as={Link} to={'#contact-section'}>contact</Nav.Link> */}

                        <NavDropdown title="projects" id="basic-nav-dropdown" activeclassname='active'>
                            <NavDropdown.Item
                                as={Link}
                                to={'/el-megafono'}
                                className='dropdown-item'
                                activeclassname='active'
                            >El Megáfono
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to={'/igaf'}
                                className='dropdown-item'
                                activeclassname='active'
                            >IGAF
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to={'/2023-a-flat-rent-odyssey'}
                                className='dropdown-item'
                                activeclassname='active'
                            >2023: A Flat Rent Odyssey
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Navigation;