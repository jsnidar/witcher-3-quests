import React from 'react';
import QuestCard from './QuestCard';
import { Container } from 'react-bootstrap';

const Favorites = ({creatures, characters, quests, sort, onFavoriteClick}) => {

    const favoriteQuests = quests.map(quest => {
        const filteredCharacters = characters.filter(character => quest.characters.includes(character.name))
        const filteredCreatures = creatures.filter(creature => creature.quest.includes(quest.name))

        return (
            <QuestCard 
                filteredCharacters={filteredCharacters} 
                filteredCreatures={filteredCreatures} 
                onFavoriteClick={onFavoriteClick} 
                key={quest.id} quest={quest} 
            />
        )
    })


    return (
            <Container >
                <h1>Favorite Quests</h1>
                {sort !== 'all' ? <h5>Quests are currently sorted by {sort}.</h5>: null } 
                {favoriteQuests}
            </Container>
    );
}

export default Favorites;