function getProductsAmount(productsArr) {
    // Write your code here

    const productAmount = {};

    for (let i = 0; i < productsArr.length; i++) {
        const [productName, quantity] = productsArr[i];
        productAmount[productName] = quantity;
    }

    return productAmount;

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

    const productPrice = getProductsAmount(listProduct);
    let totalPrice = 0;

    for (const productName in productsObj) {
        if (productsObj.hasOwnProperty(productName)) {
            const quantity = productsObj[productName];
            const price = productPrice[productName];
            totalPrice += (quantity * price);
        }
    }

    return totalPrice;

    // EXPECTIATION
    // Input
    // {
    //   "Asus ROG": 2,
    //   "Lenovo Legion":3
    // }
    // Result
    // 121000000 // NUMBER salah
    // 116000000 // NUMBER benar (50.000.000 + 66.000.000)
}

function getDiscount(memberStatus, totalPrice) {
    // Write your code here

    if (memberStatus) {
        return totalPrice * 0.8;
    } else {
        return totalPrice;
    }

    // EXPECTIATION
    // Input
    // memberStatus = true
    // totalPrice = 121000000
    // Result
    // 92800000 // NUMBER
}

function shoppingTeros(customer) {
    // write your code here pakai function yg sudah dibuat diatas didalam sini
    // EXPECTATION Return berupa string sesuai contoh dibawah
    // apabila member maka panggil dia pelanggan setia

    const productAmount = getProductsAmount(customer.products);
    const totalPrice = getTotalPrice(productAmount);
    const totalPriceAfterDiscount = getDiscount(customer.member, totalPrice);

    if (customer.member) {
        return `Hai pelanggan setia ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
    } else {
        return `Hai ${customer.name}! Total Harga yang harus kamu bayar adalah Rp ${totalPriceAfterDiscount}`;
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

//! TEST CASES
console.log(shoppingTeros(customer1)); // Hai pelanggan setia Fajrin! Total Harga yang harus kamu bayar adalah Rp 92800000
console.log(shoppingTeros(customer2)); // Hai Fadlila! Total Harga yang harus kamu bayar adalah Rp 118000000
console.log(shoppingTeros(customer3)); // Hai pelanggan setia Jetly! Total Harga yang harus kamu bayar adalah Rp 32000000

// function testCase(kasus, expect) {
//   return kasus === expect ? "PASS" : "FAIL"
// }

// console.log(testCase(shoppingTeros(customer1), `Hai pelanggan setia ${customer1.name}! Total Harga yang harus kamu bayar adalah Rp 92800000`));
// console.log(testCase(shoppingTeros(customer2), `Hai ${customer2.name}! Total Harga yang harus kamu bayar adalah Rp 118000000`));
// console.log(testCase(shoppingTeros(customer3), `Hai pelanggan setia ${customer3.name}! Total Harga yang harus kamu bayar adalah Rp 32000000`)); // 

