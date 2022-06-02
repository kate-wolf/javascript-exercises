const ftoc = function(initialTemp) {
  return Math.round((initialTemp - 32) * (5/9) * 10) / 10;
};

const ctof = function(initialTemp) {
  return Math.round((initialTemp * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
