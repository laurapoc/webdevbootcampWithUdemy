let faker = require("faker");
for (let i = 1; i <= 10; i++) {
  console.log(i + " " + faker.commerce.productName() + " - $" + faker.commerce.price());
};
