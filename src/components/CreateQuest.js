import React from 'react';
import { Form, Button } from 'react-bootstrap'

const CreateQuest = () => {


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quest Name</Form.Label>
                <Form.Control type="text" placeholder="Enter quest name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="secondary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CreateQuest;