export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export function validateName(name) {
    return name.trim().length > 0;
}

export function validateMessage(textareaContent, minLength = 1) {
    return textareaContent.trim().length >= minLength;
}

export function validateForm(fields) {
    return (
        validateEmail(fields.email) &&
        validateName(fields.name) &&
        validateMessage(fields.textareaContent)
    );
}