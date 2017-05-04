var words = ["ground", "control", "to", "major", "tom"];

function turnTo(array, cb) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    result.push(cb(word));
  }
  return result;
}

var fivewords = turnTo(words, function(word) {
  return word.length;
});

console.log(fivewords);







// Result should return the following [6, 7, 2, 5, 3]
