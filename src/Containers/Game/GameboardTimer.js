/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : GameboardTimer.js
 *******************************************/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import * as LOCALIZED_STRINGS from '../../Components/Common/LocalizedStrings';
import * as moment from 'moment';

class GameboardTimer extends Component {
    state = {
        time: "00:00",
        timerID: this.startTimer(),
    }

    componentWillUnmount () {
        clearInterval(this.state.timerID);
    }

    startTimer () {
        return setInterval( () => {
            let elapsedTime = moment().diff(this.props.startTime);
            this.setState({
                time: moment(elapsedTime).format('mm:ss'),
            });
        }, 1000);
    }

    render () {
        return (
            <span className={this.props.className}>{this.state.time}</span>
        );
    }
}

export default styled(GameboardTimer)`
    position: absolute;
    bottom: -3rem;
    font-size: ${props => props.theme.textSizeMedium};
    color: ${props => props.theme.textColorMain};
    left: 0.5rem;

    &::before {
        content: '${LOCALIZED_STRINGS.GAMEBOARD_TIMER}'
    }
`;

GameboardTimer.propTypes = {
    startTime: PropTypes.object.isRequired,
}