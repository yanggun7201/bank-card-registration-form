import React, { ChangeEvent, memo } from 'react';
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
    type?: string,
}

const LabeledInput: React.FC<Props> = ({
    name,
    label,
    placeholder,
    error,
    value = '',
    onChange,
    type,
}) => (
    <>
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        <FormErrorMessage error={error} />
    </>
);

export default memo(LabeledInput);