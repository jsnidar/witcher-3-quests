import React from 'react';
import QuestCard from './QuestCard';
import { Container } from 'react-bootstrap';

const Favorites = ({quests, onFavoriteClick}) => {

    const favoriteQuests = quests.map(quest => <QuestCard onFavoriteClick={onFavoriteClick} key={quest.id} quest={quest} />)


    return (
            <Container >
                <h1>Favorite Quests</h1>
                {favoriteQuests}
            </Container>
    );
}

export default Favorites;