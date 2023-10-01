function getDataMovie(movieTitle) {
  console.log(movieTitle.name);
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
  const movieData = movies.find(movie => movie.title === movieTitle);

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
  // write your code here
  let freeMeal = "Chitato"; // Default free meal

  for (const allergy of allergies) {
    const foodIndex = foods.findIndex(food => food.name === allergy);
    if (foodIndex !== -1) {
      freeMeal = foods[foodIndex].name;
      break;
    }
  }

  return freeMeal;
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
 const freeDrink = drinks.find(drink => drink.soda === drinkSoda);

  return freeDrink;
}

function getCinemaType(movieTitle) {
  let types = {
    Premiere: ["Forrest Gump", "The Dark Knight", "5 cm"],
    Regular: ["Sherlock Holmes", "Call"],
  };
  // write your code here
  for (const type in types) {
    if (types[type].includes(movieTitle)) {
      return type;
    }
  }

  return "Regular";
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
  let row, col;

  for (let i = 0; i < seats.length; i++) {
    const rowIndex = seats[i].indexOf(codeSeat);
    if (rowIndex !== -1) {
      row = String.fromCharCode(65 + i); // Convert row index to letter
      col = rowIndex + 1;
      break;
    }
  }
  const seatNumber = `${row}${col}`;
  return seatNumber;
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
  let row, col;
  for (let i = 0; i < seats.length; i++) {
    let rowIndex = seats[i].indexOf(codeType);
    if (rowIndex !== -1) {
      row = String.fromCharCode(65 + i);
      col = rowIndex + 1;
      break;
    }
  }

  return `${row}${col}`;
}

function printTicket(customer) {
  // write your code here
  const movieData = getDataMovie(customer.movie);
  const freeMeal = getFreeMeal(customer.allergies);
  const freeDrink = getFreeDrink(customer.drinkSoda);
  const cinemaType = getCinemaType(customer.movie);
  const seatNumber = getSeatNumber(customer.seatCode);
  const totalPrice = movieData.price + (freeMeal ? freeMeal.price : 0) + (freeDrink ? freeDrink.price : 0);

  const data = {
    name: customer.name,
    movie: customer.movie,
    meal: freeMeal ? freeMeal.name : undefined,
    drink: freeDrink ? freeDrink.name : undefined,
    seatType: cinemaType,
    seatNumber,
    totalPrice,
    message: "Yeay semua kamu dapatkan gratis loh! Tapi boong!, kan lagi covid hahaha",
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
