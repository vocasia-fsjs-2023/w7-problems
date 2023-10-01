function getDataMovie(movieTitle) {
  const movies = [
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

  const selectedMovie = movies.find((movie) => movie.title === movieTitle);

  return selectedMovie;
}

function getFreeMeal(allergies) {
  const foods = [
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

  let selectedFood = null;

  for (let i = 0; i < foods.length; i++) {
    if (!allergies.includes(foods[i].name)) {
      selectedFood = foods[i];
      break;
    }
  }

  return selectedFood;
}

function getFreeDrink(drinkSoda) {
  const drinks = [
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

  let selectedDrink = null;

  for (let i = 0; i < drinks.length; i++) {
    if (drinkSoda && drinks[i].soda) {
      selectedDrink = drinks[i];
      break;
    } else if (!drinkSoda && !drinks[i].soda) {
      selectedDrink = drinks[i];
      break;
    }
  }

  return selectedDrink;
}

function getCinemaType(movieTitle) {
  const premiereMovies = ["Forrest Gump", "The Dark Knight", "5 cm"];
  return premiereMovies.includes(movieTitle) ? "Premiere" : "Regular";
}

function getSeatNumber(codeSeat) {
  const seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];

  for (let i = 0; i < seats.length; i++) {
    const row = seats[i];
    const rowIndex = row.indexOf(codeSeat);
    if (rowIndex !== -1) {
      const seatNumber = rowIndex + 1;
      return codeSeat + seatNumber;
    }
  }

  return null;
}

function printTicket(customer) {
  const dataMovie = getDataMovie(customer.movie);
  const freeMeal = getFreeMeal(customer.allergies);
  const freeDrink = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);

  if (!dataMovie || !freeMeal || !freeDrink || !cinemaType || !seatNumber) {
    return null;
  }

  const totalPrice =
    dataMovie.price + freeMeal.price + freeDrink.price;

  const message =
    "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

  return {
    name: customer.name,
    movie: customer.movie,
    meal: freeMeal.name,
    drink: freeDrink.name,
    seatType: cinemaType,
    seatNumber: seatNumber,
    totalPrice: totalPrice,
    message: message,
  };
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
