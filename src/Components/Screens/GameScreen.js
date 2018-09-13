/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : GameScreen.js
 *******************************************/

import React from 'react';
import Game from '../../Containers/Game/Game';

const GameScreen = ({handleClick}) => {
    return (
        <React.Fragment>
            <Game handleClick={handleClick}/>
        </React.Fragment>
    );
};

export default GameScreen;