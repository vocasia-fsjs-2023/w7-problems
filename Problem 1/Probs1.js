var arr = [];

function createObj(name, phase, gender) {
  // Membuat objek siswa
  const student = { name, phase, gender };

  // Menambahkan objek siswa ke dalam array arr
  arr.push(student);

  // Mengembalikan array arr
  return arr;
}

function getData(name) {
  // Mencari siswa dengan nama yang cocok dalam array arr
  const student = arr.find(student => student.name === name);

  // Mengembalikan objek siswa jika ditemukan, jika tidak ditemukan mengembalikan undefined
  return student;
}

createObj("Akbar", 1, "male");
console.log(arr); // Output: [{name: 'Akbar', phase: 1, gender: 'male'}]

createObj("Icha", 1, "female");
console.log(arr); // Output: [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

console.log(getData("Icha")); // Output: {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby")); // Output: undefined