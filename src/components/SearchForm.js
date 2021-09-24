import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

const SearchForm = () => {

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search Quests"
                className="mr-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    );
}

export default SearchForm;