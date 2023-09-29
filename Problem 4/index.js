function getDataMovie(movieTitle) {
  const output = {};
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

  for (let index = 0; index < movies.length; index++) {
    if (movies[index].title === movieTitle) {
      output.movie = movies[index].title;
      output.price = movies[index].price;
    }
  }
  // write your code here
  return output;
}
getDataMovie();

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
  for (let index = 0; index < foods.length; index++) {
    if (!allergies.includes(foods[index].name)) {
      return { name: foods[index].name, price: foods[index].price };
    }
  }
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
  for (let index = 0; index < drinks.length; index++) {
    if (drinks[index].soda === drinkSoda.drinkSoda) {
      return drinks[index];
    }
  }
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };

  for (const key in types) {
    for (let index = 0; index < types[key].length; index++) {
      if (types[key][index] === movieTitle) {
        return key;
      }
    }
  }
  // write your code here
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
  for (let index = 0; index < seats.length; index++) {
    for (let j = 0; j < seats[index].length; j++) {
      if (seats[index][0] === codeType && seats[index][j] !== "x" && j !== 0) {
        return `${seats[index][0]}${j}`;
      }
    }
  }
}

function printTicket(customer) {
  // write your code here
  const data = getDataMovie(customer.movie);
  data.name = customer.name;
  data.meal = getFreeMeal(customer.allergies);
  data.drink = getFreeDrink(customer);
  data.seatType = getCinemaType(data.movie);
  data.seatNumber = getSeatNumber(customer.seatCode);
  data.totalPrice = data.price + data.meal.price + data.drink.price;
  data.meal = data.meal.name;
  data.drink = data.drink.name;
  delete data.price;
  data.message =
    "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

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
