import React, { ChangeEvent, KeyboardEvent, memo } from 'react';
import Label from "./Label";
import Input from "./Input";
import FormErrorMessage from "./FormErrorMessage";

type Props = {
    name: string,
    label: string,
    placeholder?: string,
    error?: string,
    value?: string,
    onChange?: (e: string | ChangeEvent<HTMLElement>) => void,
    onKeyDown?: (e: KeyboardEvent) => void,
    type?: string,
    required?: boolean,
}

const LabeledInput: React.FC<Props> = ({
    name,
    label,
    placeholder,
    error,
    value = '',
    onChange,
    onKeyDown,
    type,
    required = false,
}) => (
    <>
        <Label htmlFor={name}>{label}</Label>
        <Input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            onKeyDown={onKeyDown}
        />
        <FormErrorMessage error={error} />
    </>
);

export default memo(LabeledInput);