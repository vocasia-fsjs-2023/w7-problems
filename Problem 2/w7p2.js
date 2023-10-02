function getProductsAmount(productsArr) {
    const productsObj = {};
    for (const [productName, amount] of productsArr) {
      productsObj[productName] = amount;
    }
    return productsObj;
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
    for (const [productName, amount] of Object.entries(productsObj)) {
      const productPrice = listProduct.find((item) => item[0] === productName)[1];
      totalPrice += productPrice * amount;
    }
    return totalPrice;
  }
  
  function getDiscount(memberStatus, totalPrice) {
    if (memberStatus) {
      return totalPrice * 0.2; // 20% discount for members
    } else {
      return 0;
    }
  }
  
  function shoppingTeros(customer) {
    const productsObj = getProductsAmount(customer.products);
    const totalPrice = getTotalPrice(productsObj);
    const discount = getDiscount(customer.member, totalPrice);
    const finalPrice = totalPrice - discount;
    if(customer.member) {
      return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${finalPrice}`;
    }else{
      return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${finalPrice}`
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
  