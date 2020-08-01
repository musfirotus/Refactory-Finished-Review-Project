const Item = require('../src/12');
test("Check Data", () => {
    expect(Item.findById(3).isOnSale()).toBe(false)
    expect(Item.findById(5).isOnSale()).toBe(true)
})