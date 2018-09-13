/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Thu Sep 06 2018
 *  File : UserActions.js
 *******************************************/

export const setFirstName = (firstName) => {
    return {
        type: "SET_FIRSTNAME",
        payload: firstName,
    };
};

export const setLastName = (lastName) => {
    return {
        type: "SET_LASTNAME",
        payload: lastName,
    };
};

export const setEmail = (email) => {
    return {
        type: "SET_EMAIL",
        payload: email,
    };
};

export const resetUser = () => {
    return {
        type: "RESET_USER",
    };
};