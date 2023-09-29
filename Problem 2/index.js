function getProductsAmount(productsArr) {
  // Write your code here
  // EXPECTIATION
  // Input from customer.products
  // [
  //   ["Asus ROG", 2],
  //   ["Lenovo Legion", 3],
  // ],
  // Result
  // {
  //   "Asus ROG": 2,
  //   "Lenovo Legion":3
  // }
  const productsAmount = {};
  for (let i = 0; i < productsArr.length; i++) {
    const productName = productsArr[i][0];
    const productAmount = productsArr[i][1];
    productsAmount[productName] = productAmount;
  }
  return productsAmount;
}

function getTotalPrice(productsObj) {
  const listProduct = [
    ["Asus ROG", 25000000],
    ["Lenovo Legion", 22000000],
    ["Zyrex 1945", 7000000],
    ["HP Omen", 20000000],
    ["Acer Predator", 21000000],
  ];
  // Write your code here
  // EXPECTIATION
  // Input
  // {
  //   "Asus ROG": 2,
  //   "Lenovo Legion":3
  // }
  // Result
  // 121000000 // NUMBER
  let totalPrice = 0;
  for (const key in productsObj) {
    for (let i = 0; i < listProduct.length; i++) {
      if (key === listProduct[i][0]) {
        totalPrice += listProduct[i][1] * productsObj[key];
      }
    }
  }
  return totalPrice;
}

function getDiscount(memberStatus, totalPrice) {
  // Write your code here
  // EXPECTIATION
  // Input
  // memberStatus = true
  // totalPrice = 121000000
  // Result
  // 92800000 // NUMBER
  return memberStatus ? totalPrice - totalPrice * 0.2 : totalPrice;
}

function shoppingTeros(customer) {
  // write your code here pakai function yg sudah dibuat diatas didalam sini
  // EXPECTATION Return berupa string sesuai contoh dibawah
  // apabila member maka panggil dia pelanggan setia
  const productsAmount = getProductsAmount(customer.products);
  const totalPrice = getTotalPrice(productsAmount);
  const discount = getDiscount(customer.member, totalPrice);

  return `Hai ${customer.member ? "pelanggan setia" : ""} ${
    customer.name
  }! Total Harga yang harus kamu bayar adalah Rp ${discount}`;
}

let customer1 = {
  name: "Fajrin",
  products: [
    ["Asus ROG", 2],
    ["Lenovo Legion", 3],
  ],
  member: true,
};

let customer2 = {
  name: "Fadlila",
  products: [
    ["Acer Predator", 1],
    ["Asus ROG", 3],
    ["Lenovo Legion", 1],
  ],
  member: false,
};

let customer3 = {
  name: "Jetly",
  products: [["HP Omen", 2]],
  member: true,
};

// TEST CASES
console.log(shoppingTeros(customer1)); // Hai pelanggan setia Fajrin! Total Harga yang harus kamu bayar adalah Rp 92800000
console.log(shoppingTeros(customer2)); // Hai Fadlila! Total Harga yang harus kamu bayar adalah Rp 118000000
console.log(shoppingTeros(customer3)); // Hai pelanggan setia Jetly! Total Harga yang harus kamu bayar adalah Rp 32000000
