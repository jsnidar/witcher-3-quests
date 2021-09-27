import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SortDropdown from './SortDropdown';

const NavBar = ({onDropDownChange}) => {
    
    return (
        <div>
            <Navbar bg='light' expand="lg">
                <Container >
                    <Navbar.Brand href="/">Witcher 3 Quests</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favorites">Favorites</Nav.Link>
                        <Nav.Link href="/create-quest">Create Quest</Nav.Link>
                        <SortDropdown onDropDownChange={onDropDownChange} />
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;