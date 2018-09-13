/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Thu Sep 06 2018
 *  File : Settings.js
 *******************************************/

import React from 'react';
import { InputGroup, InputGroupHeader, RadioInputField} from "../Common/Styled";
import * as LOCALIZED_STRINGS from '../Common/LocalizedStrings';

// also check LOCALIZED_STRINGS when modifying
export const difficulty_easy = 12;
export const difficulty_medium = 16;
export const difficulty_hard = 20;

const Settings = ({settings, ...handlers}) => {
    return (
        <React.Fragment>
            <InputGroup>
                <InputGroupHeader>{LOCALIZED_STRINGS.REGISTRATION_DIFFICULTY_HEADER}</InputGroupHeader>
                <RadioInputField
                    onChange={handlers.handleChange}
                    name="difficulty"
                    value={difficulty_easy}
                    checked={settings.difficulty === difficulty_easy}
                    label={LOCALIZED_STRINGS.REGISTRATION_DIFFICULTY_EASYLABEL}
                />
                <RadioInputField
                    onChange={handlers.handleChange}
                    name="difficulty"
                    value={difficulty_medium}
                    checked={settings.difficulty === difficulty_medium}
                    label={LOCALIZED_STRINGS.REGISTRATION_DIFFICULTY_MEDIUMLABEL}
                />
                <RadioInputField
                    onChange={handlers.handleChange}
                    name="difficulty"
                    value={difficulty_hard}
                    checked={settings.difficulty === difficulty_hard}
                    label={LOCALIZED_STRINGS.REGISTRATION_DIFFICULTY_HARDLABEL}
                />
            </InputGroup>
            <InputGroup>
                <InputGroupHeader>{LOCALIZED_STRINGS.REGISTRATION_THEME_HEADER}</InputGroupHeader>
                <RadioInputField
                    onChange={handlers.handleChange}
                    name="theme"
                    value="theme_light"
                    checked={settings.theme === "theme_light"}
                    label={LOCALIZED_STRINGS.REGISTRATION_THEME_LIGHTLABEL}
                />
                <RadioInputField
                    onChange={handlers.handleChange}
                    name="theme"
                    value="theme_dark"
                    checked={settings.theme === "theme_dark"}
                    label={LOCALIZED_STRINGS.REGISTRATION_THEME_DARKLABEL}
                />
                <RadioInputField
                    onChange={handlers.handleChange}
                    name="theme"
                    value="theme_alt"
                    checked={settings.theme === "theme_alt"}
                    label={LOCALIZED_STRINGS.REGISTRATION_THEME_ALTLABEL}
                />
            </InputGroup>
        </React.Fragment>
    );
};

export default Settings;