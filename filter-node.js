var data = require('./ancestry.js');
var ancestry = JSON.parse(data);
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter(ancestry, function(game) {
  return game.YearofRelease > 2000;
}));

