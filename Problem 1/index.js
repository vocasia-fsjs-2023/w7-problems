var arr = []; // Array untuk menyimpan data siswa

function createObj(name, phase, gender) {
  // Membuat objek siswa baru
  const student = { name, phase, gender };
  
  // Menambahkan objek siswa ke dalam array
  arr.push(student);
  
  // Mengembalikan array setelah penambahan data
  return arr;
}

createObj("Akbar", 1, "male");
createObj("Icha", 1, "female");

function getData(name) {
  // Mencari objek siswa berdasarkan nama
  for (const student of arr) {
    if (student.name === name) {
      return student; // Mengembalikan objek siswa jika nama cocok
    }
  }
  
  return undefined; // Mengembalikan undefined jika nama tidak ditemukan
}

console.log(getData("Icha")); // { name: 'Icha', phase: 1, gender: 'female' }
console.log(getData("Abby")); // undefined
