/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : RenderScreen.js
 *******************************************/

import React, { Component } from 'react';
import RulesScreen from './Screens/RulesScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ReadyScreen from './Screens/ReadyScreen';
import GameScreen from './Screens/GameScreen';
import ResultsScreen from './Screens/ResultsScreen';

export default class RenderScreen extends Component {
    constructor (props) {
        super(props);

        const showNextScreen = () => {
            let next = this.state.currentScreen + 1;

            if (next < this.state.screens.length) {
                this.setState({
                    currentScreen: next,
                });
                return;
            }
            this.setState({
                currentScreen: 0,
            });
        };

        this.state = {
            currentScreen: 0,
            screens: [
                <RulesScreen handleClick = {showNextScreen} />,
                <RegistrationScreen handleClick = {showNextScreen} />,
                <ReadyScreen handleClick = {showNextScreen} />,
                <GameScreen handleClick = {showNextScreen} />,
                <ResultsScreen handleClick = {showNextScreen} />,
            ],
        };
    }

    render () {
        return (
            this.state.screens[this.state.currentScreen]
        );
    }
};