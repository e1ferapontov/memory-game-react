/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : GameScreen.js
 *******************************************/

import React from 'react';
import Game from '../../Containers/Game/Game';

const GameScreen = ({handleClick}) => {
    return <Game handleClick={handleClick}/>
};

export default GameScreen;