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
  
    let movieData = movies.find((movie) => movie.title === movieTitle);
    return movieData;
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
  
    for (let food of foods) {
      if (!allergies.includes(food.name)) {
        return food;
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
  
    if (drinkSoda) {
      return drinks.find((drink) => drink.soda === true);
    } else {
      return drinks.find((drink) => drink.soda === false);
    }
  }

  function getCinemaType(movieTitle) {
    let types = {
      Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
      Regular: ["Sherlock Holmes", "Call"],
    };
  
    for (let type in types) {
      if (types[type].includes(movieTitle)) {
        return type;
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
  
    let row = codeType.charCodeAt(0) - 'A'.charCodeAt(0);
    for (let i = 1; i < seats[row].length; i++) {
      if (seats[row][i] !== 'x') {
        return `${codeType}${i}`;
      }
    }
  
    return "No available seat";
  }
  

  function printTicket(customer) {
    let movieData = getDataMovie(customer.movie);
    let meal = getFreeMeal(customer.allergies);
    let drink = getFreeDrink(customer.drinkSoda);
    let seatType = getCinemaType(customer.movie);
    let seatNumber = getSeatNumber(customer.seatCode);
  
    let totalPrice = movieData.price + meal.price + drink.price;
  
    let message =
      "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha";
  
    let data =  {
      name: customer.name,
      movie: customer.movie,
      meal: meal.name,
      drink: drink.name,
      seatType: seatType,
      seatNumber: seatNumber,
      totalPrice: totalPrice,
      message: message,
    };
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
  
  console.log(printTicket(customer1));
  console.log(printTicket(customer2));
  console.log(printTicket(customer3));

