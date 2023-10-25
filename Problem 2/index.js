function getProductsAmount(productsArr) {
  let obj = {};
  let list = productsArr.products;
  for (let isi of list) {
    obj[isi[0]] = isi[1];
  }
  return obj;
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
  let result = 0;
  for (let harga in productsObj) {
    for (let i = 0; i < listProduct.length; i++) {
      if (listProduct[i][0] === harga) {
        let hargaBarang = listProduct[i][1];
        let jumlah = productsObj[harga];
        let jumlahHarga = hargaBarang * jumlah;
        result += jumlahHarga;
      }
    }
  }
  return result;
}

function getDiscount(memberStatus, totalPrice) {
  // Write your code here
  // EXPECTIATION
  // Input
  // memberStatus = true
  // totalPrice = 121000000
  // Result
  // 92800000 // NUMBER

  let hasilDiskon = 0;
  let diskon = 20 / 100;
  if (memberStatus.member) {
    let totalDiskon = totalPrice * diskon;
    hasilDiskon = totalDiskon;
  }

  return hasilDiskon;
}

function shoppingTeros(customer) {
  // write your code here pakai function yg sudah dibuat diatas didalam sini
  // EXPECTATION Return berupa string sesuai contoh dibawah
  // apabila member maka panggil dia pelanggan setia
  // getProductsAmount(customer);
  let member = getProductsAmount(customer);
  let hargaNormal = getTotalPrice(member);
  let hargaDiskon = getDiscount(customer, hargaNormal);

  if (customer.member) {
    return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah ${hargaDiskon}`;
  } else {
    return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah ${hargaNormal}`;
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
