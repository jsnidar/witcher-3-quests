import React from 'react';
import {Card, Button} from 'react-bootstrap';

const QuestCard = ({quest, onFavoriteClick}) => {

    const handleFavoriteButtonClick = (e) => {
        if(quest.isLiked === false) {
            onFavoriteClick(quest.id, {isLiked: true})
        }else{
            onFavoriteClick(quest.id, {isLiked: false})
        }
    }

    const formatCharOrLocArrays = (array) => {
        if(array.length === 1) {
          return array
        }else if(array.length === 2){
          return `${array[0]} and ${array[1]}`
        }else{
          return array.slice(0, -1).join(', ') + ' and ' + array.slice(-1)
        }
      }
    
      const characters = formatCharOrLocArrays(quest.characters)
      const locations = formatCharOrLocArrays(quest.location)
    return (
        <>
            <Card>
                <Card.Header>{quest.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{quest.type}</Card.Title>
                    <Card.Text>
                    Level: {quest.level}
                    <br></br>
                    Region: {quest.region}
                    <br></br>
                    Location(s): {locations} 
                    <br></br>
                    Characters: {characters}
                    {/* format this into thumbnails for each character with their information */}
                    <br></br>
                    Creatures:
                    {/* format this into thumbnails for each creature with their information */}
                    <br></br>
                    </Card.Text>
                    {quest.isLiked ? <Button onClick={handleFavoriteButtonClick} variant="secondary">Unfavorite Quest</Button> : <Button onClick={handleFavoriteButtonClick} variant="secondary">Add to Favorites</Button>}
                </Card.Body>
            </Card>
        </>
    )
}

export default QuestCard;