const mtk = require('../src/03');
test('100 Mebibytes = 102400 Kibibytes', () => {
    expect(mtk(100)).toBe(102400)
})