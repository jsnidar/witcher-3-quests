import React from 'react';
import {Carousel} from 'react-bootstrap';

const CreaturesCarousel = ({creatures}) => {
    const renderThumbnails = creatures.map(creature => {
        return (
            <Carousel.Item key={creature.id}>
                <img
                    className="d-block w-100"
                    src={creature.image}
                    alt={creature.name}
                    height='300px'
                    width='auto'
                />
                <Carousel.Caption>
                    <h3>{creature.name}</h3>
                </Carousel.Caption>
            </Carousel.Item> 
    )})
    return (
        <Carousel variant="dark">
            {renderThumbnails}
        </Carousel>
    );
}

export default CreaturesCarousel;