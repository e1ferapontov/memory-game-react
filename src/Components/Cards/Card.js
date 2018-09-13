/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 11 2018
 *  File : Card.js
 *******************************************/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardElement } from './Styled';

export default class Card extends Component {
    state = {
        heads: CardElement,
        tails: this.props.tails,
        flipped: false,
    }

    flip = () => {
        this.setState({
            flipped: !this.state.flipped,
        });
    }

    handleClick = () => {
        this.flip();
        this.props.callback(this);
    }

    render () {
        const Heads = this.state.heads;
        const Tails = this.state.tails;

        if (this.state.flipped) return <Tails />
        
        return <Heads onClick={this.handleClick} />
    }
}

Card.propTypes = {
    tails: PropTypes.func.isRequired,
  }