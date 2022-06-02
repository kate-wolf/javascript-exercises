const sumAll = function(firstNumber, secondNumber) {
  if (((firstNumber || secondNumber) < 0) || (!Number.isFinite(firstNumber)) || (!Number.isFinite(secondNumber))) {
    return 'ERROR';
  }
  let biggerNumber = 0;
  if (firstNumber >= secondNumber) {
    biggerNumber = firstNumber; 
  }
  else {
    biggerNumber = secondNumber;
  }
  let result = biggerNumber;
  for (let i = 1; i < biggerNumber; i++) {
    result += biggerNumber - i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
