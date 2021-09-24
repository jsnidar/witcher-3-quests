import React from 'react';
import { Container, Row } from 'react-bootstrap';
import QuestList from './QuestList';

const Home = ({onFavoriteClick, selectedQuest, onQuestClick, quests}) => {

    return (
        <Container>
            <Row>
                <h1>Witcher 3 Quests: </h1>
                <br></br>
                <h4>Click on a quest from the list to see details about that quest.</h4>
                <br></br>
            </Row>
            <Row>
                <QuestList onFavoriteClick={onFavoriteClick} onQuestClick={onQuestClick} quests={quests} />
            </Row>
            
        </Container>
    );
}

export default Home;