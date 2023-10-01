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
  const movie = movies.find((m) => m.title === movieTitle);
  return movie;
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
      return food;
    }
  }
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
  for (const drink of drinks) {
    if (drinkSoda === drink.soda) {
      return drink;
    }
  }
  return drinks[0];
}

function getCinemaType(movieTitle) {
  const moviesPremiere = ["Forrest Gump", "The Dark Knight", "5 cm"];
  return moviesPremiere.includes(movieTitle) ? "Premiere" : "Regular";
}

function getSeatNumber(codeSeat) {
  let seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];
  for (const row of seats) {
    const seatIndex = row.findIndex((seat) => seat === codeSeat);
    if (seatIndex !== -1) {
      return codeSeat + (seatIndex + 1);
    }
  }
  return codeSeat + "1"; // Default to 1 if not found
}

function printTicket(customer) {
  const { name, movie, allergies, drinkSoda, seatCode } = customer;

  const movieData = getDataMovie(movie);
  const meal = getFreeMeal(allergies);
  const drink = getFreeDrink(drinkSoda);
  const seatType = getCinemaType(movie);
  const seatNumber = getSeatNumber(seatCode);

  const totalPrice = movieData.price + meal.price + drink.price;

  const message =
    "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

  const ticket = {
    name,
    movie,
    meal: meal.name,
    drink: drink.name,
    seatType,
    seatNumber,
    totalPrice,
    message,
  };

  return ticket;
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

console.log(printTicket(customer1));
console.log(printTicket(customer2));
console.log(printTicket(customer3));

