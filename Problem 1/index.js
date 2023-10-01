// Inisialisasi array untuk menyimpan data siswa
var arr = [];

// Function untuk mendaftarkan siswa
function createObj(name, phase, gender) {
  // Membuat objek siswa baru dengan informasi yang diberikan
  const siswa = {
    name: name,
    phase: phase,
    gender: gender
  };
  
  // Menambahkan siswa ke dalam array arr
  arr.push(siswa);

  // Mengembalikan array arr yang sudah diperbarui
  return arr;
}

// Menambahkan siswa pertama
createObj("Akbar", 1, "male");
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}]

// Menambahkan siswa kedua
createObj("Icha", 1, "female");
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

// Function untuk mendapatkan data siswa berdasarkan nama
function getData(name) {
  // Mencari siswa dengan nama yang sesuai menggunakan .find()
  const siswa = arr.find(student => student.name === name);

  // Mengembalikan objek siswa jika ditemukan, atau undefined jika tidak ditemukan
  return siswa;
}

// Mengambil data siswa dengan nama "Icha"
console.log(getData("Icha"));
//EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}

// Mengambil data siswa dengan nama "Abby"
console.log(getData("Abby"));
//EXPECTATION undefined
