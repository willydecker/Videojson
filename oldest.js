var data = require('./ancestry.js');
var ancestry = JSON.parse(data);

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var NextRelease = ancestry.filter(function(game) {
  return game.YearofRelease + 2;
});
console.log(map(NextRelease, function(game) {
  return "Next year a sequel is released: " + game.Title + " " + game.YearofRelease;
}));
