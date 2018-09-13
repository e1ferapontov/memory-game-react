/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : index.js
 *******************************************/

import styled from "styled-components";
import { PageWrapper } from "../../../Components/Screens/Styled";
import * as LOCALIZED_STRINGS from '../../../Components/Common/LocalizedStrings';

const GameboardControl = styled.span`
    position: absolute;
    bottom: -3rem;
    font-size: ${props => props.theme.textSizeMedium};
    color: ${props => props.theme.textColorMain};
`;

export const GameboardWrapper = styled(PageWrapper)`
    position: relative;
    padding: 2rem 2.5rem;
`;

export const GameboardExitButton = styled(GameboardControl)`
    right: 0.5rem;
    cursor: pointer;

    &::before {
        content: '${LOCALIZED_STRINGS.GAMEBOARD_EXIT}';
    }
`;