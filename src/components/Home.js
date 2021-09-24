import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import QuestList from './QuestList';
import QuestDetails from './QuestDetails';

const Home = ({selectedQuest, onQuestClick, quests}) => {

    return (
        <Container>
            <Row>
                <h1>Witcher 3 Quests: </h1>
                <br></br>
                <h4>Click on a quest from the list to see details about that quest.</h4>
                <br></br>
            </Row>
            <Row>
                <Col>
                    <QuestList onQuestClick={onQuestClick} quests={quests} />
                </Col>
                <Col>
                    {selectedQuest ? <QuestDetails selectedQuest={selectedQuest} /> : null}
                </Col>
                
            </Row>
            
        </Container>
    );
}

export default Home;