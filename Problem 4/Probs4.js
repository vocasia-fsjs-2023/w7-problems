// List film
const filmData = [
    { title: "Sherlock Holmes", price: 20000 },
    { title: "Forrest Gump", price: 18000 },
    { title: "Call", price: 16000 },
    { title: "The Dark Knight", price: 14000 },
    { title: "5 cm", price: 25000 },
  ];
  
  // List Free Meal
  const freeMealData = [
    { name: "Pizza", price: 50000 },
    { name: "Burger", price: 45000 },
    { name: "Popcorn", price: 35000 },
    { name: "Odading", price: 20000 },
    { name: "Gorengan", price: 10000 },
    { name: "Chitato", price: 5000 },
  ];
  
  // List Free Drink
  const freeDrinkData = [
    { name: "Coca-Cola", soda: true, price: 15000 },
    { name: "Pepsi", soda: true, price: 12000 },
    { name: "Thai Tea", soda: false, price: 20000 },
    { name: "SiBoBa", soda: false, price: 18000 },
  ];
  
  // Data Code Seat Number
  const seatNumbers = ["A1", "A2", "B1", "B2", "C1", "C2"];
  
  //Function getDataMovie untuk mencari data dari film yang ingin ditonton oleh customer
  function getDataMovie(movieTitle) {
    const movieData = filmData.find((film) => film.title === movieTitle);
    return movieData;
  }
  //Function getFreeMeal untuk menentukan makanan customer berdasarkan alergi yang dimiliki customer
  function getFreeMeal(allergies) {
    for (const meal of freeMealData) {
      if (!allergies.includes(meal.name)) {
        return meal;
      }
    }
    return null;
  }
  //Function getFreeDrink untuk menentukan minuman customer berdasarkan customer ingin minuman bersoda atau tidak
  function getFreeDrink(drinkSoda) {
    for (const drink of freeDrinkData) {
      if (drinkSoda === drink.soda) {
        return drink;
      }
    }
    return null;
  }
  //Function getCinemaType untuk menentukan tipe cinema berdasarkan film yang ingin di tonton oleh customer
  function getCinemaType(movieTitle) {
    if (movieTitle === "Forrest Gump" || movieTitle === "The Dark Knight" || movieTitle === "5 cm") {
      return "Premiere";
    } else {
      return "Regular";
    }
  }
  //Function getSeatNumber untuk menentukan tempat duduk customer saat menonton film berdasarkan code seat yang dipilih customer
  function getSeatNumber(codeSeat) {
    const index = seatNumbers.findIndex((seat) => seat === codeSeat);
    if (index !== -1) {
      seatNumbers.splice(index, 1);
      return codeSeat;
    } else {
      return "Seat not available";
    }
  }
  //Function printTicket untuk mengeprint tiket customer dengan total harga
  function printTicket(customer) {
    const { name, movie, allergies, drinkSoda, seatCode } = customer;
  
    const movieData = getDataMovie(movie);
    if (!movieData) {
      return "Movie not found";
    }
  
    const meal = getFreeMeal(allergies);
    if (!meal) {
      return "No available meal";
    }
  
    const drink = getFreeDrink(drinkSoda);
    if (!drink) {
      return "No available drink";
    }
  
    const cinemaType = getCinemaType(movie);
    const seatNumber = getSeatNumber(seatCode);
  
    if (seatNumber === "Seat not available") {
      return "Seat not available";
    }
  
    const totalPrice = movieData.price + meal.price + drink.price;
  
    return {
      name,
      movie,
      meal: meal.name,
      drink: drink.name,
      seatType: cinemaType,
      seatNumber,
      totalPrice,
      message: 'Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha'
    };
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
  