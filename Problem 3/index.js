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
    {
        title: "The Raid",
        genre: "action",
        director: "Gareth Evans",
        rating: 7.6,
    },
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
    {
        title: "Hereditary",
        genre: "horror",
        director: "Ari Aster",
        rating: 7.3,
    },
    {
        title: "The Farewell",
        genre: "drama",
        director: "Lulu Wang",
        rating: 7.7,
    },
    {
        title: "Parasite",
        genre: "thriller",
        director: "Bong Joon-ho",
        rating: 8.6,
    },
];

function mostRecommended(data, category) {
    let output = {};
    let maxRating = -1; // Nilai awal yang sangat rendah untuk mencari rating tertinggi
    let recommendedMovie = null;

    for (let i = 0; i < data.length; i++) {
        const movie = data[i];

        // Cek apakah genre film sesuai dengan kategori yang dicari
        if (movie.genre === category) {
            if (movie.rating > maxRating) {
                // Jika rating film lebih tinggi dari maxRating sebelumnya, update recommendedMovie
                maxRating = movie.rating;
                recommendedMovie = movie;
            }
        }
    }

    if (recommendedMovie === null) {
        output["message"] = "We cannot find any movie in that category!";
    } else {
        const { director, genre, ...others } = recommendedMovie;
        others.message = `You should watch this ${genre} movie directed by ${director}!`;

        output = others;
    }

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

// Ini cuman unit test sederhana :P
// function testCase(kasus, expect) {
//     if (
//         kasus.title === expect.title &&
//         kasus.rating === expect.rating &&
//         kasus.message === expect.message
//     ) {
//         return "PASS";
//     } else {
//         return kasus.message === expect.message ? "PASS" : "FAIL";
//     }
// }

// const arrTest = [
//     testCase(mostRecommended(allMovies, "drama"), {
//         title: "Shoplifters",
//         rating: 8.1,
//         message:
//             "You should watch this drama movie directed by Kore-eda Hirokazu!",
//     }),
//     testCase(mostRecommended(allMovies, "drama"), {
//         title: "Shoplifters",
//         rating: 8.1,
//         message:
//             "You should watch this drama movie directed by Kore-eda Hirokazu!",
//     }),
//     testCase(mostRecommended(allMovies, "action"), {
//         title: "The Raid 2",
//         rating: 8.2,
//         message: "You should watch this action movie directed by Gareth Evans!",
//     }),
//     testCase(mostRecommended(allMovies, "documentary"), {
//         title: "Senyap",
//         rating: 8.3,
//         message:
//             "You should watch this documentary movie directed by Joshua Oppenheimer!",
//     }),
//     testCase(mostRecommended(allMovies, "thriller"), {
//         title: "Parasite",
//         rating: 8.6,
//         message:
//             "You should watch this thriller movie directed by Bong Joon-ho!",
//     }),
//     testCase(mostRecommended(allMovies, "sinetron"), {
//         message: "We cannot find any movie in that category!",
//     }),
// ];

// arrTest.forEach((element) => {
//     console.log(element);
// });
