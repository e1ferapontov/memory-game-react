/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : index.js
 *******************************************/

import styled from "styled-components";

export const AppHeader = styled.h1`
    font-size: 4rem;
    text-align: center;
    color: ${props => props.theme.textColorMain};
`;

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px ${props => props.theme.bgColorSecondary} solid;
    background-color: ${props => props.theme.bgColorSecondary};
`;