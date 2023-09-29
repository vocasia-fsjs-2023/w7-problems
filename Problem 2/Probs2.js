function getProductAmount(products) {
    const listProductAmount = {};
    for (const product of products) {
      const [productName, amount] = product;
      listProductAmount[productName] = (listProductAmount[productName] || 0) + amount;
    }
    return listProductAmount;
  }
  
  function getTotalPrice(listProductAmount) {
    let totalPrice = 0;
    for (const productName in listProductAmount) {
      const amount = listProductAmount[productName];
      const pricePerItem = getProductPrice(productName);
      totalPrice += amount * pricePerItem;
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
  
  // Function to get the price of a product by name
  function getProductPrice(productName) {
    const products = {
      "Asus ROG": 25000000,
      "Lenovo Legion": 22000000,
      "HP Omen": 20000000,
      "Acer Predator": 21000000,
    };
  
    return products[productName] || 0;
  }
  
  // Example usage
  const customer = {
    name: "Amir",
    products: [["Acer Predator", 2], ["Asus ROG", 1], ["Lenovo Legion", 1]],
    member: true,
  };
  
  const result = shoppingTeros(customer);
  console.log(result); // Output: "Hai pelanggan setia Amir! Total Harga yang harus kamu bayar adalah Rp 71200000"
  