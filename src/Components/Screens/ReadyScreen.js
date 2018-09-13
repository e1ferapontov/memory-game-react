/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Mon Sep 10 2018
 *  File : ReadyScreen.js
 *******************************************/

import React from 'react';
import { Button } from '../Common/Styled';
import { PageWrapper, PageHeader, PageContent } from './Styled';
import * as LOCALIZED_STRINGS from '../Common/LocalizedStrings';

const ReadyScreen = ({handleClick}) => {
    return (
        <PageWrapper>
            <PageHeader>{LOCALIZED_STRINGS.READY_HEADER}</PageHeader>
            <PageContent />
            <Button onClick={handleClick}>
                {LOCALIZED_STRINGS.READY_BUTTON}
            </Button>
        </PageWrapper>
    );
};

export default ReadyScreen;