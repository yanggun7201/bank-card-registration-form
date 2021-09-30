import React, { KeyboardEvent, useCallback } from 'react';
import { FormikErrors, useFormik, } from 'formik';
import { css } from "@emotion/react";
import LabeledInput from "../../../components/forms/LabeledInput";
import Button from "../../../components/forms/Button";
import { validateFormDate, validateFormNumber } from "../../../includes/validate";

export type FormValues = {
    creditCardNumber: number | undefined,
    cvc: number | undefined,
    expiry: string,
}

type Props = {
    className?: string,
    registerCard: (values: FormValues) => void,
}

const RegisterForm: React.FC<Props> = ({
    className,
    registerCard,
}) => {

    const formik = useFormik({
        initialValues: {
            creditCardNumber: undefined,
            cvc: undefined,
            expiry: '',
        },
        validateOnChange: false,
        validate,
        onSubmit: values => {
            registerCard(values);
            formik.resetForm();
        },
    });

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.key === "Backspace" || /\d/.test(e.key)) {
            return true;
        }

        e.preventDefault();
    }, []);

    return (
        <div className={className}>
            <form onSubmit={formik.handleSubmit} css={formStyle} noValidate>
                <LabeledInput
                    type="number"
                    label="Credit card number"
                    name="creditCardNumber"
                    placeholder="Credit card number"
                    error={formik.errors.creditCardNumber}
                    value={formik.values.creditCardNumber}
                    onChange={formik.handleChange}
                    onKeyDown={onKeyDown}
                    required
                />

                <LabeledInput
                    type="number"
                    label="CVC"
                    name="cvc"
                    placeholder="CVC"
                    error={formik.errors.cvc}
                    value={formik.values.cvc}
                    onChange={formik.handleChange}
                    onKeyDown={onKeyDown}
                    required
                />

                <LabeledInput
                    type="date"
                    label="Expiry"
                    name="expiry"
                    placeholder="Expiry"
                    error={formik.errors.expiry}
                    value={formik.values.expiry}
                    onChange={formik.handleChange}
                    required
                />

                <Button
                    type="submit"
                    disabled={!formik.isValid && !formik.dirty}
                    css={buttonStyle}
                >
                    Submit
                </Button>
            </form>

        </div>
    );
};

export default RegisterForm;

const validate = (values: FormValues): FormikErrors<FormValues> => {
    const errors: FormikErrors<FormValues> = {};

    const creditCardNumberError = validateFormNumber(values.creditCardNumber);
    if (creditCardNumberError) {
        errors.creditCardNumber = creditCardNumberError;
    }

    const cvcError = validateFormNumber(values.cvc);
    if (cvcError) {
        errors.cvc = cvcError;
    }

    const expiryError = validateFormDate(values.expiry);
    if (expiryError) {
        errors.expiry = expiryError;
    }

    return errors;
}

const formStyle = css`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const buttonStyle = css`
    margin-top: 16px;
`;