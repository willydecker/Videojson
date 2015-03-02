var data = require('./ancestry.js');
var ancestry = JSON.parse(data);

console.log(ancestry.reduce(function(Genre, games) {
	return (games.Genre == 'Adventure')? games : 'none';
}));
		

