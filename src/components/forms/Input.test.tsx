import Input from "./Input";
import { shallow } from "enzyme";

describe("Input component test", () => {
    const onFieldChange = jest.fn();

    const inputProps = {
        name: 'cvc',
        placeholder: "CVC",
        value: '',
        onChange: onFieldChange,
        type: "number"
    };

    it("Should fire change event", () => {
        const output = shallow(<Input {...inputProps} />);
        const inputComponent = output.find('input');
        const event = { target: { name: inputProps.name, value: "test" } };

        inputComponent.simulate('change', event);
        expect(onFieldChange).toHaveBeenCalled();
    });

    it("Should set type", () => {
        const output1 = shallow(<Input {...inputProps} />);
        expect(output1.props()).toHaveProperty('type', 'number');

        const output2 = shallow(<Input {...inputProps} type={"text"} />);
        expect(output2.props()).toHaveProperty('type', 'text');
    });
});