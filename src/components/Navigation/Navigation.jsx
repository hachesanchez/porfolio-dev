import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll"; // Importa Link de react-scroll
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
                        <div className="nav-link">
                            <ScrollLink
                                to="contact-section"
                                smooth={true}
                                duration={100}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}
                            >
                                contact
                            </ScrollLink>
                        </div>

                        <NavDropdown title="projects" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to={'/el-megafono'}
                                className='dropdown-item'
                            >
                                El Megáfono
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to={'/igaf'}
                                className='dropdown-item'
                            >
                                IGAF
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to={'/2023-a-flat-rent-odyssey'}
                                className='dropdown-item'
                            >
                                2023: A Flat Rent Odyssey
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default Navigation;