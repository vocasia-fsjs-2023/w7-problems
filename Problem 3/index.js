/**
 * MOVIE RECOMMENDATION
 *
 * Kamu sedang mengerjakan project database film untuk sebuah website.
 * Fitur yang akan kamu kembangkan adalah rekomendasi film berdasarkan genre.
 *
 * Input yang diterima: 1) data film berbentuk array of object, dan 2) genre yang dipilih.
 * Hasil akhir: object berisi data film rating tertinggi pada genre tersebut.
 *
 * Lihat contoh eksekusi function untuk output yang diharapkan!
 * Ketika tidak ditemukan kategori yang sesuai, maka akan muncul pesan berbeda.
 *
 * Dilarang memakai built-in function kecuali:
 * toString, String, Number, push, pop, typeof, toLowerCase, toUpperCase, toFixed
 *
 */

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
  // INSERT YOUR CODE HERE

  return output;
}

console.log(mostRecommended(allMovies, "drama"));
/*
{
  title: 'Shoplifters',
  rating: 8.1,
  message: 'You should watch this drama movie directed by Kore-eda Hirokazu!'
}
*/

console.log(mostRecommended(allMovies, "action"));
/*
{
  title: 'The Raid 2',
  rating: 8.2,
  message: 'You should watch this action movie directed by Gareth Evans!'
}
*/

console.log(mostRecommended(allMovies, "documentary"));
/*
{
  title: 'Senyap',
  rating: 8.3,
  message: 'You should watch this documentary movie directed by Joshua Oppenheimer!'
}
*/

console.log(mostRecommended(allMovies, "thriller"));
/*
{
  title: 'Parasite',
  rating: 8.6,
  message: 'You should watch this thriller movie directed by Bong Joon-ho!'
}
*/

console.log(mostRecommended(allMovies, "sinetron"));
/*
{
  message: 'We cannot find any movie in that category!'
}
*/
