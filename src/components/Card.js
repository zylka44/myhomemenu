import React from 'react';

const Card = ({name, meal, graphics}) => {
    return (
        <div className="tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt={name} src={graphics} height="150vh" />
            <h2>{name}</h2>
            <p>{meal}</p>
        </div>
    )
}

export default Card;