import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

const Checkboxes = ({array}) => {
    console.log(array)

    const checkboxes = array.map(element => <Form.Check inline key={element} type="checkbox" value={element} label={element} />)
    return (
        <>
        {checkboxes}
        </>
    )
}

export default Checkboxes;