// add solution here
var musicians = ["John Lennon", "Ringo Star", "George Harrison", "Paul McCartney"]
var instruments = ["guitar", "drums", "guitar", "bass"]

function theBeatlesPlay(musicians, instruments) {
  var arr = [] // Empty Array
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

var i = 0;

function johnLennonFacts(facts) {
  var arr2 = [] // Empty array
  while (i < facts.length) {
    arr2.push(facts[i] + "!!!");
    i++;
  }

  return arr2
}

/* Create a function iLoveTheBeatles which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than 15.
The function should return the array with the strings "I love the Beatles!" */
