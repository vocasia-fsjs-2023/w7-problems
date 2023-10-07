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

  for (const movie of movies) {
    if (movie.title === movieTitle) {
      return {
        title: movie.title,
        price: movie.price,
      };
    }
  }
  return null; // Film tidak ditemukan
}

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

  for (const food of foods) {
    if (!allergies.includes(food.name)) {
      return {
        name: food.name,
        price: food.price,
      };
    }
  }
  return null; // Semua makanan alergi
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

  for (const drink of drinks) {
    if (drinkSoda === drink.soda) {
      return {
        name: drink.name,
        price: drink.price,
        soda: drink.soda,
      };
    }
  }
  return null; // Tidak ada minuman yang sesuai
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };

  if (types.Premiere.includes(movieTitle)) {
    return "Premiere";
  } else if (types.Regular.includes(movieTitle)) {
    return "Regular";
  }

  return "Tidak ada tipe cinema yang sesuai";
}

function getSeatNumber(codeSeat) {
  let seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];

  for (let i = 0; i < seats.length; i++) {
    if (seats[i][0] === codeSeat) {
      for (let j = 1; j < seats[i].length; j++) {
        if (seats[i][j] !== "x") {
          seats[i][j] = "x";
          return codeSeat + j;
        }
      }
    }
  }

  return "Tempat duduk penuh";
}

function printTicket(customer) {
  const movieData = getDataMovie(customer.movie);
  const mealData = getFreeMeal(customer.allergies);
  const drinkData = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);

  if (
    movieData &&
    mealData &&
    drinkData &&
    cinemaType !== "Tidak ada tipe cinema yang sesuai" &&
    seatNumber !== "Tempat duduk penuh"
  ) {
    const totalPrice = movieData.price + mealData.price + drinkData.price;
    return {
      name: customer.name,
      movie: customer.movie,
      meal: mealData.name,
      drink: drinkData.name,
      seatType: cinemaType,
      seatNumber: seatNumber,
      totalPrice: totalPrice,
      message: "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
    };
  } else {
    return "Tiket tidak dapat dicetak, silakan cek kembali data Anda.";
  }
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
