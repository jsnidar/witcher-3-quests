import React, { useEffect, useState } from 'react';
import QuestCard from './QuestCard';

const QuestDetails = ({selectedQuest, onFavoriteClick}) => {
    const [characters, setCharacters] = useState([])

    useEffect(()=> {
        fetch('http://witcher3api.com/api/characters')
        .then(r => r.json())
        .then(characters => setCharacters(characters))
    }, [])

    const filteredCharacters = characters.filter(character => selectedQuest.characters.includes(character.name))
    console.log(filteredCharacters)
    console.log(selectedQuest)

    return (
        <QuestCard onFavoriteClick={onFavoriteClick} quest={selectedQuest} />
    );
}

export default QuestDetails;