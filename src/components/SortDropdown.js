import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const SortDropdown = ({onDropDownChange}) => {

    const handleDropdownChange = (eventKey) => {
        onDropDownChange(eventKey)
    } 

    return (
        <NavDropdown onSelect={handleDropdownChange} title="Sort Quests By: " id="basic-nav-dropdown">
            <NavDropdown.Item eventKey='all'>Remove Sort</NavDropdown.Item>
            <NavDropdown.Item eventKey='level'>Level</NavDropdown.Item>
            <NavDropdown.Item eventKey='name'>Name</NavDropdown.Item>
            <NavDropdown.Item eventKey='region'>Region</NavDropdown.Item>
            <NavDropdown.Item eventKey='type'>Type</NavDropdown.Item>
        </NavDropdown>
    )
}

export default SortDropdown;