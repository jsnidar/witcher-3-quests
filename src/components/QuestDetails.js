import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';

const QuestDetails = ({selectedQuest}) => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        fetch('http://witcher3api.com/characters')
        .then(r => r.json())
        .then(characters => setCharacters(characters))
    }, [])


    return (
        <Card>
            <Card.Header>{selectedQuest.name}</Card.Header>
            <Card.Body>
                <Card.Title>{selectedQuest.type}</Card.Title>
                <Card.Text>
                {selectedQuest.name} is a level {selectedQuest.level} quest that takes place in {selectedQuest.location} in the {selectedQuest.region} region. The characters in this quest include {selectedQuest.characters}.
                </Card.Text>
                <Button variant="secondary">Unfavorite Quest</Button>
            </Card.Body>
        </Card>
    );
}

export default QuestDetails;