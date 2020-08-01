const repeatLetter = require('../src/07');
test('HHeelllloo WWoorrlldd!!', () => {
    expect(repeatLetter('Hello World! ', 2)).toBe('HHeelllloo WWoorrlldd!!')
})