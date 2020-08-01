const charLength = require('../src/01');
test('Refactory memiliki 9 karakter', () => {
    expect(charLength('Refactory')).toBe(9);
})