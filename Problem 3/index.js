/**
 * MOVIE RECOMMENDATION
 *
 * Mengembangkan fitur rekomendasi film berdasarkan genre.
 *
 * @param {Array} data - Data film berbentuk array of object.
 * @param {string} category - Genre yang dipilih.
 * @return {Object} - Object berisi data film rating tertinggi pada genre tersebut.
 */
function mostRecommended(data, category) {
  let highestRating = -Infinity; // Inisialisasi nilai peringkat tertinggi dengan nilai negatif tak terbatas.
  let recommendedMovie = null;

  for (let i = 0; i < data.length; i++) {
    const movie = data[i];

    // Memeriksa apakah genre film sama dengan genre yang dipilih dan apakah ratingnya lebih tinggi dari rating tertinggi yang ditemukan sejauh ini.
    if (compareStrings(movie.genre, category) && movie.rating > highestRating) {
      highestRating = movie.rating;
      recommendedMovie = movie;
    }
  }

  // Inisialisasi objek output.
  let output = {};

  // Jika ada film yang direkomendasikan.
  if (recommendedMovie) {
    output.title = recommendedMovie.title;
    output.rating = recommendedMovie.rating;
    output.message = `You should watch this ${category} movie directed by ${recommendedMovie.director}!`;
  } else {
    // Jika tidak ada film dalam genre yang dipilih.
    output.message = 'We cannot find any movie in that category!';
  }

  return output;
}

// Fungsi untuk membandingkan dua string tanpa menggunakan toLowerCase atau toUpperCase.
function compareStrings(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (Math.abs(str1.charCodeAt(i) - str2.charCodeAt(i)) !== 32 && str1.charCodeAt(i) !== str2.charCodeAt(i)) {
      return false;
    }
  }

  return true;
}

// Contoh data film.
let allMovies = [
  {
    title: "Shoplifters",
    genre: "drama",
    director: "Kore-eda Hirokazu",
    rating: 8.1,
  },

  // Data film lainnya...
];

// Contoh pemanggilan fungsi dengan berbagai genre.
console.log(mostRecommended(allMovies, "drama"));
console.log(mostRecommended(allMovies, "action"));
console.log(mostRecommended(allMovies, "documentary"));
console.log(mostRecommended(allMovies, "thriller"));
console.log(mostRecommended(allMovies, "sinetron"));
