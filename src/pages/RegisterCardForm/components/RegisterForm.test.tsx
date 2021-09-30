import RegisterForm from "./RegisterForm";
import { mount } from "enzyme";
import { waitFor } from "@testing-library/react";

import FormErrorMessage from "../../../components/forms/FormErrorMessage";

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

});
