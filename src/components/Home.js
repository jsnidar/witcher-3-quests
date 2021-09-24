import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuestList from './QuestList';
import QuestDetails from './QuestDetails';
import {Route, useRouteMatch} from 'react-router-dom'

const Home = ({onFavoriteClick, onDetailsClick, selectedQuest, sort, onQuestClick, quests}) => {
    const match = useRouteMatch()

    return (
        <Container>
            <Route exact path={match.url}>
                <Row>
                    <h1>Witcher 3 Quests: </h1>
                    <br></br>
                    <h4>Click on a quest from the list to see details about that quest.</h4>
                    {sort !== 'all' ? <h5>Quests are currently sorted by {sort}.</h5>: null }
                    <br></br>
                </Row>
                <Row>
                    <Col>
                        <QuestList onDetailsClick={onDetailsClick} onFavoriteClick={onFavoriteClick} onQuestClick={onQuestClick} quests={quests} />
                    </Col>
                    <Col>
                        {selectedQuest ? <QuestDetails selectedQuest={selectedQuest}/> : null } 
                    </Col>
                </Row>
            </Route>
            
            
        </Container>
    );
}

export default Home;