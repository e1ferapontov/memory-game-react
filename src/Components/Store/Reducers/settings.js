/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Thu Sep 06 2018
 *  File : settings.js
 *******************************************/

import { difficulty_easy } from "../../Settings/Settings";

const createInitialState = () => {
    return {
        difficulty: difficulty_easy,
        theme: "theme_dark",
        language: navigator.language.match(/[A-Za-z]*/)[0].toUpperCase(),
    };
};

export const settingsReducer = (state = createInitialState(), action) => {
    switch (action.type) {
        case 'SET_DIFFICULTY':
            return {...state, difficulty: action.payload};

        case 'SET_THEME':
            return {...state, theme: action.payload};

        case 'SET_LANGUAGE':
            return state;
            // not implemented yet

        default:
            return state;
    }
};