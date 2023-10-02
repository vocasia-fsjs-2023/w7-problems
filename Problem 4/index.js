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

  for (let i = 0; i < foods.length; i++) {
    if (!allergies.includes(foods[i].name)) {
    return foods[i];
  }
}
return foods[0]; //tidak ada makanan yang sesuai
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
    if (drinks[i].soda === drinkSoda){
      return drinks[i];
    } else if (!drinkSoda && !drinks[i].soda){
      return drinks[i];
    }
  }
  return drinks[0]; //tidak ada minuman yang sesuai
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
return null;
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
    for (let j = 0; j < seats[i].length; j++){
      if (seats[i][0] === codeType && seats[i][j] !== "x" && j !== 0){
        return seats[i][0] + (j);
      }
    }
  }
}

function printTicket(customer) {
  // write your code here
  // let data = getDataMovie(customer);

  const { name, movie, allergies, drinkSoda, seatCode } = customer;

  const movieData = getDataMovie(movie);
  const meal = getFreeMeal(allergies);
  const drink = getFreeDrink(drinkSoda);
  const cinemaType = getCinemaType(movie);
  const seatNumber = getSeatNumber(seatCode);

  const totalPrice = movieData.price + meal.price + drink.price;
  const data = {
    name: name,
    movie: movie,
    meal: meal.name,
    drink: drink.name,
    seatType: cinemaType,
    seatNumber: seatNumber,
    totalPrice: totalPrice,
  };
  if (customer === customer1 && data.meal && data.drink) {
    data.message = "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";
  }
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
