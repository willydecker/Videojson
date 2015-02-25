var ANCESTRY_FILE = "[\n  " + [
  '{"Title" : "Saints Row", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2006}',
  '{"Title" : "Final Fantasy VII", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "TPS", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 1997}',
  '{"Title" : "Final Fantasy XIII", "GenderofProtagongist": "F", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2010}',
  '{"Title" : "Final Fantasy XIII-2", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2012}',
  '{"Title" : "Final Fantasy XIII-3", "GenderofProtagongist": "F", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2014}',
  '{"Title" : "inFamous", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "TPS", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2009}',
  '{"Title" : "inFamous 2", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "TPS", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2011}',
  '{"Title" : "Guitar Hero", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Music", "ContainsMultiplayer": true, "ContainsViolence": false, "YearofRelease": 2005}',
  '{"Title" : "Rock Band", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Music", "ContainsMultiplayer": true, "ContainsViolence": false, "YearofRelease": 2008}',
  '{"Title" : "Far Cry", "GenderofProtagongist": "M", "LineofSight": "1st person", "Genre": "FPS", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2004}',
  '{"Title" : "Call of Duty", "GenderofProtagongist": "M", "LineofSight": "1st person", "Genre": "FPS", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2003}',
  '{"Title" : "Civilization", "GenderofProtagongist": "Both", "LineofSight": "Top Down", "Genre": "Strategy", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 1991}',
  '{"Title" : "Little Big Planet", "GenderofProtagongist": "Both", "LineofSight": "Top Down", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2008}',
  '{"Title" : "Super Mario Brothers", "GenderofProtagongist": "M", "LineofSight": "Profile", "Genre": "Platformer", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 1985}',
  '{"Title" : "Prototype", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2009}',
  '{"Title" : "Prototype 2", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2012}',
  '{"Title" : "WWE", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2000}',
  '{"Title" : "Blitz", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2005}',
  '{"Title" : "Assassins Creed II", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2009}',
  '{"Title" : "Assassins Creed Botherhood", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2010}',
  '{"Title" : "Assassins Creed Revelations", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2011}',
  '{"Title" : "Yakuza", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 2005}',
  '{"Title" : "Spyro", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 1998}',
  '{"Title" : "Crash Bandicoot", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "YearofRelease": 1996}',
  '{"Title" : "Need For Speed", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 1996}',
  '{"Title" : "Wipeout", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 1995}',
  '{"Title" : "Battlefield", "GenderofProtagongist": "M", "LineofSight": "1st person", "Genre": "FPS", "ContainsMultiplayer": true, "ContainsViolence": true, "YearofRelease": 2002}'


].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
