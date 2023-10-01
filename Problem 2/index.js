function getProductAmount(products) {
    const productAmount = {};
  
    for (let i = 0; i < products.length; i++) {
      const [productName, quantity] = products[i];
      productAmount[productName] = (productAmount[productName] || 0) + quantity;
    }
  
    return productAmount;
  }
  
  function getTotalPrice(listProductAmount) {
    let totalPrice = 0;
  
    for (const productName in listProductAmount) {
      if (listProductAmount.hasOwnProperty(productName)) {
        const quantity = listProductAmount[productName];
        const productPrice = getProductPrice(productName);
        totalPrice += productPrice * quantity;
      }
    }
  
    return totalPrice;
  }
  
  function getDiscount(statusMember, totalPrice) {
    if (statusMember) {
      return totalPrice * 0.8; // 20% discount for members
    } else {
      return totalPrice;
    }
  }
  
  function getProductPrice(productName) {
    // Menyediakan daftar harga produk
    const productPrices = {
      'Asus ROG': 25000000,
      'Lenovo Legion': 22000000,
      'HP Omen': 20000000,
      'Acer Predator': 21000000,
    };
  
    return productPrices[productName] || 0;
  }
  
  function shoppingTeros(customer) {
    const listProductAmount = getProductAmount(customer.products);
    const totalPrice = getTotalPrice(listProductAmount);
    const totalPriceAfterDiscount = getDiscount(customer.member, totalPrice);
  
    if (customer.member) {
      return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
    } else {
      return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
    }
  }
  
  // Contoh penggunaan
  const customer = {
    name: "Amir",
    products: [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]],
    member: true
  };
  
  const result = shoppingTeros(customer);
  console.log(result); // Output: "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
  