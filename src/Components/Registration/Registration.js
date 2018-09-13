/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 04 2018
 *  File : RegistrationForm.js
 *******************************************/

import React from 'react';
import { InputGroup, InputGroupHeader, TextInputField} from "../Common/Styled";
import * as LOCALIZED_STRINGS from '../Common/LocalizedStrings';

const Registration = ({user, ...handlers}) => {

    // if that's not the default "empty" user, disable fields
    // const isDisabled = !!(user.firstName && user.lastName && user.email);
    const isDisabled = false;

    return (
        <React.Fragment>
            <InputGroup>
                <InputGroupHeader>{LOCALIZED_STRINGS.REGISTRATION_USERFIELDS_HEADER}</InputGroupHeader>
                <TextInputField
                    onChange={handlers.handleChange}
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    required={true}
                    disabled={isDisabled}
                    label={LOCALIZED_STRINGS.REGISTRATION_USERFIELDS_FIRSTNAME}
                    valid={user.firstNameIsValid}
                />
                <TextInputField
                    onChange={handlers.handleChange}
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    required={true}
                    disabled={isDisabled}
                    label={LOCALIZED_STRINGS.REGISTRATION_USERFIELDS_LASTNAME}
                    valid={user.lastNameIsValid}
                />
                <TextInputField
                    onChange={handlers.handleChange}
                    type="email"
                    name="email"
                    value={user.email}
                    required={true}
                    disabled={isDisabled}
                    label={LOCALIZED_STRINGS.REGISTRATION_USERFIELDS_EMAIL}
                    valid={user.emailIsValid}
                />
            </InputGroup>
        </React.Fragment>
    );
};

export default Registration;