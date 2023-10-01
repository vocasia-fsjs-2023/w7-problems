// Daftar film
const movies = [
    { title: "Sherlock Holmes", price: 20000 },
    { title: "Forrest Gump", price: 18000 },
    { title: "Call", price: 16000 },
    { title: "The Dark Knight", price: 14000 },
    { title: "5 cm", price: 25000 },
  ];
  
  // Daftar free meal
  const freeMeals = [
    { name: "Pizza", price: 50000 },
    { name: "Burger", price: 45000 },
    { name: "Popcorn", price: 35000 },
    { name: "Odading", price: 20000 },
    { name: "Gorengan", price: 10000 },
    { name: "Chitato", price: 5000 },
  ];
  
  // Daftar free drink
  const freeDrinks = [
    { name: "Coca-Cola", soda: true, price: 15000 },
    { name: "Pepsi", soda: true, price: 12000 },
    { name: "Thai Tea", soda: false, price: 20000 },
    { name: "SiBoBa", soda: false, price: 18000 },
  ];
  
  // Daftar kode seat yang tersedia
  const availableSeats = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
  
  function getDataMovie(movieTitle) {
    for (const movie of movies) {
      if (movie.title === movieTitle) {
        return movie;
      }
    }
    return null; // Jika film tidak ditemukan
  }
  
  function getFreeMeal(allergies) {
    for (const meal of freeMeals) {
      if (!allergies.includes(meal.name)) {
        return meal;
      }
    }
    return null; // Jika tidak ada makanan yang sesuai dengan alergi
  }
  
  function getFreeDrink(drinkSoda) {
    for (const drink of freeDrinks) {
      if (drinkSoda === drink.soda) {
        return drink;
      }
    }
    return null; // Jika tidak ada minuman yang sesuai dengan preferensi soda
  }
  
  function getCinemaType(movieTitle) {
    if (movieTitle === "Forrest Gump" || movieTitle === "The Dark Knight" || movieTitle === "5 cm") {
      return "Premiere";
    } else {
      return "Regular";
    }
  }
  
  function getSeatNumber(codeSeat) {
    const index = availableSeats.indexOf(codeSeat);
    if (index !== -1) {
      availableSeats.splice(index, 1);
      return codeSeat;
    } else {
      return null; // Jika kode seat tidak tersedia
    }
  }
  
  function printTicket(customer) {
    const movieData = getDataMovie(customer.movie);
    const mealData = getFreeMeal(customer.allergies);
    const drinkData = getFreeDrink(customer.drinkSoda);
    const cinemaType = getCinemaType(customer.movie);
    const seatNumber = getSeatNumber(customer.seatCode);
  
    if (movieData && mealData && drinkData && cinemaType && seatNumber) {
      const totalPrice = movieData.price + mealData.price + drinkData.price;
      const ticket = {
        name: customer.name,
        movie: customer.movie,
        meal: mealData.name,
        drink: drinkData.name,
        seatType: cinemaType,
        seatNumber: seatNumber,
        totalPrice: totalPrice,
        message: 'Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha',
      };
      return ticket;
    } else {
      return "Maaf, tiket tidak dapat dicetak karena beberapa alasan.";
    }
  }
  
  // Contoh penggunaan
  const customer = {
    name: "Vincent",
    movie: "Call",
    allergies: ["Popcorn", "Burger"],
    drinkSoda: true,
    seatCode: "B1",
  };
  
  const ticket = printTicket(customer);
  console.log(ticket);
  