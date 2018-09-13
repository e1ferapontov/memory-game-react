/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 11 2018
 *  File : Deck.js
 *******************************************/

import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { Tails, CardsContainer } from './Styled';
const uuidv4 = require('uuid/v4');

const Deck = ({randomizedArray, callback, difficulty}) => {
    const cards = randomizedArray.map(tailIndex => {
        return (
            < Card
                key={uuidv4()}
                tails={Tails[tailIndex]}
                callback={callback}
            />
        );
    });

    return (
        <CardsContainer difficulty={difficulty}>
            {cards}
        </CardsContainer>
    );
};

export default Deck;

Deck.propTypes = {
    randomizedArray: PropTypes.array.isRequired,
    callback: PropTypes.func.isRequired,
    difficulty: PropTypes.number.isRequired,
}