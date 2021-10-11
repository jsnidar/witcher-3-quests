import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import SortDropdown from './SortDropdown';
import '../App.css';

const NavBar = ({onDropDownChange}) => {
    
    return (
        <div>
            <Navbar className='navigation' bg='light' expand="lg">
                <Container >
                    <Image src="WitcherLogo.png" fluid style={{height: '3rem'}} />
                    <Navbar.Brand href="/">Witcher 3 Quests</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
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