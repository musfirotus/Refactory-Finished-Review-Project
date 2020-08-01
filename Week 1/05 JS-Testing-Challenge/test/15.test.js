const roman = require('../src/15');
test("cek roman", () => {
    expect(roman("I")).toStrictEqual(1);
    expect(roman("II")).toStrictEqual(2);
    expect(roman("III")).toStrictEqual(3);
    expect(roman("V")).toStrictEqual(5);
    expect(roman("VI")).toStrictEqual(6);
    expect(roman("X")).toStrictEqual(10);
    expect(roman("L")).toStrictEqual(50);
    expect(roman("C")).toStrictEqual(100);
    expect(roman("D")).toStrictEqual(500);
    expect(roman("M")).toStrictEqual(1000);
    expect(roman("MMXVIII")).toStrictEqual(2018);
})