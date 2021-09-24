import React from 'react';
import {Card, Button} from 'react-bootstrap';

const FavoriteCard = ({quest}) => {


    return (
        <>
            <Card>
                <Card.Header>{quest.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{quest.type}</Card.Title>
                    <Card.Text>
                    {quest.name} is a level {quest.level} quest that takes place in {quest.location} in the {quest.region} region. The characters in this quest include {quest.characters}
                    </Card.Text>
                    <Button variant="secondary">Unfavorite Quest</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default FavoriteCard;