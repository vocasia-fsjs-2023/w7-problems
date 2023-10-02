let allMovies = [
    {
      title: "The Wages of Fear",
      genre: "thriller",
      director: "Henri-Georges Clouzot",
      rating: 8.4,
    },
    {
      title: "No Country for Old Men",
      genre: "thriller",
      director: "Coen Brothers",
      rating: 8.1,
    },
    {
      title: "500 Days of Summer",
      genre: "romance",
      director: "Marc Webb",
      rating: 7.8,
    },
    { title: "The Raid", genre: "action", director: "Gareth Evans", rating: 7.6 },
    {
      title: "The Raid 2",
      genre: "action",
      director: "Gareth Evans",
      rating: 8.2,
    },
    {
      title: "Senyap",
      genre: "documentary",
      director: "Joshua Oppenheimer",
      rating: 8.3,
    },
    {
      title: "Shoplifters",
      genre: "drama",
      director: "Kore-eda Hirokazu",
      rating: 8.1,
    },
    { title: "Hereditary", genre: "horror", director: "Ari Aster", rating: 7.3 },
    { title: "The Farewell", genre: "drama", director: "Lulu Wang", rating: 7.7 },
    {
      title: "Parasite",
      genre: "thriller",
      director: "Bong Joon-ho",
      rating: 8.6,
    },
  ];
  
  function mostRecommended(data, category) {
    let output = {};
    let highestRating = -1;
    let recommendedMovie = null;
  
    for (let i = 0; i < data.length; i++) {
      const movie = data[i];
  
      // Check if the movie belongs to the specified category
      if (movie.genre === category) {
        if (movie.rating > highestRating) {
          highestRating = movie.rating;
          recommendedMovie = movie;
        }
      }
    }
  
    if (recommendedMovie) {
      output = {
        title: recommendedMovie.title,
        rating: recommendedMovie.rating,
        message: `You should watch this ${category} movie directed by ${recommendedMovie.director}!`,
      };
    } else {
      output = {
        message: `We cannot find any movie in that category!`,
      };
    }
    return output;
  }
  
  console.log(mostRecommended(allMovies, "drama"));
  console.log(mostRecommended(allMovies, "action"));
  console.log(mostRecommended(allMovies, "documentary"));
  console.log(mostRecommended(allMovies, "thriller"));
  console.log(mostRecommended(allMovies, "sinetron"));
  