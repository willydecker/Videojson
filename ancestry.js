var ANCESTRY_FILE = "[\n  " + [
  '{"Title" : "Saints Row", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": true}',
  '{"Title" : "Final Fantasy VII", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "TPS", "ContainsMultiplayer": false", "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Final Fantasy XIII", "GenderofProtagongist": "F", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Final Fantasy XIII-2", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Final Fantasy XIII-3", "GenderofProtagongist": "F", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "inFamous", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "TPS", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "inFamous 2", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "TPS", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Guitar Hero", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Music", "ContainsMultiplayer": true, "ContainsViolence": false, "ContainsCreativeMode": true}',
  '{"Title" : "Rock Band", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Music", "ContainsMultiplayer": true, "ContainsViolence": false, "ContainsCreativeMode": true}',
  '{"Title" : "Far Cry", "GenderofProtagongist": "M", "LineofSight": "1st person", "Genre": "FPS", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": true}',
  '{"Title" : "Call of Duty", "GenderofProtagongist": "M", "LineofSight": "1st person", "Genre": "FPS", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Civilization", "GenderofProtagongist": "Both", "LineofSight": "Top Down", "Genre": "Strategy", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": true}',
  '{"Title" : "Little Big Planet", "GenderofProtagongist": "Both", "LineofSight": "Top Down", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": true}',
  '{"Title" : "Super Mario Brothers", "GenderofProtagongist": "M", "LineofSight": "Profile", "Genre": "Platformer", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Prototype", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Prototype 2", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "WWE", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": true}',
  '{"Title" : "Blitz", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": true}',
  '{"Title" : "Assassins Creed II", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Assassins Creed Botherhood", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Assassins Creed Revelations", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Yakuza", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Spyro", "GenderofProtagongist": "M", "LineofSight": "3rd person", "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Crash Bandicoot", "GenderofProtagongist": "M", "LineofSight": 3rd person, "Genre": "Adventure", "ContainsMultiplayer": false, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Need For Speed", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Wipeout", "GenderofProtagongist": "Both", "LineofSight": "3rd person", "Genre": "Sports", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}',
  '{"Title" : "Battlefield", "GenderofProtagongist": "M", "LineofSight": "1st person", "Genre": "FPS", "ContainsMultiplayer": true, "ContainsViolence": true, "ContainsCreativeMode": false}'


].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
