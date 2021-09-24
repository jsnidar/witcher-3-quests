import React from 'react';
import FavoriteCard from './FavoriteCard';
import { Row, Col, Header, Container } from 'react-bootstrap';

const Favorites = ({quests}) => {

    const favoriteQuests = quests.map(quest => <FavoriteCard quest={quest} />)


    return (
        <div>
            <h1>Favorite Quests</h1>
            <Container >
                {favoriteQuests}
            </Container>
            
        </div>
    );
}

export default Favorites;