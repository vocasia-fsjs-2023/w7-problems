function getHighestRatedMovieByGenre(movies, genre) {
    let highestRatedMovie = null;
    let highestRating = 0;
  
    for (const movie of movies) {
      if (movie.genres.includes(genre)) {
        if (movie.rating > highestRating) {
          highestRating = movie.rating;
          highestRatedMovie = movie;
        }
      }
    }
  
    return highestRatedMovie;
  }
  
  // Contoh data film
  const movies = [
    { tite: "Movie A", rating: 8.5, genres: ["Action", "Drama"] },
    { title: "Movie B", rating: 7.8, genres: ["Comedy", "Romance"] },
    { title: "Movie C", rating: 9.2, genres: ["Drama"] },
    { title: "Movie D", rating: 8.0, genres: ["Action", "Adventure"] },
  ];
  
  const selectedGenre = "Drama";
  const result = getHighestRatedMovieByGenre(movies, selectedGenre);
  
  if (result) {
    console.log(`Film dengan rating tertinggi dalam genre ${selectedGenre} adalah ${result.title} dengan rating ${result.rating}`);
  } else {
    console.log(`Tidak ada film dalam genre ${selectedGenre}.`);
  }

  