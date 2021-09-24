import React from 'react';
import {Accordion, Button} from 'react-bootstrap';

const QuestList = ({onFavoriteClick, onQuestClick, quests}) => {

    const handleQuestClick = (event) => {
        const questName = event.target.innerText
        const selectedQuest = quests.find(quest => quest.name === questName)
        onQuestClick(selectedQuest)
    }
    
    const hoverBackgroundColor = (e) => {
        e.target.style.background = '#4e636c'
        e.target.style.color = 'white'
    }

    const onMouseLeave = (e) => {
        e.target.style.background = ''
        e.target.style.color = ''
    }

    const renderQuests = quests.map(quest => {
        const formattedLocations = quest.location.slice(0, -1).join(', ') + ', and ' + quest.location.slice(-1)
        const formattedCharacters = quest.characters.slice(0, -1).join(', ') + ', and ' + quest.characters.slice(-1)
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
                onMouseOver={hoverBackgroundColor} 
                onMouseLeave={onMouseLeave} 
                onClick={handleQuestClick}
            >
                <Accordion.Header>{quest.name}</Accordion.Header>
                <Accordion.Body>
                    {quest.name} is a Level {quest.level} quest that takes place in {formattedLocations} in the {quest.region} region. 
                    <br></br>
                    <br></br>
                    The characters in this quest include {formattedCharacters}.
                    <br></br>
                    <br></br>
                    {quest.isLiked ? 
                        <Button onClick={handleFavoriteButtonClick} variant="secondary">Unfavorite Quest</Button> : 
                        <Button onClick={handleFavoriteButtonClick} variant="secondary">Add to Favorites</Button>}
                </Accordion.Body>
                
            </Accordion.Item> 
        )
    })
            
            
    return (
        <div style={{height: '75vh', overflow: 'scroll'}}>
            <Accordion defaultActiveKey='0'>
                {renderQuests}
            </Accordion>
        </div>
        
    );
}

export default QuestList;