import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import QuestList from './QuestList';
import SearchInput from './SearchInput';

const Home = ({onFavoriteClick, onDetailsClick, selectedQuest, sort, onQuestClick, quests, searchText, setSearchText}) => {

    return (
        <div>
            <Container className='containers'>
                <Row>
                    <Col>
                        <h1>Witcher 3 Quests: </h1>
                        <br></br>
                        <h4>Click on a quest from the list to see details about that quest.</h4>
                        {sort !== 'all' ? <h5>Quests are currently sorted by {sort}.</h5>: null }
                        <SearchInput searchText={searchText} setSearchText={setSearchText} />
                        <br></br>
                    </Col>
                    <Col>
                        <Image src="pngkey.com-the-witcher-3-logo-3069557.png" className="center-block" fluid />
                    </Col>
                </Row>
                <Row>
                    <QuestList selectedQuest={selectedQuest} onDetailsClick={onDetailsClick} onFavoriteClick={onFavoriteClick} onQuestClick={onQuestClick} quests={quests} />
                </Row> 
            </Container>
        </div>
        
    );
}

export default Home;