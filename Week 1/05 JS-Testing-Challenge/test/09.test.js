const symmetrical = require('../src/09');
test('Symmetrical value', () => {
    expect(symmetrical('malam')).toStrictEqual(true)
    expect(symmetrical('taat')).toStrictEqual(true)
    expect(symmetrical('tidur')).toStrictEqual(false)
    expect(symmetrical(1234)).toStrictEqual(false)
    expect(symmetrical(108801)).toStrictEqual(true)
    expect(symmetrical(8001008)).toStrictEqual(true)
})