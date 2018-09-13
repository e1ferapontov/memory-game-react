/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 04 2018
 *  File : RulesPage.js
 *******************************************/

import React from 'react';
import { PageWrapper, PageHeader, PageContent } from './Styled';
import { Button } from '../Common/Styled';

import * as LOCALIZED_STRINGS from '../Common/LocalizedStrings';

const RulesScreen = ({handleClick}) => {
    const rules = [
        LOCALIZED_STRINGS.RULES_LIST_1,
        LOCALIZED_STRINGS.RULES_LIST_2,
        LOCALIZED_STRINGS.RULES_LIST_3,
        LOCALIZED_STRINGS.RULES_LIST_4,
        LOCALIZED_STRINGS.RULES_LIST_5,
    ];
    return (
        <PageWrapper>
            <PageHeader>{LOCALIZED_STRINGS.RULES_HEADER}</PageHeader>
            <PageContent>
                <ol>
                    {rules.map( (item, index) => <li key = {index}>{item}</li> )}
                </ol>
            </PageContent>
            <Button onClick={handleClick}>
                {LOCALIZED_STRINGS.RULES_BUTTON}
            </Button>
        </PageWrapper>
    );
};

export default RulesScreen;