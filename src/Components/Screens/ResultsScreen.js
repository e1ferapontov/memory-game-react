/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Thu Sep 13 2018
 *  File : ResultsScreen.js
 *******************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageWrapper, PageHeader, PageContent } from './Styled';
import { Button } from '../Common/Styled';
import * as LOCALIZED_STRINGS from '../Common/LocalizedStrings';

const difficultyToString = { 12: 'EASY', 16: 'MEDIUM', 20: 'HARD' };

const ResultsScreen = ({handleClick, top}) => {

    const resultsList = top.map( (item, index) => {
        const {username, time, difficulty} = item;
        return (
            <li key = {index}>
                {`${username}, ${time} ${difficultyToString[difficulty]}`}
            </li>
        );
    });
    return (
        <PageWrapper>
            <PageHeader>{LOCALIZED_STRINGS.TOPRESULTS_HEADER}</PageHeader>
            <PageContent>
                <ol>
                    {resultsList}
                </ol>
            </PageContent>
            <Button onClick={handleClick}>
                {LOCALIZED_STRINGS.TOPRESULTS_BUTTON}
            </Button>
        </PageWrapper>
    );
};

// map needed props from store
const mapStateToProps = store => {
    return {
        top: store.top,
    };
};

// export connected HOC
export default connect(mapStateToProps)(ResultsScreen);

ResultsScreen.propTypes = {
    top: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired,
}