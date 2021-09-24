import React from 'react';
import {Card, Button} from 'react-bootstrap';

const QuestCard = ({quest}) => {
    const formattedLocations = quest.location.slice(0, -1).join(', ') + ', and ' + quest.location.slice(-1)
    const formattedCharacters = quest.characters.slice(0, -1).join(', ') + ', and ' + quest.characters.slice(-1)

    return (
        <>
            <Card>
                <Card.Header>{quest.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{quest.type}</Card.Title>
                    <Card.Text>
                    {quest.name} is a Level {quest.level} quest that takes place in {formattedLocations} in the {quest.region} region. 
                    <br></br>
                    <br></br>
                    The characters in this quest include {formattedCharacters}.
                    </Card.Text>
                    <Button variant="secondary">Unfavorite Quest</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default QuestCard;