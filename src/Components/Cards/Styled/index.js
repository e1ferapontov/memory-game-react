/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : index.js
 *******************************************/

import styled, { keyframes } from "styled-components";
import { difficulty_easy, difficulty_medium, difficulty_hard } from "../../Settings/Settings";
import { ANIMATION_DURATION } from "../../Common/Themes";

const flip = keyframes`
    0% {
        transform: scaleX(100%);
    }
    50% {
        transform: scaleX(0);
    }
    100% {
        transform: scaleX(100%);
    }
`;

export const CardsContainer = styled.ul`
    display: grid;
    margin: auto;
    padding: 0;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1rem;

    ${props => {
        switch (props.difficulty) {
            case difficulty_easy:
                return `
                    grid-template-columns: repeat(4, 12.5rem);
                    grid-template-rows: repeat(3, 12.5rem);
                `;
        
            case difficulty_medium:
                return `
                    grid-template-columns: repeat(4, 12.5rem);
                    grid-template-rows: repeat(4, 12.5rem);
                `;

            case difficulty_hard:
                return `
                    grid-template-columns: repeat(5, 12.5rem);
                    grid-template-rows: repeat(4, 12.5rem);
                `;
            default:
                return `width: 100%; height: 100%; background-color: red;`;
        }
    }}
`;

export const CardElement = styled.li`
    display: block;
    background-color: ${props => props.theme.bgColorAdditional};
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 5%;
    font-size: 5rem;
    line-height: 12.5rem;
    text-align: center;
    color: ${props => props.theme.textColorSecondary};
    cursor: pointer;
    transition: background ${ANIMATION_DURATION}s ease ${ANIMATION_DURATION / 2}s;
    animation: ${flip} ${ANIMATION_DURATION}s ease;

    &::after {
        font-family: 'icons';
        content: "\\e887";
    }
`;

export const Card_1 = styled(CardElement)`
    background-color: #4A148C;
    &::after { content: "\\e853"; }
`; 
export const Card_2 = styled(CardElement)`
    background-color: #880E4F; }
    &::after { 
        content: "\\e539"; 
    }
`;
export const Card_3 = styled(CardElement)`
    background-color: #B71C1C; }
    &::after { 
        content: "\\e3a7"; 
    }
`; 
export const Card_4 = styled(CardElement)`
    background-color: #1A237E; }
    &::after { 
        content: "\\e1ad"; 
    }
`; 
export const Card_5 = styled(CardElement)`
    background-color: #004D40; }
    &::after { 
        content: "\\e2c2"; 
    }
`; 
export const Card_6 = styled(CardElement)`
    background-color: #827717; }
    &::after {
         content: "\\e30c"; 
    }
`; 
export const Card_7 = styled(CardElement)`
    background-color: #3E2723; }
    &::after { 
        content: "\\e87b"; 
    }
`; 
export const Card_8 = styled(CardElement)`
    background-color: #1B5E20; }
    &::after { 
        content: "\\e310"; 
    }
`; 
export const Card_9 = styled(CardElement)`
    background-color: #006064; }
    &::after { 
        content: "\\e410"; 
    }
`; 
export const Card_10 = styled(CardElement)`
    background-color: #0288D1; }
    &::after { 
        content: "\\e253"; 
    }
`;

export const Tails = [Card_1, Card_2, Card_3, Card_4, Card_5, Card_6, Card_7, Card_8, Card_9, Card_10];