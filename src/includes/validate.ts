export const validateFormNumber = (value: number | undefined) => {
    const stringValue = (value ?? "").toString();

    if (!stringValue) {
        return 'Required';
    } else if (stringValue.includes(".") || Number(stringValue) < 0) {
        return 'Invalid number';
    }

    return null;
}

export const validateFormDate = (value: string) => {
    const stringValue = value.trim();

    if (!stringValue) {
        return 'Required';
    } else {
        const date = new Date(stringValue);
        if (isNaN(date.getTime())) {
            return 'Invalid date';
        }
    }

    return null;
}