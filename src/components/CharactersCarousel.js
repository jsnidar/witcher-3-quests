import React from 'react';
import {Carousel} from 'react-bootstrap';

const CharactersCarousel = ({characters}) => {
    const renderThumbnails = characters.map(character => {
        return (
            <Carousel.Item key={character.id}>
                <img
                    className="d-block w-100"
                    src={character.image}
                    alt={character.name}
                    height='500px'
                    width='auto'
                />
                <Carousel.Caption>
                    <h3>{character.name}</h3>
                    <p>{character.race} {character.profession} from {character.nationality}</p>
                </Carousel.Caption>
            </Carousel.Item> 
    )})
    return (
        <Carousel>
            {renderThumbnails}
        </Carousel>
    );
}

export default CharactersCarousel;