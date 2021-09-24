import React from 'react';
import {ListGroup} from 'react-bootstrap';

const QuestList = ({onQuestClick, quests}) => {
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

    const renderQuests = quests.map(quest => <ListGroup.Item key={quest.id} onMouseOver={hoverBackgroundColor} onMouseLeave={onMouseLeave} onClick={handleQuestClick}>{quest.name}</ListGroup.Item> )
    return (
        <ListGroup>
            {renderQuests}
        </ListGroup>
    );
}

export default QuestList;