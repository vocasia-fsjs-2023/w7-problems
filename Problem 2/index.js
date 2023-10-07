function getProductsAmount(productsArr) {
  const productAmount = {};

  for (const product of productsArr) {
    const [productName, amount] = product;
    productAmount[productName] = (productAmount[productName] || 0) + amount;
  }

  return productAmount;
}

function getTotalPrice(productsObj) {
  const listProduct = [
    ["Asus ROG", 25000000],
    ["Lenovo Legion", 22000000],
    ["Zyrex 1945", 7000000],
    ["HP Omen", 20000000],
    ["Acer Predator", 21000000],
  ];

  let totalPrice = 0;

  for (const productName in productsObj) {
    const amount = productsObj[productName];
    const productPrice = listProduct.find(product => product[0] === productName);

    if (productPrice) {
      totalPrice += productPrice[1] * amount;
    }
  }

  return totalPrice;
}

function getDiscount(memberStatus, totalPrice) {
  if (memberStatus) {
    return totalPrice * 0.8; // Diskon 20% untuk member
  } else {
    return totalPrice;
  }
}

function shoppingTeros(customer) {
  const productsAmount = getProductsAmount(customer.products);
  const totalPrice = getTotalPrice(productsAmount);
  const discountedPrice = getDiscount(customer.member, totalPrice);

  if (customer.member) {
    return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${discountedPrice}`;
  } else {
    return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${discountedPrice}`;
  }
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
