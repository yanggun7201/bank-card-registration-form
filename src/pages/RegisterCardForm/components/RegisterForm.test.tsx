import RegisterForm from "./RegisterForm";
import { mount, ReactWrapper } from "enzyme";
import { waitFor } from "@testing-library/react";

import FormErrorMessage from "../../../components/forms/FormErrorMessage";
import LabeledInput from "../../../components/forms/LabeledInput";

describe("RegisterForm component test", () => {
    const registerCard = jest.fn();

    const inputProps = {
        className: "test-class-name",
        registerCard,
    };

    test("Should display required error message", async () => {
        const registerForm = mount(<RegisterForm {...inputProps} />);
        const formComponent = registerForm.find('form');

        await waitFor(() => {
            formComponent.simulate('submit');
        });
        registerForm.update();

        expect(registerCard).not.toHaveBeenCalled();

        registerForm.find(FormErrorMessage).forEach(formErrorMessage => {
            expect(formErrorMessage.prop('error')).toEqual('Required');
        });

    });

    test("Should display invalid number error message", async () => {
        const registerForm = mount(<RegisterForm {...inputProps} />);

        const invalidValue = '-000000.0001';

        // CVC
        const cvcInput = registerForm.find('input[name="cvc"]');
        updateField(cvcInput, 'cvc', invalidValue);
        expect(cvcInput.html()).toMatch(invalidValue);

        // Credit card number
        const creditCardNumberInput = registerForm.find('input[name="creditCardNumber"]');
        updateField(creditCardNumberInput, 'creditCardNumber', invalidValue);
        expect(creditCardNumberInput.html()).toMatch(invalidValue);

        const formComponent = registerForm.find('form');
        await waitFor(() => {
            formComponent.simulate('submit');
        });
        registerForm.update();

        expect(registerCard).not.toHaveBeenCalled();

        await waitFor(() => {
            registerForm.find(LabeledInput).forEach(labeledInput => {
                if (["cvc", "creditCardNumber"].includes(labeledInput.prop('name'))) {
                    expect(labeledInput.find(FormErrorMessage).prop('error'))
                        .toEqual('Invalid number');
                }
            });
        });
    });

    test("Should call submit function with correct values", async () => {
        const registerForm = mount(<RegisterForm {...inputProps} />);

        // CVC
        const cvcInput = registerForm.find('input[name="cvc"]');
        updateField(cvcInput, 'cvc', "12345");
        expect(cvcInput.html()).toMatch("12345");

        // Credit card number
        const creditCardNumberInput = registerForm.find('input[name="creditCardNumber"]');
        updateField(creditCardNumberInput, 'creditCardNumber', "09876");
        expect(creditCardNumberInput.html()).toMatch("09876");

        // Credit card number
        const expiryInput = registerForm.find('input[name="expiry"]');
        updateField(expiryInput, 'expiry', "2020-01-01");
        expect(expiryInput.html()).toMatch("2020-01-01");

        const formComponent = registerForm.find('form');
        await waitFor(() => {
            formComponent.simulate('submit');
        });
        registerForm.update();

        expect(registerCard).toHaveBeenCalled();
    });

});

const updateField = (wrapper: ReactWrapper<any>, name: string, value: any) => {
    wrapper.simulate('change', {
        persist: () => {
            // for Formik
        },
        target: {
            name,
            value,
        },
    })
}