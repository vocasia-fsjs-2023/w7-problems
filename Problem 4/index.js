/**
 * Dilarang memakai built-in function kecuali:
 * toString, String, Number, push, pop, typeof, toLowerCase, toUpperCase, toFixed
 */

function getDataMovie(movieTitle) {
    let movies = [
        {
            title: "Sherlock Holmes",
            price: 20000,
        },
        {
            title: "Forrest Gump",
            price: 18000,
        },
        {
            title: "Call",
            price: 16000,
        },
        {
            title: "The Dark Knight",
            price: 14000,
        },
        {
            title: "5 cm",
            price: 25000,
        },
    ];

    // write your code here
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === movieTitle) {
            return movies[i];
        }
    }

    return null;
}
// getDataMovie();

function getFreeMeal(allergies) {
    let foods = [
        {
            name: "Pizza",
            price: 50000,
        },
        {
            name: "Burger",
            price: 45000,
        },
        {
            name: "Popcorn",
            price: 35000,
        },
        {
            name: "Odading",
            price: 20000,
        },
        {
            name: "Gorengan",
            price: 10000,
        },
        {
            name: "Chitato",
            price: 5000,
        },
    ];

    // write your code here
    for (let i = 0; i < foods.length; i++) {
        if (!allergies.includes(foods[i].name)) {
            return foods[i];
        }
    }

    // Jika tidak ada makanan yang sesuai dengan alergi, berikan makanan pertama
    return foods[0];
}

function getFreeDrink(drinkSoda) {
    let drinks = [
        {
            name: "Coca-Cola",
            price: 15000,
            soda: true,
        },
        {
            name: "Pepsi",
            price: 12000,
            soda: true,
        },
        {
            name: "Thai Tea",
            price: 20000,
            soda: false,
        },
        {
            name: "Siboba",
            price: 18000,
            soda: false,
        },
    ];
    // write your code here

    for (let i = 0; i < drinks.length; i++) {
        if (drinkSoda === drinks[i].soda) {
            return drinks[i];
        }
    }

    // Jika tidak ada minuman yang sesuai, berikan minuman pertama
    return drinks[0];
}

function getCinemaType(movieTitle) {
    let types = {
        Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
        Regular: ["Sherlock Holmes", "Call"],
    };
    // write your code here
    for (let type in types) {
        if (types[type].includes(movieTitle)) {
            return type;
        }
    }

    return null; // Return null kalo ngga ditemukan
}

function getSeatNumber(codeType) {
    // Lambang "x" menandakan bahwa kursi sudah terisi
    let seats = [
        ["A", "x", "2", "3", "4"],
        ["B", "1", "x", "x", "4"],
        ["C", "x", "x", "3", "4"],
        ["D", "x", "x", "x", "4"],
    ];
    // write your code here
    for (let i = 0; i < seats.length; i++) {
        if (seats[i][0] === codeType) {
            for (let j = 1; j < seats[i].length; j++) {
                if (seats[i][j] !== "x") {
                    return codeType + seats[i][j];
                }
            }
        }
    }

    return null; // Return null kalo semisal kursi dah terisi semua
}

function printTicket(customer) {
    // write your code here
    const dataMovie = getDataMovie(customer.movie);
    const freeMeal = getFreeMeal(customer.allergies);
    const freeDrink = getFreeDrink(customer.drinkSoda);
    const cinemaType = getCinemaType(customer.movie);
    const seatNumber = getSeatNumber(customer.seatCode);

    if (
        dataMovie === null ||
        freeMeal === null ||
        freeDrink === null ||
        cinemaType === null ||
        seatNumber === null
    ) {
        return "Tidak dapat mencetak tiket. Data tidak lengkap atau tidak valid.";
    }

    const totalPrice = dataMovie.price + freeMeal.price + freeDrink.price;

    const message =
        "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

    const data = {
        name: customer.name,
        movie: customer.movie,
        meal: freeMeal.name,
        drink: freeDrink.name,
        seatType: cinemaType,
        seatNumber: seatNumber,
        totalPrice: totalPrice,
        message: message,
    };

    return data;
}

let customer1 = {
    name: "Fajrin",
    movie: "5 cm",
    allergies: ["Pizza", "Burger"],
    drinkSoda: true,
    seatCode: "C",
};

let customer2 = {
    name: "Amel",
    movie: "The Dark Knight",
    allergies: ["Popcorn", "Burger", "Pizza", "Chitato"],
    drinkSoda: false,
    seatCode: "A",
};

let customer3 = {
    name: "Rega",
    movie: "Sherlock Holmes",
    allergies: ["Gorengan", "Chitato", "Popcorn", "Burger", "Pizza"],
    drinkSoda: true,
    seatCode: "D",
};

// TEST CASES

console.log(printTicket(customer1));
// {
//   name: 'Fajrin',
//   movie: '5 cm',
//   meal: 'Popcorn',
//   drink: 'Coca-Cola',
//   seatType: 'Premiere',
//   seatNumber: 'C3',
//   totalPrice: 75000,
//   message: 'Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha'
// }

console.log(printTicket(customer2));
// {
//   name: 'Amel',
//   movie: 'The Dark Knight',
//   meal: 'Odading',
//   drink: 'Thai Tea',
//   seatType: 'Premiere',
//   seatNumber: 'A2',
//   totalPrice: 54000,
// }

console.log(printTicket(customer3));
// {
//   name: 'Rega',
//   movie: 'Sherlock Holmes',
//   meal: 'Odading',
//   drink: 'Coca-Cola',
//   seatType: 'Regular',
//   seatNumber: 'D4',
//   totalPrice: 55000,
// }

// unit test sederhana hehe :p
// function tester(result, expect) {
//     return result.name === expect.name &&
//         result.movie === expect.movie &&
//         result.meal === expect.meal &&
//         result.drink === expect.drink &&
//         result.seatType === expect.seatType &&
//         result.seatNumber === expect.seatNumber &&
//         result.totalPrice === expect.totalPrice &&
//         result.totalPrice === expect.totalPrice &&
//         result.message === expect.message
//         ? "PASS"
//         : "FAILED";
// }

// const expect1 = {
//     name: "Fajrin",
//     movie: "5 cm",
//     meal: "Popcorn",
//     drink: "Coca-Cola",
//     seatType: "Premiere",
//     seatNumber: "C3",
//     totalPrice: 75000,
//     message:
//         "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
// };
// console.log(tester(printTicket(customer1), expect1));

// const expect2 = {
//     name: "Amel",
//     movie: "The Dark Knight",
//     meal: "Odading",
//     drink: "Thai Tea",
//     seatType: "Premiere",
//     seatNumber: "A2",
//     totalPrice: 54000,
//     message:
//         "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
// };
// console.log(tester(printTicket(customer2), expect2));

// const expect3 = {
//     name: "Rega",
//     movie: "Sherlock Holmes",
//     meal: "Odading",
//     drink: "Coca-Cola",
//     seatType: "Regular",
//     seatNumber: "D4",
//     totalPrice: 55000,
//     message:
//         "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
// };
// console.log(tester(printTicket(customer3), expect3));
