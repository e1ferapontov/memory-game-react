/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 04 2018
 *  File : RegistrationPage.js
 *******************************************/

import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../Common/Styled';
import { PageWrapper, PageHeader, PageContent } from './Styled';
import { setFirstName, setLastName, setEmail } from '../Store/Actions/UserActions';
import { setDifficulty, setTheme } from '../Store/Actions/SettingsActions';
import Registration from '../Registration/Registration';
import Settings from '../Settings/Settings';
import * as LOCALIZED_STRINGS from '../Common/LocalizedStrings';

const RegistrationScreen = ({handleClick, user, settings, ...props}) => {
    const buttonIsDisabled = !(user.firstNameIsValid 
                            && user.lastNameIsValid 
                            && user.emailIsValid);

    const handleChange = (e) => {
        switch (e.target.name) {
            case "firstName":
                props.setFirstNameAction(e.target.value);
                break;
        
            case "lastName":
                props.setLastNameAction(e.target.value);
                break;

            case "email":
                props.setEmailAction(e.target.value);
                break;

            case "difficulty":
                props.setDifficultyAction(Number(e.target.value));
                break;

            case "theme":
                props.setThemeAction(e.target.value);
                break;
            
            default:
                break;
        }
    };

    return (
        <PageWrapper>
            <PageHeader>{LOCALIZED_STRINGS.REGISTRATION_HEADER}</PageHeader>
            <PageContent>
                <Registration
                    handleChange={handleChange}
                    user={user}
                />
                <Settings
                    handleChange={handleChange}
                    settings={settings}
                />
            </PageContent>
            <Button onClick={handleClick} disabled={buttonIsDisabled}>
                {LOCALIZED_STRINGS.REGISTRATION_BUTTON}
            </Button>
        </PageWrapper>
    );
};

const mapStateToProps = store => {
    return {
        user: store.user,
        settings: store.settings,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setFirstNameAction: firstName => dispatch(setFirstName(firstName)),
        setLastNameAction: lastName => dispatch(setLastName(lastName)),
        setEmailAction: email => dispatch(setEmail(email)),
        setDifficultyAction: difficulty => dispatch(setDifficulty(difficulty)),
        setThemeAction: theme => dispatch(setTheme(theme)),
    };
};

// export connected HOC
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationScreen);