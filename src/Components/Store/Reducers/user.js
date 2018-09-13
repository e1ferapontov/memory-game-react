/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Wed Sep 05 2018
 *  File : user.js
 *******************************************/

const createInitialState = () => {
    return {
        firstName: "",
        firstNameIsValid: false,
        lastName: "",
        lastNameIsValid: false,
        email: "",
        emailIsValid: false,
    };
};

export const userReducer = (state = createInitialState(), action) => {
    switch (action.type) {
        case 'SET_FIRSTNAME': {
            const isValid = !!action.payload.length;
            return {
                ...state,
                firstName: action.payload,
                firstNameIsValid: isValid,
            };
        }
    
        case 'SET_LASTNAME': {
            const isValid = !!action.payload.length;
            return {
                ...state,
                lastName: action.payload,
                lastNameIsValid: isValid,
            };
        }

        case 'SET_EMAIL': {
            const isValid = !!(action.payload.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
            return {
                ...state,
                email: action.payload,
                emailIsValid: isValid,
            };
        }

        case 'RESET_USER': {
            return createInitialState();
        }
            
        default:
            return state;
    }
};