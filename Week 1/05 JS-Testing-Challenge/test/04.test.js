const isLeapYear = require("../src/04");
test("2020 is leap year", () => {
	expect(isLeapYear(2020)).toBeTruthy();
});
