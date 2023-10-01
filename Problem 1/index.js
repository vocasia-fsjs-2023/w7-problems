var arr = [];
function createObj(name, phase, gender) {
  var student = {
    name: name,
    phase: phase,
    gender: gender,
  };
  arr.push(student);

  return arr;
}

createObj("Akbar", 1, "male");
console.log(arr);
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}]

createObj("Icha", 1, "female");
console.log(arr);
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

function getData(name) {
  var student = arr.find(function (student) {
    return student.name === name;
  });
  return student;
}

// console.log(getData("Icha"));
//EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby"));
//EXPECTATION undefined

// var arr = [];

// function createObj(name, phase, gender) {
//   // Membuat objek siswa baru
//   var student = {
//     name: name,
//     phase: phase,
//     gender: gender,
//   };

//   // Menambahkan objek siswa ke dalam array
//   arr.push(student);

//   return arr;
// }

// function getData(name) {
//   // Mencari siswa dengan nama yang sesuai
//   var student = arr.find(function (student) {
//     return student.name === name;
//   });

//   // Mengembalikan objek siswa jika ditemukan, atau undefined jika tidak ditemukan
//   return student;
// }

// createObj("Akbar", 1, "male");
// //EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}]

// createObj("Icha", 1, "female");
// //EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

// console.log(getData("Icha"));
// //EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}

// console.log(getData("Abby"));
// //EXPECTATION undefined
