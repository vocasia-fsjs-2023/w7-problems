function getProductAmount(products) {
  const listProductAmount = {};

  for (const product of products) {
    const [productName, quantity] = product;
    listProductAmount[productName] = (listProductAmount[productName] || 0) + quantity;
  }

  return listProductAmount;
}

function getTotalPrice(listProductAmount) {
  const productList = {
    "Asus ROG": 25000000,
    "Lenovo Legion": 22000000,
    "HP Omen": 20000000,
    "Acer Predator": 21000000,
  };

  let totalPrice = 0;

  for (const productName in listProductAmount) {
    const quantity = listProductAmount[productName];
    const price = productList[productName] || 0;
    totalPrice += quantity * price;
  }

  return totalPrice;
}

function getDiscount(statusMember, totalPrice) {
  const discountPercentage = statusMember ? 20 : 0;
  const discountAmount = (discountPercentage / 100) * totalPrice;
  const totalPriceAfterDiscount = totalPrice - discountAmount;

  return totalPriceAfterDiscount;
}

function shoppingTeros(customer) {
  const { name, products, member } = customer;
  
  const listProductAmount = getProductAmount(products);
  const totalPrice = getTotalPrice(listProductAmount);
  const totalPriceAfterDiscount = getDiscount(member, totalPrice);

  const greeting = member ? Hai pelanggan setia ${name}! : Hai ${name}!;

  return ${greeting} Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount};
}

// Contoh:
const customer = {
  name: "Amir",
  products: [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]],
  member: true,
};

// Output: "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
const result = shoppingTeros(customer);
console.log(result);
