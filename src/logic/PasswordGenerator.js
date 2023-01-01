const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = capitalLetters.toLowerCase();
const numbers = '1234567890'
const specialCharacters = '!@#$%^&*?';

const validateFields = {
    capital: (isCapital) => {
        return isCapital ? capitalLetters : null
    },
    numbers: (isNumbers) => {
        return isNumbers ? numbers : null
    },
    special: (isSpecial) => {
        return isSpecial ? specialCharacters : null
    },
    fields: function (capital, special, numbers) {
        return [this.capital(capital), this.numbers(numbers), this.special(special), lowercaseLetters]
                .filter(value => value != null);
    }
}

export const generatePassword = (capital, special, number, length) => {
    const fields = validateFields.fields(capital, special, number)
    return generate(fields, length).join('')
}

const generate = (fields, length) => {
    const result = [];
    console.log(length)
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * fields.length);
        const index = Math.floor(Math.random() * fields[random].length);
        const char = fields[random][index];
        result.push(char)
    }
    return result
}