import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import QuestCard from './QuestCard';

const QuestDetails = ({selectedQuest, onFavoriteClick}) => {
    const [characters, setCharacters] = useState([])
    const params = useParams();
    console.log(params)

    useEffect(()=> {
        fetch('http://witcher3api.com/api/characters')
        .then(r => r.json())
        .then(characters => setCharacters(characters))
    }, [])

    const filteredCharacters = characters.filter(character => selectedQuest.characters.includes(character.name))
    

    return (
        <QuestCard onFavoriteClick={onFavoriteClick} quest={selectedQuest} characters={filteredCharacters} />
    );
}

export default QuestDetails;