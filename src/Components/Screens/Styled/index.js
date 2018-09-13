/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : index.js
 *******************************************/

import styled, { keyframes } from "styled-components";
import { ANIMATION_DURATION } from "../../Common/Themes";

const slide = keyframes`
    0% {
        transform: translateX(10%);
        opacity: 0;
    }
    100% {
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const PageContent = styled.section`
    flex: 1 0 auto;
    font-size: ${props => props.theme.textSizeMedium};
    color: ${props => props.theme.textColorMain};
    padding: 0 2rem;
`;

export const PageHeader = styled.header`
    margin-top: 2rem;
    text-align: center;
    font-size: ${props => props.theme.textSizeBig};
    color: ${props => props.theme.textColorMain};
`;

export const PageWrapper = styled.article`
    display: flex;
    flex-flow: column nowrap;
    margin: 0 auto;
    width: 73.5rem;
    height: 57rem;
    border: 1px ${props => props.theme.borderColor} solid;
    background-color: ${props => props.theme.bgColorMain};
    transition: all 0.1s ease;
    animation: ${slide} ${ANIMATION_DURATION}s ease;
`;