var data = require('./ancestry.js');
var ancestry = JSON.parse(data);
//this should work. it should go one by one through each of my pieces of ancestry and return a number for all the games that have "adventure" as a genre
//according to
//https://msdn.microsoft.com/en-us/library/ie/ff679975%28v=vs.94%29.aspx
console.log(JSON.stringify(ancestry.reduce(function(newest, game) {
	return (game.YearofRelease > newest.YearofRelease)? game : newest;
})));

		

