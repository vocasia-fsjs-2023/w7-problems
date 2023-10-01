var arr = [];
function createObj(name, phase, gender) {
  // Membuat objek siswa
  const student = { name, phase, gender };
  
  // Menambah objek siswa ke array
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
  let result;
// Mencari siswa dengan nama yang sesuai
  const student = arr.find(s => s.name === name);
  return result;
}

console.log(getData("Icha"));
//EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby"));
//EXPECTATION undefined
