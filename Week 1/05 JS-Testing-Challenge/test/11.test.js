const findByUserName = require('../src/11');
test('Show Johndoe\'s data', () => {
    expect(findByUserName("johndoe")).toStrictEqual({
        id: 3,
        username: 'johndoe',
        name: 'John Doe'
    })
})