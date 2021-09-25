import React from 'react';
import {Card, Button} from 'react-bootstrap';
import CharactersCarousel from './CharactersCarousel';
import CreaturesCarousel from './CreaturesCarousel';

const QuestCard = ({filteredCharacters, filteredCreatures, quest, onFavoriteClick}) => {

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

      const locations = formatCharOrLocArrays(quest.location)
    return (
        <div style={{height: '75vh', overflow: 'scroll'}}>
            <Card>
                <Card.Header>{quest.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{quest.type}</Card.Title>
                    <Card.Text>
                        <p>Level: {quest.level}</p>
                        <p>Region: {quest.region}</p>
                        <p>Location(s): {locations}</p>
                        <h5>Characters:</h5>
                        <CharactersCarousel characters={filteredCharacters} />
                        <h5>Creatures:</h5>
                        <CreaturesCarousel creatures={filteredCreatures} />
                    </Card.Text>
                    {quest.isLiked ? <Button onClick={handleFavoriteButtonClick} variant="secondary">Unfavorite Quest</Button> : <Button onClick={handleFavoriteButtonClick} variant="secondary">Add to Favorites</Button>}
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuestCard;