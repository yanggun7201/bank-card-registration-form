import { validateFormNumber } from "./validate";

describe('Validate', () => {
    it('Correct number', () => {
        expect(validateFormNumber(1000)).toBe(null);
    });
    it('Invalid number', () => {
        expect(validateFormNumber(10.10)).toBe("Invalid number");
    });
    it('Required', () => {
        expect(validateFormNumber(undefined)).toBe("Required");
    });
});