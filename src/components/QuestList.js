import React from 'react';
import {ListGroup} from 'react-bootstrap';

const QuestList = ({quests}) => {
    const handleQuestClick = (event) => {
        //this is the name of the quest that was clicked
        console.log(event.target.innerText)
        //I need to decide if I want Quest Details to render a new page or to render a component on the page like in the last app.
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