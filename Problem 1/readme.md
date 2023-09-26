# Data Siswa (Object Literals)

## Objectives

- Mampu mengakses sebuah array of object
- Mampu membuat object of object
- Mampu mengecek kondisi data untuk didapatkan dari suatu array object

**RESTRICTION**
Hanya boleh menggunakan built-in function untuk menambahkan data dalam array, seperti .shift(), push(), dan built-in function untuk mengakses isi dalam object seperti for..in, for...of, Object.keys(), diperbolehkan juga untuk menggunakan built-in function array untuk memfilter suatu data seperti .filter() dan .map(), atau mendapatkan satu data dari suatu array seperti .find()

## Directions

diberikan 2 buah function bernama createObj(), dan getData(),

- Implementasikan function createObj untuk mendaftarkan siswa dengan input data sesuai object yg dibutuhkan yaitu nama, phase, dan gender.
- Implementasikan fu nction getData() untuk mendapatkan data hanya dari nama, dengan input nama bisa mendapatkan seluruh data siswa tersebut

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

createObj("Akbar", 1, "male")

```
[
  {name: 'Akbar', phase: 1, gender: 'male'}
]
```

getData("Akbar")

```
{name: 'Akbar', phase: 1, gender: 'male'}
```

```JavaScript
var arr = [];
function createObj(name, phase, gender) {
  // YOUR CODE HERE...

  // END OF YOUR CODE HERE...
  return arr;
}

createObj("Akbar", 1, "male");
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}]

createObj("Icha", 1, "female");
//EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

function getData(name) {
  let result;
  // YOUR CODE HERE...

  // END OF YOUR CODE HERE...
  return result;
}

console.log(getData("Icha"));
//EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby"));
//EXPECTATION undefined

```
