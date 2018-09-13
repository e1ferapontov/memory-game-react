/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 12 2018
 *  File : TopResultsActions.js
 *******************************************/

export const addResult = (username, difficulty, time) => {
    return {
        type: 'ADD_RESULT',
        payload: {
            username, 
            difficulty,
            time,
        },
    };
}