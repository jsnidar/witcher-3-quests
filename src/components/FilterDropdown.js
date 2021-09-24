import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const FilterDropdown = () => {

    return (
        <NavDropdown title="Filter Quests" id="basic-nav-dropdown">
            <NavDropdown.Item href="/filter-by-character">By Character</NavDropdown.Item>
            <NavDropdown.Item href="/filter-by-level">By Level</NavDropdown.Item>
            <NavDropdown.Item href="/filter-by-location">By Location</NavDropdown.Item>
            <NavDropdown.Item href="/filter-by-name">By Name</NavDropdown.Item>
            <NavDropdown.Item href="/filter-by-region">By Region</NavDropdown.Item>
            <NavDropdown.Item href="/filter-by-type">By Type</NavDropdown.Item>
        </NavDropdown>
    )
}

export default FilterDropdown;