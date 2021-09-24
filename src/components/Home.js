import React from 'react';
import { Container } from 'react-bootstrap';
import QuestList from './QuestList';

const Home = ({quests}) => {

    return (
        <Container>
            <h1>Witcher 3 Quests: </h1>
            <br></br>
            <h4>Click on a quest from the list to see details about that quest.</h4>
            <br></br>
            <QuestList quests={quests} />
        </Container>
    );
}

export default Home;