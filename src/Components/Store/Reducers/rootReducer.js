/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 05 2018
 *  File : rootReducer.js
 *******************************************/

import { combineReducers } from 'redux'
import { userReducer } from './user';
import { settingsReducer } from './settings';
import { topResultsReducer } from './topResults';

export const rootReducer = combineReducers({
    user: userReducer,
    settings: settingsReducer,
    top: topResultsReducer,
});