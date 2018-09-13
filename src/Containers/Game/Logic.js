/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 12 2018
 *  File : Logic.js
 *******************************************/

// helper functions
const shuffleArray = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

export const createArrayOfTailIndexes = (number) => {
    let arrayOfTailIndexes = [];
    let i = 0;
    while (i < number / 2) {
        arrayOfTailIndexes.push(i);
        arrayOfTailIndexes.push(i);
        i++;
    }

    return shuffleArray(arrayOfTailIndexes);
};

// main game logic
export const findMatches = (cardsTotal, exitHandler) => {
    // closure cache
    let cardsActive = cardsTotal;
    let cached = null;

    return (current) => {
        // memorize
        if (!cached) {
            cached = current;
            return;
        }
    
        // look for match
        if (cached.state.tails === current.state.tails) {
            cardsActive -= 2;
            !cardsActive && exitHandler(Date.now());
        } else {
            // save in closure
            let first = cached;
            let second = current;

            setTimeout( () => {
                first.flip();
                second.flip();
            }, 850);
        }
        // obviously clear cache
        cached = null;
    };
};