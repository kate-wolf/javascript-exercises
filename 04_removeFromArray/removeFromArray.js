const removeFromArray = function(array, ...values) {
  for (const value of values) {
    let element = 0;
    do {
      if (array[element] === value) {
        array.splice(element, 1);
      }
      element++;
    } while (element < array.length)
  } 
  return array;
};

// removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
