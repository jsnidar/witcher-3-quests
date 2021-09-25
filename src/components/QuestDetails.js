import React, { useEffect, useState } from 'react';
import QuestCard from './QuestCard';

const QuestDetails = ({selectedQuest, onFavoriteClick}) => {
    const [characters, setCharacters] = useState([])
    const [creatures, setCreatures] = useState([])

    useEffect(()=> {
        fetch('http://witcher3api.com/api/characters')
        .then(r => r.json())
        .then(characters => setCharacters(characters))

        fetch('http://witcher3api.com/api/creatures')
        .then(r => r.json())
        .then(creatures => setCreatures(creatures))
    }, [])

    const filteredCharacters = characters.filter(character => selectedQuest.characters.includes(character.name))

    const filteredCreatures = creatures.filter(creature => creature.quest.includes(selectedQuest.name))
    console.log(filteredCreatures)

    return (
        <QuestCard filteredCharacters={filteredCharacters} filteredCreatures={filteredCreatures} onFavoriteClick={onFavoriteClick} quest={selectedQuest} />
    );
}

export default QuestDetails;