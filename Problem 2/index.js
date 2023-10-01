function getProductAmount(products) {
  const listProductAmount = {};

  for (const product of products) {
    const [productName, quantity] = product;
    listProductAmount[productName] = (listProductAmount[productName] || 0) + quantity;
  }

  return listProductAmount;
}

function getTotalPrice(listProductAmount) {
  const productPrices = {
    "Asus ROG": 25000000,
    "Lenovo Legion": 22000000,
    "HP Omen": 20000000,
    "Acer Predator": 21000000,
  };

  let totalPrice = 0;

  for (const productName in listProductAmount) {
    if (productPrices.hasOwnProperty(productName)) {
      const quantity = listProductAmount[productName];
      totalPrice += productPrices[productName] * quantity;
    }
  }

  return totalPrice;
}

function getDiscount(statusMember, totalPrice) {
  if (statusMember) {
    const discount = 0.2; // 20% discount for members
    return totalPrice - totalPrice * discount;
  } else {
    return totalPrice;
  }
}

function shoppingTeros(customer) {
  const { name, products, member } = customer;

  const listProductAmount = getProductAmount(products);
  const totalPrice = getTotalPrice(listProductAmount);
  const totalPriceAfterDiscount = getDiscount(member, totalPrice);

  if (member) {
    return `Hai pelanggan setia ${name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  } else {
    return `Hai ${name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  }
}

// Contoh penggunaan:
const customer1 = {
  name: "Amir",
  products: [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]],
  member: true,
};
const customer2 = {
  name: "Fadlila",
  products: [["Acer Predator", 1], ["Asus ROG", 3], ["Lenovo Legion", 1]],
  member: false,
};
const customer3 = {
  name: "Jetly",
  products: [["HP Omen", 2]],
  member: true,
};

const result = shoppingTeros(customer1);
console.log(result); // Output: "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
// const result = shoppingTeros(customer2);
// console.log(result); // Output: "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
// const result = shoppingTeros(customer3);
// console.log(result); // Output: "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
