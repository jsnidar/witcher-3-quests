import React from 'react';
import QuestCard from './QuestCard';
import { Container } from 'react-bootstrap';

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
        <Container>
            <h1>Favorite Quests</h1>
            {sort !== 'all' ? <h5>Quests are currently sorted by {sort}.</h5>: null } 
            {favoriteQuests}
        </Container>
            
    );
}

export default Favorites;