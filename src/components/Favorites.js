import React from 'react';
import QuestCard from './QuestCard';
import { Container, Row } from 'react-bootstrap';

const Favorites = ({quests, sort, onFavoriteClick}) => {

    const favoriteQuests = quests.map(quest => {
        
        return (
            <QuestCard 
                onFavoriteClick={onFavoriteClick} 
                key={quest.id} quest={quest} 
            />
        )
    })


    return (
        <Container className='containers'>
            <Row>
                <h1>Favorite Quests</h1>
            </Row>
            <Row  style={{height: '75vh', overflow: 'scroll'}}>
                {sort !== 'all' ? <h5>Quests are currently sorted by {sort}.</h5>: null } 
                {favoriteQuests}
            </Row>
        </Container>
            
    );
}

export default Favorites;