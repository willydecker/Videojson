var ANCESTRY_FILE = "[\n  " + [
  '{"Title" : "Saints Row", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Final Fantasy VII", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "TPS", "Contains Multiplayer": false", "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Final Fantasy XIII", "Gender of Protagongist": "F", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Final Fantasy XIII-2", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Final Fantasy XIII-3", "Gender of Protagongist": "F", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "inFamous", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "TPS", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "inFamous 2", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "TPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Guitar Hero", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Music", "Contains Multiplayer": true, "Contains Violence": false, "Contains Creative Mode": true}',
  '{"Title" : "Rock Band", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Music", "Contains Multiplayer": true, "Contains Violence": false, "Contains Creative Mode": true}',
  '{"Title" : "Far Cry", "Gender of Protagongist": "M", "Line of Sight": "1st person", "Genre": "FPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Call of Duty", "Gender of Protagongist": "M", "Line of Sight": "1st person", "Genre": "FPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Civilization", "Gender of Protagongist": "Both", "Line of Sight": "Top Down", "Genre": "Strategy", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Little Big Planet", "Gender of Protagongist": "Both", "Line of Sight": "Top Down", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Super Mario Brothers", "Gender of Protagongist": "M", "Line of Sight": "Profile", "Genre": "Platformer", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Prototype", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Prototype 2", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "WWE", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Blitz", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": true}',
  '{"Title" : "Assassins Creed II", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Assassins Creed Botherhood", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Assassins Creed Revelations", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Yakuza", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Spyro", "Gender of Protagongist": "M", "Line of Sight": "3rd person", "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Crash Bandicoot", "Gender of Protagongist": "M", "Line of Sight": 3rd person, "Genre": "Adventure", "Contains Multiplayer": false, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Need For Speed", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Wipeout", "Gender of Protagongist": "Both", "Line of Sight": "3rd person", "Genre": "Sports", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}',
  '{"Title" : "Battlefield", "Gender of Protagongist": "M", "Line of Sight": "1st person", "Genre": "FPS", "Contains Multiplayer": true, "Contains Violence": true, "Contains Creative Mode": false}'


].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
