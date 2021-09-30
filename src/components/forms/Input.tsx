import React, { ChangeEvent, memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    name: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: string | ChangeEvent<HTMLElement>) => void,
    type?: string,
}

const Input: React.FC<Props> = ({
    name,
    placeholder,
    value,
    onChange,
    type = "text",
}) => (
    <input
        css={inputStyle(type)}
        name={name}
        placeholder={placeholder || 'type'}
        value={value || ''}
        onChange={onChange}
        type={type}
    />
);

export default memo(Input);

const inputStyle = (type: string) => css`
    padding-left: 10px;
    height: 40px;
    
    ${type === "number" && css`
        /* Remove the arrows in number input */
        /* Chrome, Safari, Edge, Opera */
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    
        /* Firefox */
        [type=number] {
            -moz-appearance: textfield;
        }
    `};
`;
