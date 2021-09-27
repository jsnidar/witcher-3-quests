import React from 'react';
import { Accordion, Button } from 'react-bootstrap'

const QuestListItem = ({quest, onFavoriteClick}) => {

    const onMouseOver = (e) => {
        e.target.style.background = '#4e636c'
        e.target.style.color = 'white'
    }

    const onMouseLeave = (e) => {
        e.target.style.background = ''
        e.target.style.color = ''
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

    const handleFavoriteButtonClick = (e) => {
        if(quest.isLiked === false) {
            onFavoriteClick(quest.id, {isLiked: true})
        }else{
            onFavoriteClick(quest.id, {isLiked: false})
        }
    }

    return(
        <Accordion.Item
            key={quest.id}
            eventKey={quest.id} 
            onMouseOver={onMouseOver} 
            onMouseLeave={onMouseLeave} 
        >
            <Accordion.Header>{quest.name}</Accordion.Header>
            <Accordion.Body>
                {quest.name} is a Level {quest.level} quest that takes place in {locations} in the {quest.region} region. 
                <br></br>
                <br></br>
                The characters in this quest include {characters}.
                <br></br>
                <br></br>
                {quest.isLiked ? 
                    <Button onClick={handleFavoriteButtonClick} variant="secondary">Unfavorite Quest</Button> : 
                    <Button onClick={handleFavoriteButtonClick} variant="secondary">Add to Favorites</Button>}
            </Accordion.Body>
        </Accordion.Item> 
    )
}

export default QuestListItem;