import React, { ChangeEvent, KeyboardEvent, memo } from 'react';
import { css } from "@emotion/react";

type Props = {
    name: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: string | ChangeEvent<HTMLElement>) => void,
    onKeyDown?: (e: KeyboardEvent) => void,
    type?: string,
    required?: boolean,
}

const Input: React.FC<Props> = ({
    name,
    placeholder,
    value,
    onChange,
    type = "text",
    required = false,
    onKeyDown,
}) => (
    <input
        css={inputStyle(type)}
        name={name}
        placeholder={placeholder || 'type'}
        value={value ?? ''}
        type={type}
        required={required}
        {...onChange && { onChange }}
        {...onKeyDown && { onKeyDown }}
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
