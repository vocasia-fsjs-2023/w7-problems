function recommendFilmByGenre(filmData, genre) {
    // Filter film berdasarkan genre yang dipilih
    const filteredFilms = filmData.filter(film => film.genre === genre);
  
    // Jika tidak ada film dalam genre yang dipilih, kembalikan pesan
    if (filteredFilms.length === 0) {
      return `Tidak ada film dalam genre ${genre} yang tersedia.`;
    }
  
    // Temukan film dengan rating tertinggi
    const topRatedFilm = filteredFilms.reduce((maxRatingFilm, currentFilm) => {
      return currentFilm.rating > maxRatingFilm.rating ? currentFilm : maxRatingFilm;
    });
  
    // Kembalikan film dengan rating tertinggi
    return topRatedFilm;
  }
  
  // Contoh data film
  const filmData = [
    { title: "Film A", genre: "Action", rating: 8.5 },
    { title: "Film B", genre: "Drama", rating: 7.8 },
    { title: "Film C", genre: "Action", rating: 9.0 },
    { title: "Film D", genre: "Comedy", rating: 6.5 },
  ];
  
  // Contoh penggunaan
  const genre = "Action";
  const recommendedFilm = recommendFilmByGenre(filmData, genre);
  
  if (typeof recommendedFilm === "string") {
    console.log(recommendedFilm); // Output jika tidak ada film dalam genre yang dipilih
  } else {
    console.log(`Film dengan rating tertinggi dalam genre ${genre} adalah ${recommendedFilm.title} dengan rating ${recommendedFilm.rating}`);
  }
  