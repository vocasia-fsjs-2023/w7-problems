var arr = [];
function createObj(name, phase, gender) {
  var dataSiswa = {
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
  var dataSiswa = arr.find(function (dataSiswa) {
    return dataSiswa.name === name;
  });
  return dataSiswa;
}
console.log(getData("Icha"));
//EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby"));
//EXPECTATION undefined
