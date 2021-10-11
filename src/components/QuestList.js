import React from 'react';
import {Accordion} from 'react-bootstrap';
import QuestListItem from './QuestListItem';

const QuestList = ({ selectedQuest, onDetailsClick, onFavoriteClick, quests}) => {

    const renderQuests = quests.map(quest => <QuestListItem id={quest.id} key={quest.id} selectedQuest={selectedQuest} onDetailsClick={onDetailsClick} onFavoriteClick={onFavoriteClick} quest={quest} />)
                
    return (
        <div style={{height: '50vh', overflow: 'scroll'}}>
            <Accordion defaultActiveKey='0'>
                {renderQuests}
            </Accordion>
        </div>
        
    );
}

export default QuestList;