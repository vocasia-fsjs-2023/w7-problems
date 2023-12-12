function getProductsAmount(productsArr) {
  // Write your code here
  let listProductAmount = {};

  for (let i = 0; i < productsArr.length; i++) {
    let productName = productsArr[i][0];
    let productAmount = productsArr[i][1];

    listProductAmount[productName] = productAmount;
  };

  return listProductAmount;
};
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


function getTotalPrice(productsObj) {
  const listProduct = [
    ["Asus ROG", 25000000],
    ["Lenovo Legion", 22000000],
    ["Zyrex 1945", 7000000],
    ["HP Omen", 20000000],
    ["Acer Predator", 21000000],
  ];
  // Write your code here
  let totalPrice = 0;

  for (let product in productsObj) {
    let productPrice = listProduct.find(item => item[0] === product)[1];
    totalPrice += productPrice * productsObj[product];
  };

  return totalPrice;
};
  // EXPECTIATION
  // Input
  // {
  //   "Asus ROG": 2,
  //   "Lenovo Legion":3
  // }
  // Result
  // 121000000 // NUMBER


function getDiscount(memberStatus, totalPrice) {
  // Write your code here
  if (memberStatus) {
    return Math.floor(totalPrice * 0.8);
  } else {
    return totalPrice;
  };
};
  // EXPECTIATION
  // Input
  // memberStatus = true
  // totalPrice = 121000000
  // Result
  // 92800000 // NUMBER


function shoppingTeros(customer) {
  // write your code here pakai function yg sudah dibuat diatas didalam sini
  let listProductAmount = getProductsAmount(customer.products);
  let totalPrice = getTotalPrice(listProductAmount);
  let totalPriceAfterDiscount = getDiscount(customer.member, totalPrice);

  if (customer.member) {
    return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  } else {
    return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  };
};
  // EXPECTATION Return berupa string sesuai contoh dibawah
  // apabila member maka panggil dia pelanggan setia


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
