import { validateFormNumber } from "./validate";

describe('Validate', () => {
    test('Correct number', () => {
        expect(validateFormNumber(1000)).toBe(null);
    });

    test('Invalid number', () => {
        expect(validateFormNumber(10.10)).toBe("Invalid number");
    });

    test('Required', () => {
        expect(validateFormNumber(undefined)).toBe("Required");
    });
});