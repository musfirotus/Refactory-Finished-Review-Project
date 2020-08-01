const csv =`NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

const { promises } = require('fs')

const [header, ...array] = csv.split("\n")

const obj = array.map((value) => {
  const items = value.split(", ")
  const obj = {}

  header.split(", ").map((value) => value.toLowerCase()).forEach((value, index) => {
    if (value == "price") {
      obj[value] = new Intl.NumberFormat("id", { style: 'currency', currency: "IDR" }).format(parseInt(items[index]))
    } else {
      obj[value] = items[index]
    }
  })

  return obj;
})

promises.readFile('data.csv').then((value) => {
  const [header, ...array] = value.toString('utf8').split("\n")

  const obj = array.map((value) => {
    const items = value.split(", ")
    const obj = {}
  
    header.split(", ").map((value) => value.toLowerCase()).forEach((value, index) => {
      if (value == "price") {
        obj[value] = new Intl.NumberFormat("id", { style: 'currency', currency: "IDR" }).format(parseInt(items[index]))
      } else {
        obj[value] = items[index]
      }
    })
  
    return obj;
  })
  
  console.log(obj)
})