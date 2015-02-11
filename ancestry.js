var ANCESTRY_FILE = "[\n  " + [
  '{"Title" : "Saints Row", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Final Fantasy VII", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "TPS", "Contains Multiplayer": false", "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Final Fantasy XIII", "GenderofProtagongist": "F", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Final Fantasy XIII-2", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Final Fantasy XIII-3", "GenderofProtagongist": "F", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "inFamous", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "TPS", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "inFamous 2", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "TPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Guitar Hero", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Music", "Contains Multiplayer": true, "Contains Violence": false, "Contains Creative Mode": true}',
  '{"Title" : "Rock Band", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Music", "Contains Multiplayer": true, "Contains Violence": false, "Contains Creative Mode": true}',
  '{"Title" : "Far Cry", "GenderofProtagongist": "M", "Line of Sight": "1st person", "Genre": "FPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Call of Duty", "GenderofProtagongist": "M", "Line of Sight": "1st person", "Genre": "FPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Civilization", "GenderofProtagongist": "Both", "Line of Sight": "Top Down", "Genre": "Strategy", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Little Big Planet", "GenderofProtagongist": "Both", "Line of Sight": "Top Down", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Super Mario Brothers", "GenderofProtagongist": "M", "Line of Sight": "Profile", "Genre": "Platformer", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Prototype", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Prototype 2", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "WWE", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Blitz", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Assassins Creed II", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Assassins Creed Botherhood", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Assassins Creed Revelations", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Yakuza", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Spyro", "GenderofProtagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Crash Bandicoot", "GenderofProtagongist": "M", "Line of Sight": 3rd person, "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Need For Speed", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Wipeout", "GenderofProtagongist": "Both", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Battlefield", "GenderofProtagongist": "M", "Line of Sight": "1st person", "Genre": "FPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}'


].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
