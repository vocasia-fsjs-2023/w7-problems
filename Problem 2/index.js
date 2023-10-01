function getProductsAmount(productsArr) {
  // Inisialisasi objek untuk menyimpan jumlah produk yang ingin dibeli
  const productAmount = {};

  // Iterasi melalui array produk dan menghitung jumlah produk yang ingin dibeli
  for (let i = 0; i < productsArr.length; i++) {
    const productName = productsArr[i][0];
    const quantity = productsArr[i][1];

    // Menyimpan jumlah produk dalam objek productAmount
    productAmount[productName] = (productAmount[productName] || 0) + quantity;
  }

  return productAmount;
}

function getTotalPrice(productsObj) {
  // Data harga produk
  const productPrices = {
    'Asus ROG': 25000000,
    'Lenovo Legion': 22000000,
    'Zyrex 1945': 7000000,
    'HP Omen': 20000000,
    'Acer Predator': 21000000,
  };

  // Menghitung total harga berdasarkan jumlah produk yang ingin dibeli
  let totalPrice = 0;

  for (const productName in productsObj) {
    if (productsObj.hasOwnProperty(productName)) {
      const quantity = productsObj[productName];
      const price = productPrices[productName];

      // Menambahkan harga produk ke total harga
      totalPrice += quantity * price;
    }
  }

  return totalPrice;
}

function getDiscount(memberStatus, totalPrice) {
  // Menghitung diskon 20% jika customer adalah member
  if (memberStatus) {
    return totalPrice * 0.8;
  } else {
    return totalPrice;
  }
}

function shoppingTeros(customer) {
  // Menghitung jumlah produk yang ingin dibeli
  const productsAmount = getProductsAmount(customer.products);

  // Menghitung total harga sebelum diskon
  const totalPrice = getTotalPrice(productsAmount);

  // Menghitung total harga setelah diskon (jika customer adalah member)
  const totalPriceAfterDiscount = getDiscount(customer.member, totalPrice);

  // Membuat pesan berdasarkan status member
  let message;
  if (customer.member) {
    message = `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  } else {
    message = `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
  }

  return message;
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
