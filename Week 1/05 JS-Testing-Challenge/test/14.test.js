const isIsogram = require('../src/14');
test('Check if is Isogram', () => {
    expect(isIsogram('gelas')).toBe(true)
    expect(isIsogram('makan')).toBe(false)
})