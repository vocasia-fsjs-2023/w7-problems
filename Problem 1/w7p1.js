var arr = [];

function createObj(name, phase, gender) {
  // Create an object with the given properties
  var newObj = {
    name: name,
    phase: phase,
    gender: gender
  };
  
  // Push the new object into the 'arr' array
  arr.push(newObj);

  return arr;
}

createObj("Akbar", 1, "male");
console.log(arr);
// EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}]

createObj("Icha", 1, "female");
console.log(arr);
// EXPECTATION [{name: 'Akbar', phase: 1, gender: 'male'}, {name: 'Icha', phase: 1, gender: 'female'}]

function getData(name) {
  // Search for an object in the 'arr' array with the given name
  let result;
  result = arr.find(function(obj) {
    return obj.name === name;
  });

  return result;
}

console.log(getData("Icha"));
// EXPECTATION {name: 'Icha', phase: 1, gender: 'female'}
console.log(getData("Abby"));
// EXPECTATION undefined
