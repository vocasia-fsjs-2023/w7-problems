function getDataMovie(movieTitle) {
  // Implementasi fungsi getDataMovie di sini
  return allMovies.find(movie => movie.title === movieTitle);
}

function getFreeMeal(allergies) {
  // Implementasi fungsi getFreeMeal di sini
  for (const meal of freeMeals) {
    if (!allergies.includes(meal.name)) {
      return meal;
    }
  }
  return null; // Jika tidak ada free meal yang cocok
}

function getFreeDrink(drinkSoda) {
  // Implementasi fungsi getFreeDrink
  for (const drink of freeDrinks) {
    if (drink.soda === drinkSoda) {
      return drink;
    }
  }
  return null; // Jika tidak ada free drink yang cocok
}

function getCinemaType(movieTitle) {
  // Implementasi fungsi getCinemaType
  const premiereMovies = ["Forrest Gump", "The Dark Knight", "5 cm"];
  return premiereMovies.includes(movieTitle) ? "Premiere" : "Regular";
}

function getSeatNumber(codeSeat) {
  // Implementasi fungsi getSeatNumber
  // Untuk sementara, kita asumsikan kode seat selalu diikuti dengan nomor 1
  return ${codeSeat}1;
}

function printTicket(customer) {
  const { name, movie, allergies, drinkSoda, seatCode } = customer;

  const dataMovie = getDataMovie(movie);
  const freeMeal = getFreeMeal(allergies);
  const freeDrink = getFreeDrink(drinkSoda);
  const cinemaType = getCinemaType(movie);
  const seatNumber = getSeatNumber(seatCode);

  const totalPrice = dataMovie.price + freeMeal.price + freeDrink.price;

  const output = {
    name,
    movie,
    meal: freeMeal.name,
    drink: freeDrink.name,
    seatType: cinemaType,
    seatNumber,
    totalPrice,
    message: "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
  };

  return output;
}

// contoh
const customer = {
  name: "Vincent",
  movie: "Call",
  allergies: ["Popcorn", "Burger"],
  drinkSoda: true,
  seatCode: "B",
};

const ticket = printTicket(customer);
console.log(ticket);
