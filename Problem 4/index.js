// Fungsi untuk mendapatkan data film berdasarkan judul film
function getDataMovie(movieTitle) {
  let movies = [
    { title: "Sherlock Holmes", price: 20000 },
    { title: "Forrest Gump", price: 18000 },
    { title: "Call", price: 16000 },
    { title: "The Dark Knight", price: 14000 },
    { title: "5 cm", price: 25000 },
  ];

  let selectedMovie = movies.find((movie) => movie.title === movieTitle);
  return selectedMovie || null;
}

// Fungsi untuk menentukan makanan gratis berdasarkan alergi
function getFreeMeal(allergies) {
  let foods = [
    { name: "Pizza", price: 50000 },
    { name: "Burger", price: 45000 },
    { name: "Popcorn", price: 35000 },
    { name: "Odading", price: 20000 },
    { name: "Gorengan", price: 10000 },
    { name: "Chitato", price: 5000 },
  ];

  for (let allergen of allergies) {
    let selectedFood = foods.find((food) => food.name === allergen);
    if (selectedFood) return selectedFood;
  }

  return null;
}

// Fungsi untuk menentukan minuman gratis berdasarkan preferensi minuman
function getFreeDrink(drinkSoda) {
  let drinks = [
    { name: "Coca-Cola", price: 15000, soda: true },
    { name: "Pepsi", price: 12000, soda: true },
    { name: "Thai Tea", price: 20000, soda: false },
    { name: "Siboba", price: 18000, soda: false },
  ];

  let selectedDrink = drinks.find((drink) => drink.soda === drinkSoda);
  return selectedDrink || null;
}

// Fungsi untuk menentukan tipe cinema berdasarkan judul film
function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };

  for (let type in types) {
    if (types[type].includes(movieTitle)) return type;
  }

  return null;
}

// Fungsi untuk menentukan nomor kursi berdasarkan kode kursi
function getSeatNumber(codeType) {
  let seats = [
    ["A", "x", "2", "3", "4"],
    ["B", "1", "x", "x", "4"],
    ["C", "x", "x", "3", "4"],
    ["D", "x", "x", "x", "4"],
  ];

  for (let i = 0; i < seats.length; i++) {
    let rowIndex = seats[i].indexOf(codeType);
    if (rowIndex !== -1 && seats[i][rowIndex] !== "x") {
      return codeType + (rowIndex + 1);
    }
  }

  return null;
}

// Fungsi untuk mencetak tiket berdasarkan informasi pelanggan
function printTicket(customer) {
  let dataMovie = getDataMovie(customer.movie);
  let freeMeal = getFreeMeal(customer.allergies);
  let freeDrink = getFreeDrink(customer.drinkSoda);
  let cinemaType = getCinemaType(customer.movie);
  let seatNumber = getSeatNumber(customer.seatCode);

  if (dataMovie && freeMeal && freeDrink && cinemaType && seatNumber) {
    let totalPrice = dataMovie.price + freeMeal.price + freeDrink.price;
    let message =
      "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";

    return {
      name: customer.name,
      movie: dataMovie.title,
      meal: freeMeal.name,
      drink: freeDrink.name,
      seatType: cinemaType,
      seatNumber: seatNumber,
      totalPrice: totalPrice,
      message: message,
    };
  } else {
    return "Data tidak lengkap atau tidak valid untuk mencetak tiket.";
  }
}

// Informasi pelanggan
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
