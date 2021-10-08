import React from 'react';
import { Container, Row } from 'react-bootstrap';
import QuestList from './QuestList';
import SearchInput from './SearchInput';

const Home = ({onFavoriteClick, onDetailsClick, selectedQuest, sort, onQuestClick, quests, searchText, setSearchText}) => {

    return (
        <div>
            <Container className='containers'>
                <Row>
                    <h1>Witcher 3 Quests: </h1>
                    <br></br>
                    <h4>Click on a quest from the list to see details about that quest.</h4>
                    {sort !== 'all' ? <h5>Quests are currently sorted by {sort}.</h5>: null }
                    <br></br>
                </Row>
                <Row>
                    <br></br>
                    <SearchInput searchText={searchText} setSearchText={setSearchText} />
                    <br></br>
                </Row>
                <Row>
                    <QuestList selectedQuest={selectedQuest} onDetailsClick={onDetailsClick} onFavoriteClick={onFavoriteClick} onQuestClick={onQuestClick} quests={quests} />
                </Row> 
            </Container>
        </div>
        
    );
}

export default Home;