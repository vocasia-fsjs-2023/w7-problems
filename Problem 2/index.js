function getProductAmount(products) {
  const listProductAmount = {};
  for (var i = 0; i < products.length; i++) {
    const product = products[i];
    const nameProduct = product[0];   
    const amountProduct = product[1]; 
    listProductAmount[nameProduct] = amountProduct;
  }
  return listProductAmount;
}

function getTotalPrice(listProductAmount) { 
  const prices = {
    "Asus ROG": 25000000,
    "Lenovo Legion": 22000000,
    "Zyrex 1945": 7000000,
    "HP Omen": 20000000,
    "Acer Predator": 21000000,
  };
  let totalPrice = 0;
  for (const nameProduct in listProductAmount) {
    if (listProductAmount.hasOwnProperty(nameProduct)) {
      const qtyProduct = listProductAmount[nameProduct];
      totalPrice += prices[nameProduct] * qtyProduct;
    }
  }
  return totalPrice;
}

function getDiscount(memberStatus, totalPrice) {
  const percenDiscount = 20;
  if (memberStatus) {
    const amountDiscount = (percenDiscount / 100) * totalPrice;
    return totalPrice - amountDiscount;
  } else {
    return totalPrice;
  }
}

function shoppingTeros(customer) {
  const products = customer.products;
  const listProductAmount = getProductAmount(products);
  const totalPrice = getTotalPrice(listProductAmount);
  const memberStatus = customer.member;
  const finalPrice = getDiscount(memberStatus, totalPrice);

  if (memberStatus) {
    return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${finalPrice}`;
  } else {
    return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPrice}`;
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
console.log(shoppingTeros(customer1)); // Hai pelanggan setia Fajrin! Total Harga yang harus kamu bayar adalah Rp 92600000
console.log(shoppingTeros(customer2)); // Hai Fadlila! Total Harga yang harus kamu bayar adalah Rp 116000000
console.log(shoppingTeros(customer3)); // Hai pelanggan setia Jetly! Total Harga yang harus kamu bayar adalah Rp 32000000
