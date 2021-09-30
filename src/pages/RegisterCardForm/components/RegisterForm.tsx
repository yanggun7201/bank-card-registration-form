import React from 'react';
import { FormikErrors, useFormik, } from 'formik';
import { css } from "@emotion/react";
import LabeledInput from "../../../components/forms/LabeledInput";
import Button from "../../../components/forms/Button";

export type FormValues = {
    creditCardNumber: string,
    cvc: string,
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
            creditCardNumber: '',
            cvc: '',
            expiry: '',
        },
        validateOnChange: false,
        validate,
        onSubmit: values => {
            registerCard(values);
        },
    });

    return (
        <div className={className}>
            <form onSubmit={formik.handleSubmit} css={formStyle}>
                <LabeledInput
                    type="number"
                    label="Credit card number"
                    name="creditCardNumber"
                    placeholder="Credit card number"
                    error={formik.errors.creditCardNumber}
                    value={formik.values.creditCardNumber}
                    onChange={formik.handleChange}
                />

                <LabeledInput
                    type="number"
                    label="CVC"
                    name="cvc"
                    placeholder="CVC"
                    error={formik.errors.cvc}
                    value={formik.values.cvc}
                    onChange={formik.handleChange}
                />

                <LabeledInput
                    type="date"
                    label="Expiry"
                    name="expiry"
                    placeholder="Expiry"
                    error={formik.errors.expiry}
                    value={formik.values.expiry}
                    onChange={formik.handleChange}
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
    let errors: FormikErrors<FormValues> = {};

    if (!values.creditCardNumber) {
        errors.creditCardNumber = 'Required';
    } else if (Number(values.creditCardNumber) < 0) {
        errors.creditCardNumber = 'Invalid number';
    }

    if (!values.cvc) {
        errors.cvc = 'Required';
    } else if (Number(values.cvc) < 0) {
        errors.creditCardNumber = 'Invalid number';
    }

    if (!values.expiry) {
        errors.expiry = 'Required';
    } else {
        const date = new Date(values.expiry);
        if (isNaN(date.getTime())) {
            errors.expiry = 'Invalid date';
        }
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