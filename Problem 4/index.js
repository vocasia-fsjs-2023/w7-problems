function getDataMovie(movieTitle) {
  let output = {};
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
    if (movies[i].title === movieTitle["movie"]) {
      output.title = movies[i].title;
      output.price = movies[i].price;
    }
  }
  return output;
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
  // write your code here

  const freeMeal = foods.find((food) => !allergies.includes(food.name));
  return freeMeal;
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
  const drink = drinks.find((minum) => minum.soda === drinkSoda);
  return drink;
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };
  // write your code here
  for (let movie in types) {
    if (types[movie].includes(movieTitle)) {
      return movie;
    }
  }
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
    const baris = seats[i][0];
    const seatAvailable = seats[i].slice(1);
    const seatIndex = seatAvailable.findIndex((seat) => seat !== "x");

    if (baris == codeType && seatIndex !== -1) {
      const seatNumber = seatIndex + 1;
      return `${baris}${seatNumber}`;
    }
  }
  return "Kursi Penuh";
}

function printTicket(customer) {
  // write your code here
  let data = getDataMovie(customer);
  let food = getFreeMeal(customer.allergies);
  let drink = getFreeDrink(customer.drinkSoda);
  let movieType = getCinemaType(customer.movie);
  let seat = getSeatNumber(customer.seatCode);

  const totalPrice =
    data.price + (food ? food.price : 0) + (drink ? drink.price : 0);

  if (totalPrice >= 75000) {
    return {
      name: customer.name,
      movie: customer.movie,
      meal: food ? food.name : "Tidak Ada",
      drink: drink ? drink.name : "Tidak Ada",
      seatType: movieType,
      seatNumber: seat,
      totalPrice: totalPrice,
      message: (message =
        "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha"),
    };
  } else if (totalPrice < 75000) {
    return {
      name: customer.name,
      movie: customer.movie,
      meal: food ? food.name : "Tidak Ada",
      drink: drink ? drink.name : "Tidak Ada",
      seatType: movieType,
      seatNumber: seat,
      totalPrice: totalPrice,
    };
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
