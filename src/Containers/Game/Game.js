/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : Game.js
 *******************************************/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { GameboardExitButton, GameboardWrapper } from './Styled';
import GameboardTimer from './GameboardTimer';
import Deck from '../../Components/Cards/Deck';
import { addResult } from '../../Components/Store/Actions/TopResultsActions';
import { createArrayOfTailIndexes, findMatches } from './Logic';
import { resetUser } from '../../Components/Store/Actions/UserActions';
import * as LOCALIZED_STRINGS from '../../Components/Common/LocalizedStrings';
import { ANIMATION_DURATION } from '../../Components/Common/Themes';
import swal from 'sweetalert';

class Game extends Component {
    // the game starts when the component is rendered
    state = {
        startTime: moment(),
        tails: createArrayOfTailIndexes(this.props.settings.difficulty),
    };

    exitHandler = (resultTime) => {
        if (resultTime) {
            let username = `${this.props.user.firstName} ${this.props.user.lastName}`;
            username = (username === " ") ? "Anonymous User" : username;
            const difficulty = this.props.settings.difficulty;
            const duration = moment(moment(resultTime).diff(this.state.startTime)).format('mm:ss');
            
            setTimeout(() => {
                swal({
                    title: LOCALIZED_STRINGS.GAMEBOARD_WIN_HEADER,
                    text: `${LOCALIZED_STRINGS.GAMEBOARD_WIN_CONTENT} ${duration}`,
                    icon: "success",
                    button: "Ok",
                });
                // that's showNext from RenderScreen.js
                this.props.handleClick();
            }, ANIMATION_DURATION * 500);
            this.props.addTopResultAction(username, difficulty, duration);
            return;
        }

        swal({
            title: LOCALIZED_STRINGS.GAMEBOARD_CONFIRM_HEADER,
            text: LOCALIZED_STRINGS.GAMEBOARD_CONFIRM_CONTENT,
            icon: "warning",
            dangerMode: true,
            buttons: {
                cancel: true,
                confirm: true,
            }
        }).then( result => {
            if (result) {
                swal({
                    title: LOCALIZED_STRINGS.GAMEBOARD_LOOSE_HEADER,
                    icon: "error",
                    button: "Ok",
                });
                this.props.resetUserAction();
                // that's showNext from RenderScreen.js
                this.props.handleClick();
            }
        });
    }

    render () {
        return (
            <GameboardWrapper>
                <Deck
                    randomizedArray={this.state.tails}
                    callback={findMatches(this.props.settings.difficulty, this.exitHandler)}
                    difficulty={this.props.settings.difficulty}
                />
                <GameboardTimer
                    startTime={this.state.startTime}
                />
                <GameboardExitButton onClick={this.exitHandler.bind(null, null)}/>
            </GameboardWrapper>
        );
    }
};

// map needed props from store
const mapStateToProps = store => {
    return {
        user: store.user,
        settings: store.settings,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        resetUserAction: () => dispatch(resetUser()),
        addTopResultAction: (user, difficulty, time) => dispatch(addResult(user, difficulty, time)),
    };
};

// export connected HOC
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

Game.propTypes = {
    user: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    addTopResultAction: PropTypes.func.isRequired,
    resetUserAction: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
}