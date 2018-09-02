// add solution here
var musicians = ["John Lennon", "Ringo Star", "George Harrison", "Paul McCartney"]
var instruments = ["guitar", "drums", "guitar", "bass"]

function theBeatlesPlay(musicians, instruments) {
  var arr = [] // = Empty Array
  for (var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i])
  }

  return arr // returns ARRAY that is populated by the concetenated strings from musicians and instruments arrays
}

// johnLennonFacts

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var text = "";
var i = 0;

function johnLennonFacts(facts) {
  while (facts[i]) {
    text += facts[i] + "!!!"; i++;
  }
}
