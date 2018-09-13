/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 04 2018
 *  File : index.js
 *******************************************/

import React from 'react';
import styled from "styled-components";

export const Button = styled.button`
    font-size: ${props => props.theme.textSizeSmall};
    color: ${props => props.theme.textColorSecondary};
    text-transform: uppercase;
    padding: 1rem;
    align-self: center;
    width: 100%;
    cursor: pointer;
    background-color: ${props => props.theme.accentColor};
    border: none;
    appearance: none;

    &:hover {
        background-color: ${props => props.theme.accentColorHover}; 
    }

    &:disabled {
        background-color: ${props => props.theme.accentColorDisabled};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
`;

export const InputGroup = styled.fieldset`
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    margin: 0.5rem 0;
    border-color: ${props => props.theme.borderColor};
    border-style: solid;
`;

export const InputGroupHeader = styled.legend`
    font-size: ${props => props.theme.textSizeSmall};
    text-transform: uppercase;
`;

export const Input = styled.input`
    margin: 0 0.5rem;
    ${props => {
        if (props.type === 'text' || props.type === 'email') {
            return `
                font-size: ${props.theme.textSizeSmall};
                padding: 0.5rem;
                width: 12rem;
                color: ${props.theme.textColorMain};
                background-color: ${props.theme.bgColorSecondary};
                border: 1px ${props.theme.borderColor} solid;
            `;
        }
    }}
    
    &:disabled {
        background-color: #a7a7a7a4;
    }
`;

export const Label = styled.label`
    font-size: ${props => props.theme.textSizeSmall};
    margin-right: 0.5rem;
`;

export const UnmarkedList = styled.ul`
    font-size: ${props => props.theme.textSizeMedium};
    list-style: none;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-top: 20%;
`;

export const TextInputField = (props) => {
    const {type = 'text', name, label, value, required = false, disabled = false, valid = true, onChange} = props;
    return (
        <Label>
            <span>{label}</span>
            <Input
                onChange={onChange}
                type={type}
                name={name}
                required={required}
                disabled={disabled}
                value={value}
                style={valid ? null : {outlineColor: "red", borderColor: "red"}}
            />
        </Label>
    );
};

export const RadioInputField = (props) => {
    const {name, label, value, checked, required = false, disabled = false, onChange} = props;
    return (
        <Label>
            <Input
                onChange={onChange}
                type="radio"
                name={name}
                value={value}
                required={required}
                disabled={disabled}
                checked={checked}
            />
            <span>{label}</span>
        </Label>
    );
};