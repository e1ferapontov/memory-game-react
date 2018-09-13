/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 12 2018
 *  File : topResults.js
 *******************************************/

const TOPRESULTS_MAX_LEN = 5;

const createInitialState = () => {
    return [];
};

const sortResults = (array) => {
    // god please have mercy on our souls
    array.sort( (element1, element2) => {
        // higher difficulty prevails
        if (element1.difficulty > element2.difficulty) return -1;
        // if the difficulty is the same, we sort by time
        if (element1.difficulty === element2.difficulty) {
            if (element1.time < element2.time) return -1;
            else return 1;
        }
        else return 1;
    });
}

export const topResultsReducer = (state = createInitialState(), action) => {
    switch (action.type) {
        case 'ADD_RESULT': {
            const {difficulty, time, username} = action.payload;
            console.log('---add_result data:', time, username, difficulty);
            const newState = [...state];

            let same = newState.some( element => {
                return (time === element.time
                        && difficulty === element.difficulty
                        && username === element.username );
            });
            console.log('---add_result same?', same);
            if (!same) {
                // so if it's not same we push it
                newState.push({ username, time, difficulty });
                // and then sort the array
                sortResults(newState);
                // and then shrink back the array if it exceedes max length
                if (newState.length > TOPRESULTS_MAX_LEN) {
                    newState.length = TOPRESULTS_MAX_LEN;
                }
            }

            return newState;
        }
    
        default:
            return state;
    }
};