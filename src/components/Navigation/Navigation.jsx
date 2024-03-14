import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import { useState } from 'react';
import './Navigation.css'


const Navigation = () => {

    const [scrolled, setScrolled] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const handleScroll = () => {
        setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    const handleToggle = () => {
        setExpanded(!expanded)
    }

    const handleCloseNavbar = () => {
        setExpanded(false)
    }

    return (

        <Navbar
            expand="lg"
            className={`navbar-custom${scrolled ? ' navbar-scrolled' : ''}`}
            fixed='top'
            expanded={expanded}
        >

            <Container>

                <Navbar.Brand as={Link} to={'/'} onClick={handleCloseNavbar}>helena garcía </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`toggle${scrolled ? '-scrolled' : ''}`}
                    onClick={handleToggle}
                />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        {/* <Nav.Link as={Link} to={'/'}>home</Nav.Link> */}
                        <div className="nav-link">
                            <ScrollLink
                                to="contact-section"
                                smooth={true}
                                duration={100}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}
                                onClick={handleCloseNavbar}
                            >
                                contact
                            </ScrollLink>
                        </div>

                        <NavDropdown title="projects" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to={'/mamachama'}
                                className='dropdown-item'
                                onClick={handleCloseNavbar}
                            >
                                Mamachama
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                                as={Link}
                                to={'/el-megafono'}
                                className='dropdown-item'
                                onClick={handleCloseNavbar}
                            >
                                El Megáfono
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                                as={Link}
                                to={'/porfolio'}
                                className='dropdown-item'
                                onClick={handleCloseNavbar}
                            >
                                Porfolio
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                                as={Link}
                                to={'/devops'}
                                className='dropdown-item'
                                onClick={handleCloseNavbar}
                            >
                                DevOps
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                                as={Link}
                                to={'/igaf'}
                                className='dropdown-item'
                                onClick={handleCloseNavbar}
                            >
                                IGAF
                            </NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item
                                as={Link}
                                to={'/2023-a-flat-rent-odyssey'}
                                className='dropdown-item'
                                onClick={handleCloseNavbar}
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