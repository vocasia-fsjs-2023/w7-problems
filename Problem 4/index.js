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

  const movie = movies.find((movie) => movie.title === movieTitle);
  return movie ? movie : null;
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

  const freeFood = foods.find((food) => !allergies.includes(food.name));
  return freeFood ? freeFood : null;
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

  const freeDrink = drinks.find((drink) => drink.soda === drinkSoda);
  return freeDrink ? freeDrink : null;
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };

  for (const type in types) {
    if (types[type].includes(movieTitle)) {
      return type;
    }
  }
  return "Unknown";
}

function getSeatNumber(codeType) {
  // Lambang "x" menandakan bahwa kursi sudah terisi
  let seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];

  for (let i = 0; i < seats.length; i++) {
    const row = seats[i];
    if (row[0] === codeType) {
      for (let j = 1; j < row.length; j++) {
        if (row[j] !== "x") {
          return `${row[0]}${j}`;
        }
      }
    }
  }
  return "No Available Seat";
}

function printTicket(customer) {
  const dataMovie = getDataMovie(customer.movie);
  const freeMeal = getFreeMeal(customer.allergies);
  const freeDrink = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);
  const totalPrice = dataMovie.price + (freeMeal ? freeMeal.price : 0) + (freeDrink ? freeDrink.price : 0);

  const message = "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

  return {
    name: customer.name,
    movie: customer.movie,
    meal: freeMeal ? freeMeal.name : "None",
    drink: freeDrink ? freeDrink.name : "None",
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

// TEST CASES

console.log(printTicket(customer1));
console.log(printTicket(customer2));
console.log(printTicket(customer3));
