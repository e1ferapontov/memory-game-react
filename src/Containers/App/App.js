/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 05 2018
 *  File : App.js
 *******************************************/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { AppHeader, AppWrapper } from './Styled';
import RenderScreen from '../../Components/RenderScreen';
import * as THEME from '../../Components/Common/Themes';
import * as LOCALIZED_STRINGS from '../../Components/Common/LocalizedStrings';

class App extends Component {
    render () {
        const theme = THEME[this.props.settings.theme];
        return (
            <ThemeProvider theme = {theme}>
                <React.Fragment>
                    <AppWrapper>
                        <AppHeader>{LOCALIZED_STRINGS.APP_HEADER}</AppHeader>
                        <RenderScreen />
                    </AppWrapper>
                </React.Fragment>
            </ThemeProvider>
        );
    }
};

// map needed props from store
const mapStateToProps = store => {
    console.log("###store:", store);
    return {
        settings: store.settings,
        user: store.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

// export connected HOC
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);