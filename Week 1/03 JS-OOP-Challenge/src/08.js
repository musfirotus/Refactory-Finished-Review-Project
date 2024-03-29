const items = [];
class Cart {
    addItem(item_id, price, quantity) {
        items.push(item_id, price, quantity);
    }
    // setName(name) {
    //     this.name = name
    // }
    // setEmail(email) {
    //     this.email = email
    // }
    // setPassword(password) {
    //     this.password = password
    // }
}
const cart = new Cart()
// Do some chainings
cart.addItem({
        item_id: 1,
        price: 30000,
        quantity: 3
    })
    .addItem({
        item_id: 2,
        price: 10000
    }) // By default quantity is 1
    .addItem({
        item_id: 3,
        price: 5000,
        quantity: 2
    })
    .removeItem({
        item_id: 2
    })
    .addItem({
        item_id: 4,
        price: 400,
        quantity: 6
    })
    .addDiscount('50%')

// cart.totalItems() // 3

// cart.totalQuantity() // 11

// cart.totalPrice() // 51200

// cart.showAll() // Show all items in cart

// cart.checkout() // Store data in a file