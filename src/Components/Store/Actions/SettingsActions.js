/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Thu Sep 06 2018
 *  File : SettingsActions.js
 *******************************************/

export const setDifficulty = (difficulty) => {
    return {
        type: "SET_DIFFICULTY",
        payload: difficulty,
    };
};

export const setTheme = (theme) => {
    return {
        type: "SET_THEME",
        payload: theme,
    };
};